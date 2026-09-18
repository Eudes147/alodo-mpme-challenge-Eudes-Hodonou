<template>
  <div class="space-y-2 mb-6">
    <div class="flex items-center justify-between text-xs sm:text-sm">
      <!-- Badge de la dimension actuelle -->
      <UiAppBadge variant="orange">
        {{ currentDimensionLabel }}
      </UiAppBadge>
      
      <!-- Compteur de progression -->
      <span class="font-medium text-alodo-grey-500">
        Question <strong class="text-alodo-black">{{ currentIndex + 1 }}</strong> sur {{ totalQuestions }}
      </span>
    </div>

    <!-- Barre de progression visuelle -->
    <div class="w-full bg-alodo-grey-100 h-2 rounded-full overflow-hidden">
      <div
        class="bg-alodo-primary h-full transition-all duration-300 ease-out"
        :style="{ width: `${progressPercentage}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentIndex: number
  totalQuestions: number
  currentDimensionLabel: string
}>()

const progressPercentage = computed(() => {
  if (props.totalQuestions === 0) return 0
  return Math.round(((props.currentIndex + 1) / props.totalQuestions) * 100)
})
</script>