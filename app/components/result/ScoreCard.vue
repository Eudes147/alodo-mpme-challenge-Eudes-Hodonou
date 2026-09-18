<template>
  <UiAppCard class="text-center py-6 sm:py-8">
    <UiAppBadge :variant="badgeVariant" class="mb-3">
      Résultat du diagnostic ALODO MPME
    </UiAppBadge>

    <h1 class="text-2xl sm:text-3xl font-bold text-alodo-black mb-1">
      ALODO MPME Score
    </h1>
    <p class="text-xs sm:text-sm text-alodo-grey-500 mb-6">
      Maturité globale de votre entreprise
    </p>

    <!-- Cercle / Indicateur de Score principal -->
    <div class="relative w-36 h-36 mx-auto flex items-center justify-center mb-4">
      <!-- Anneau de fond -->
      <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        <path
          class="text-alodo-grey-100"
          stroke-width="3.5"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <!-- Anneau de progression -->
        <path
          :class="scoreColorClass"
          stroke-width="3.5"
          :stroke-dasharray="`${score}, 100`"
          stroke-linecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          class="transition-all duration-1000 ease-out"
        />
      </svg>
      <!-- Valeur Numérique -->
      <div class="absolute flex flex-col items-center">
        <span class="text-3xl font-extrabold text-alodo-black">
          {{ score }}
        </span>
        <span class="text-xs font-semibold text-alodo-grey-500">/ 100</span>
      </div>
    </div>

    <!-- Statut synthétique -->
    <p class="text-base font-semibold text-alodo-black">
      {{ statusMessage }}
    </p>
  </UiAppCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  score: number
}>()

const badgeVariant = computed(() => {
  if (props.score >= 70) return 'teal'
  if (props.score >= 40) return 'orange'
  return 'danger'
})

const scoreColorClass = computed(() => {
  if (props.score >= 70) return 'text-alodo-teal'
  if (props.score >= 40) return 'text-alodo-primary'
  return 'text-red-500'
})

const statusMessage = computed(() => {
  if (props.score >= 75) return 'Excellente maturité — Structure prête au financement'
  if (props.score >= 50) return 'Bonne dynamique — Quelques leviers à structurer'
  return 'Stade initial — Besoin prioritaire de structuration'
})
</script>