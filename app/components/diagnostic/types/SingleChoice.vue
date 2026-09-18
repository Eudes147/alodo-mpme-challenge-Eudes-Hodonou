<template>
  <div class="space-y-3">
    <div
      v-for="option in options"
      :key="option.id"
      :class="[
        'option-card',
        modelValue === option.id ? 'option-card-selected' : ''
      ]"
      @click="selectOption(option.id, option.score)"
    >
      <span class="text-sm font-medium text-alodo-black">{{ option.label }}</span>
      
      <!-- Checkmark indicateur -->
      <div
        :class="[
          'w-5 h-5 rounded-full border flex items-center justify-center transition-all',
          modelValue === option.id
            ? 'border-alodo-primary bg-alodo-primary text-white'
            : 'border-alodo-grey-300'
        ]"
      >
        <svg v-if="modelValue === option.id" class="w-3 h-3 fill-current" viewBox="0 0 20 20">
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Option {
  id: string
  label: string
  score: number
}

const props = defineProps<{
  options: Option[]
  modelValue?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'select', payload: { value: string; score: number }): void
}>()

const selectOption = (optionId: string, score: number) => {
  emit('update:modelValue', optionId)
  emit('select', { value: optionId, score })
}
</script>