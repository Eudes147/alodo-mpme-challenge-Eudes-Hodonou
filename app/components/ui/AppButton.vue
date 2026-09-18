<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      variant === 'primary' ? 'btn-primary' : 'btn-secondary',
      'relative font-medium transition-all duration-150 flex items-center justify-center gap-2'
    ]"
    @click="$emit('click')"
  >
    <!-- Indicateur de chargement (Spinner) -->
    <svg
      v-if="loading"
      class="animate-spin h-5 w-5 text-current"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>

    <slot v-else />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    disabled: false,
    loading: false
  }
)

defineEmits(['click'])
</script>