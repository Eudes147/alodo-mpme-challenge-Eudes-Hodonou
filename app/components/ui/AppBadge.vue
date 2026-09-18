<template>
  <span :class="badgeClass">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'teal' | 'orange' | 'success' | 'warning' | 'danger'
  }>(),
  {
    variant: 'teal'
  }
)

const badgeClass = computed(() => {
  switch (props.variant) {
    case 'orange':
      return 'alodo-badge-orange'
    case 'success':
      return 'bg-emerald-100 text-emerald-800 font-semibold text-xs px-3 py-1 rounded-full border border-emerald-200'
    case 'warning':
      return 'bg-amber-100 text-amber-800 font-semibold text-xs px-3 py-1 rounded-full border border-amber-200'
    case 'danger':
      return 'bg-red-100 text-red-700 font-semibold text-xs px-3 py-1 rounded-full border border-red-200'
    case 'teal':
    default:
      return 'alodo-badge-teal'
  }
})
</script>