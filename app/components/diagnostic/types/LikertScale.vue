<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center gap-2">
      <button
        v-for="step in 5"
        :key="step"
        type="button"
        :class="[
          'w-12 h-12 rounded-alodo-md font-bold text-lg transition-all border flex items-center justify-center',
          modelValue === step
            ? 'bg-alodo-primary text-white border-alodo-primary shadow-alodo-sm'
            : 'bg-white text-alodo-black border-alodo-grey-300 hover:border-alodo-primary'
        ]"
        @click="selectScale(step)"
      >
        {{ step }}
      </button>
    </div>
    <div class="flex justify-between text-xs text-alodo-grey-500 font-medium px-1">
      <span>1 - Insatisfaisant / Aucun</span>
      <span>5 - Maîtrisé / Structuré</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'select', payload: { value: number; score: number }): void
}>()

const scaleScores: Record<number, number> = {
  1: 0,
  2: 25,
  3: 50,
  4: 80,
  5: 100
}

const selectScale = (val: number) => {
  const score = scaleScores[val] || 0
  emit('update:modelValue', val)
  emit('select', { value: val, score })
}
</script>