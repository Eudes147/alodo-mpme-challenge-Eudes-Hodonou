<template>
  <div class="grid grid-cols-2 gap-4">
    <button
      type="button"
      :class="[
        'option-card justify-center py-6 text-base font-semibold',
        modelValue === 'opt_no' ? 'option-card-selected text-alodo-primary' : 'text-alodo-grey-700'
      ]"
      @click="select('opt_no', 0)"
    >
      Non
    </button>

    <button
      type="button"
      :class="[
        'option-card justify-center py-6 text-base font-semibold',
        modelValue === 'opt_yes' ? 'option-card-selected text-alodo-primary' : 'text-alodo-grey-700'
      ]"
      @click="select('opt_yes', 100)"
    >
      Oui
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'select', payload: { value: string; score: number }): void
}>()

const select = (value: string, score: number) => {
  emit('update:modelValue', value)
  emit('select', { value, score })
}
</script>