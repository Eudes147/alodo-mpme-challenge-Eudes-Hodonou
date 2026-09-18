<template>
  <div class="space-y-4">
    <div class="relative">
      <input
        type="number"
        min="0"
        :value="modelValue"
        placeholder="Ex: 12"
        class="w-full border border-alodo-grey-300 rounded-alodo-md p-4 text-lg font-semibold text-alodo-black focus:border-alodo-primary focus:ring-2 focus:ring-alodo-primary/20 outline-none transition"
        @input="onInput"
      />
      <span class="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-alodo-grey-500 font-medium">
        mois
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface RangeRule {
  min: number
  max: number
  score: number
}

const props = defineProps<{
  modelValue?: number
  ranges?: RangeRule[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'select', payload: { value: number; score: number }): void
}>()

const onInput = (event: Event) => {
  const val = Number((event.target as HTMLInputElement).value) || 0
  
  // Calcul du score basé sur les tranches définies
  let calculatedScore = 0
  if (props.ranges) {
    const matchedRange = props.ranges.find(r => val >= r.min && val <= r.max)
    if (matchedRange) calculatedScore = matchedRange.score
  }

  emit('update:modelValue', val)
  emit('select', { value: val, score: calculatedScore })
}
</script>