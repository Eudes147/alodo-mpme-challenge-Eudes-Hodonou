<template>
  <UiAppCard class="max-w-xl mx-auto">
    <template #header>
      <h2 class="text-lg sm:text-xl font-bold text-alodo-black leading-snug">
        {{ question.label }}
      </h2>
    </template>

    <!-- Rendu dynamique selon le type de question -->
    <div class="py-2">
      <Component
        :is="typeComponent"
        :options="question.options"
        :ranges="question.scoringRule?.ranges"
        :max-score="question.maxScore"
        :model-value="currentAnswer"
        @select="onAnswerSelected"
      />
    </div>

    <template #footer>
      <UiAppButton
        variant="secondary"
        :disabled="isFirst"
        @click="$emit('previous')"
      >
        Précédent
      </UiAppButton>

      <UiAppButton
        variant="primary"
        :disabled="!hasAnswer"
        @click="$emit('next')"
      >
        {{ isLast ? 'Terminer' : 'Suivant' }}
      </UiAppButton>
    </template>
  </UiAppCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SingleChoice from './types/SingleChoice.vue'
import MultipleChoice from './types/MultipleChoice.vue'
import BooleanChoice from './types/BooleanChoice.vue'
import LikertScale from './types/LikertScale.vue'
import NumericInput from './types/NumericInput.vue'

const props = defineProps<{
  question: any
  currentAnswer?: any
  isFirst: boolean
  isLast: boolean
  hasAnswer: boolean
}>()

const emit = defineEmits(['previous', 'next', 'answer'])

// Mapping entre le type de question du JSON et le composant Vue
const typeComponent = computed(() => {
  switch (props.question.type) {
    case 'single_choice':
      return SingleChoice
    case 'multiple_choice':
      return MultipleChoice
    case 'boolean':
      return BooleanChoice
    case 'likert':
      return LikertScale
    case 'numeric':
      return NumericInput
    default:
      return SingleChoice
  }
})

const onAnswerSelected = (payload: { value: any; score: number }) => {
  emit('answer', payload)
}
</script>