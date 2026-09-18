<template>
  <div class="alodo-card">
    <div v-if="$slots.header" class="mb-4 border-b border-alodo-grey-100 pb-3">
      <slot name="header" />
    </div>

    <div>
      <slot />
    </div>

    <div v-if="$slots.footer" class="mt-6 pt-4 border-t border-alodo-grey-100 flex items-center justify-between">
      <slot name="footer" />
    </div>
  </div>
</template>