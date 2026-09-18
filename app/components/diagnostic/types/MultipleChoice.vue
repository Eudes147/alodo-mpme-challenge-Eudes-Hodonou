<template>
  <div class="space-y-3">
    <div
      v-for="option in options"
      :key="option.id"
      :class="[
        'option-card',
        selectedIds.includes(option.id) ? 'option-card-selected' : ''
      ]"
      @click="toggleOption(option)"
    >
      <span class="text-sm font-medium text-alodo-black">{{ option.label }}</span>
      
      <!-- Checkbox SVG -->
      <div
        :class="[
          'w-5 h-5 rounded border flex items-center justify-center transition-all',
          selectedIds.includes(option.id)
            ? 'border-alodo-primary bg-alodo-primary text-white'
            : 'border-alodo-grey-300'
        ]"
      >
        <svg v-if="selectedIds.includes(option.id)" class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Option {
  id: string
  label: string
  score: number
  isExclusive?: boolean
}

const props = defineProps<{
  options: Option[]
  modelValue?: string[]
  maxScore?: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
  (e: 'select', payload: { value: string[]; score: number }): void
}>()

const selectedIds = ref<string[]>(props.modelValue || [])

const toggleOption = (option: Option) => {
  if (option.isExclusive) {
    selectedIds.value = [option.id]
  } else {
    // Retirer les options exclusives si on coche une option normale
    selectedIds.value = selectedIds.value.filter(
      id => !props.options.find(o => o.id === id)?.isExclusive
    )

    if (selectedIds.value.includes(option.id)) {
      selectedIds.value = selectedIds.value.filter(id => id !== option.id)
    } else {
      selectedIds.value.push(option.id)
    }
  }

  // Calcul du score accumulé
  let totalScore = 0
  selectedIds.value.forEach(id => {
    const opt = props.options.find(o => o.id === id)
    if (opt) totalScore += opt.score
  })

  const finalScore = props.maxScore ? Math.min(totalScore, props.maxScore) : totalScore

  emit('update:modelValue', selectedIds.value)
  emit('select', { value: selectedIds.value, score: finalScore })
}
</script>