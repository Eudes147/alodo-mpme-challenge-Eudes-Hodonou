<!-- pages/diagnostic.vue -->
<template>
  <div class="max-w-2xl mx-auto space-y-4 sm:space-y-6">
    <!-- En-tête : Navigation & Progression -->
    <AppCard class="p-4 sm:p-5">
      <div class="flex items-center justify-between gap-3 mb-3">
        <button 
          @click="confirmAbandon" 
          class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-alodo-grey-600 hover:text-alodo-black transition-colors"
        >
          <span>‹</span>
          <span>Accueil</span>
        </button>

        <AppBadge variant="teal" class="truncate max-w-[180px] sm:max-w-none">
          {{ currentDimensionLabel }}
        </AppBadge>

        <span class="text-xs sm:text-sm font-bold text-alodo-black">
          {{ currentIndex + 1 }} / {{ totalQuestions }}
        </span>
      </div>

      <div class="w-full bg-alodo-grey-100 h-2 sm:h-2.5 rounded-full overflow-hidden">
        <div 
          class="bg-alodo-primary h-full transition-all duration-300 ease-out"
          :style="{ width: `${progressPercentage}%` }"
        ></div>
      </div>
    </AppCard>

    <!-- Zone Centrale : Question Active avec Rendu Dynamique selon le Type -->
    <div class="relative overflow-hidden">
      <Transition :name="transitionName" mode="out-in">
        <AppCard 
          :key="currentQuestion.id" 
          class="p-5 sm:p-8 space-y-6 min-h-[320px] flex flex-col justify-between"
        >
          <!-- Énoncé et contexte -->
          <div class="space-y-2">
            <h2 class="text-base sm:text-xl font-bold text-alodo-black leading-snug">
              {{ currentQuestion.label }}
            </h2>
            <p v-if="currentQuestion.context" class="text-xs sm:text-sm text-alodo-grey-600 leading-relaxed">
              {{ currentQuestion.context }}
            </p>
          </div>

          <!-- Rendu 1 : Choix Unique & Boolean (Type single_choice / boolean) -->
          <div v-if="currentQuestion.type === 'single_choice' || currentQuestion.type === 'boolean'" class="space-y-3 my-4">
            <button
              v-for="option in currentQuestion.options"
              :key="option.id"
              @click="recordAnswer({ value: option.id, score: option.score })"
              class="w-full text-left p-3.5 sm:p-4 rounded-alodo border-2 transition-all duration-150 flex items-center justify-between group active:scale-[0.99]"
              :class="[
                currentAnswer === option.id
                  ? 'border-alodo-primary bg-alodo-primary-light/40 ring-1 ring-alodo-primary/30'
                  : 'border-alodo-grey-200 hover:border-alodo-primary/50 hover:bg-alodo-grey-50'
              ]"
            >
              <span 
                class="text-xs sm:text-sm font-medium transition-colors"
                :class="currentAnswer === option.id ? 'text-alodo-black font-semibold' : 'text-alodo-grey-800'"
              >
                {{ option.label }}
              </span>

              <div 
                class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                :class="[
                  currentAnswer === option.id
                    ? 'border-alodo-primary bg-alodo-primary'
                    : 'border-alodo-grey-300 group-hover:border-alodo-primary/50'
                ]"
              >
                <div v-if="currentAnswer === option.id" class="w-2 h-2 rounded-full bg-white"></div>
              </div>
            </button>
          </div>

          <!-- Rendu 2 : Choix Multiple (Type multiple_choice) -->
          <div v-else-if="currentQuestion.type === 'multiple_choice'" class="space-y-3 my-4">
            <button
              v-for="option in currentQuestion.options"
              :key="option.id"
              @click="toggleMultipleChoiceOption(option)"
              class="w-full text-left p-3.5 sm:p-4 rounded-alodo border-2 transition-all duration-150 flex items-center justify-between group active:scale-[0.99]"
              :class="[
                isOptionSelected(option.id)
                  ? 'border-alodo-primary bg-alodo-primary-light/40 ring-1 ring-alodo-primary/30'
                  : 'border-alodo-grey-200 hover:border-alodo-primary/50 hover:bg-alodo-grey-50'
              ]"
            >
              <span 
                class="text-xs sm:text-sm font-medium transition-colors"
                :class="isOptionSelected(option.id) ? 'text-alodo-black font-semibold' : 'text-alodo-grey-800'"
              >
                {{ option.label }}
              </span>

              <!-- Case à cocher carrée -->
              <div 
                class="w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all"
                :class="[
                  isOptionSelected(option.id)
                    ? 'border-alodo-primary bg-alodo-primary text-white'
                    : 'border-alodo-grey-300 group-hover:border-alodo-primary/50'
                ]"
              >
                <span v-if="isOptionSelected(option.id)" class="text-xs font-bold">✓</span>
              </div>
            </button>
          </div>

          <!-- Rendu 3 : Échelle de Likert (Type likert_scale) -->
          <div v-else-if="currentQuestion.type === 'likert_scale'" class="space-y-4 my-4">
            <div class="grid grid-cols-5 gap-2 sm:gap-3">
              <button
                v-for="option in currentQuestion.options"
                :key="option.id"
                @click="recordAnswer({ value: option.id, score: option.score })"
                class="flex flex-col items-center justify-center p-3 rounded-alodo border-2 transition-all duration-150 active:scale-95"
                :class="[
                  currentAnswer === option.id
                    ? 'border-alodo-primary bg-alodo-primary text-white shadow-sm'
                    : 'border-alodo-grey-200 hover:border-alodo-primary/50 hover:bg-alodo-grey-50 text-alodo-black'
                ]"
              >
                <span class="text-base sm:text-lg font-bold">{{ option.value || option.label.charAt(0) }}</span>
              </button>
            </div>
            
            <!-- Affichage du libellé de l'option choisie sous l'échelle -->
            <p class="text-xs sm:text-sm text-center text-alodo-grey-600 font-medium min-h-[20px]">
              {{ selectedLikertLabel }}
            </p>
          </div>

          <!-- Rendu 4 : Valeur Numérique (Type numeric) -->
          <div v-else-if="currentQuestion.type === 'numeric'" class="my-6 space-y-4">
            <div class="relative max-w-xs mx-auto">
              <input
                type="number"
                min="0"
                step="1"
                :placeholder="currentQuestion.placeholder || 'Saisissez une valeur'"
                :value="numericInputValue"
                @input="handleNumericInput"
                class="w-full text-center text-2xl font-bold py-3 px-4 rounded-alodo border-2 border-alodo-grey-300 focus:border-alodo-primary focus:outline-none transition-all"
              />
            </div>
            <p v-if="hasCurrentAnswer" class="text-xs text-center text-alodo-primary font-semibold">
              Valeur enregistrée : {{ currentAnswer }} mois
            </p>
          </div>

          <!-- Navigation -->
          <div class="flex items-center justify-between gap-3 pt-4 border-t border-alodo-grey-100">
            <AppButton
              variant="secondary"
              :disabled="isFirstQuestion"
              @click="handlePrevious"
              class="text-xs sm:text-sm py-2.5 px-4"
            >
              Précédent
            </AppButton>

            <AppButton
              variant="primary"
              :disabled="!hasCurrentAnswer"
              @click="handleNext"
              class="text-xs sm:text-sm py-2.5 px-6"
            >
              {{ isLastQuestion ? 'Voir mon bilan ➔' : 'Suivant ➔' }}
            </AppButton>
          </div>
        </AppCard>
      </Transition>
    </div>

    <!-- Modal de confirmation -->
    <div v-if="showAbandonModal" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <AppCard class="max-w-md w-full p-6 space-y-4 text-center">
        <h3 class="text-lg font-bold text-alodo-black">Quitter le diagnostic ?</h3>
        <p class="text-xs sm:text-sm text-alodo-grey-600">
          Votre progression est sauvegardée. Vous pourrez reprendre plus tard.
        </p>
        <div class="flex gap-3 pt-2">
          <AppButton variant="secondary" class="flex-1" @click="showAbandonModal = false">
            Continuer
          </AppButton>
          <AppButton variant="secondary" class="flex-1 !bg-red-600 !text-white !border-red-600 hover:!bg-red-700" @click="confirmExit">
            Quitter
          </AppButton>
        </div>
      </AppCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDiagnostic } from '~/composables/useDiagnostic'
