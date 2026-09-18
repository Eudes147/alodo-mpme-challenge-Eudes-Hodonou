<template>
  <UiAppCard>
    <template #header>
      <h3 class="text-base sm:text-lg font-bold text-alodo-black">
        Détail par Dimension
      </h3>
    </template>

    <div class="space-y-4 py-2">
      <div
        v-for="dim in dimensions"
        :key="dim.id"
        class="space-y-1.5"
      >
        <div class="flex justify-between items-center text-sm">
          <span class="font-semibold text-alodo-black">{{ dim.label }}</span>
          <span class="font-bold text-alodo-grey-700">
            {{ scores[dim.id] || 0 }} / 100
          </span>
        </div>

        <!-- Bar de progression par dimension -->
        <div class="w-full bg-alodo-grey-100 h-2.5 rounded-full overflow-hidden">
          <div
            :class="getBarColor(scores[dim.id] || 0)"
            class="h-full transition-all duration-700 ease-out"
            :style="{ width: `${scores[dim.id] || 0}%` }"
          ></div>
        </div>
      </div>
    </div>
  </UiAppCard>
</template>

<script setup lang="ts">
interface Dimension {
  id: string
  label: string
}

defineProps<{
  dimensions: Dimension[]
  scores: Record<string, number>
}>()

const getBarColor = (score: number) => {
  if (score >= 70) return 'bg-alodo-teal'
  if (score >= 40) return 'bg-alodo-primary'
  return 'bg-red-400'
}
</script>