import AppButton from '~/components/ui/AppButton.vue'
import AppCard from '~/components/ui/AppCard.vue'
import AppBadge from '~/components/ui/AppBadge.vue'

const { 
  currentIndex, 
  totalQuestions,
  currentQuestion,
  currentDimensionLabel,
  currentAnswer,
  hasCurrentAnswer,
  isFirstQuestion,
  isLastQuestion,
  isCompleted, 
  recordAnswer,
  toggleMultipleChoiceOption,
  recordNumericInput,
  goToNextQuestion, 
  goToPreviousQuestion 
} = useDiagnostic()

const transitionName = ref('slide-left')
const showAbandonModal = ref(false)

onMounted(() => {
  if (isCompleted.value) {
    navigateTo('/result')
  }
})

const progressPercentage = computed(() => ((currentIndex.value + 1) / totalQuestions.value) * 100)

// Helper pour le Choix Multiple
const isOptionSelected = (optionId: string) => {
  if (!Array.isArray(currentAnswer.value)) return false
  return currentAnswer.value.includes(optionId)
}

// Helper pour le Libellé Likert
const selectedLikertLabel = computed(() => {
  if (!currentAnswer.value || !currentQuestion.value.options) return ''
  const found = currentQuestion.value.options.find(o => o.id === currentAnswer.value)
  return found ? found.label : ''
})

// Helper pour le champ Numérique
const numericInputValue = computed(() => {
  return typeof currentAnswer.value === 'number' ? currentAnswer.value : ''
})

const handleNumericInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  const val = target.value === '' ? null : parseInt(target.value, 10)
  recordNumericInput(val)
}

const handleNext = () => {
  if (!hasCurrentAnswer.value) return
  transitionName.value = 'slide-left'
  goToNextQuestion()
}

const handlePrevious = () => {
  if (!isFirstQuestion.value) {
    transitionName.value = 'slide-right'
    goToPreviousQuestion()
  }
}

const confirmAbandon = () => {
  showAbandonModal.value = true
}

const confirmExit = () => {
  showAbandonModal.value = false
  navigateTo('/')
}

useHead({
  title: `Diagnostic (${currentIndex.value + 1}/${totalQuestions.value})`
})
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.25s ease-in-out;
}

.slide-left-enter-from { opacity: 0; transform: translateX(30px); }
.slide-left-leave-to { opacity: 0; transform: translateX(-30px); }

.slide-right-enter-from { opacity: 0; transform: translateX(-30px); }
.slide-right-leave-to { opacity: 0; transform: translateX(30px); }
</style>