<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-alodo-black/50 backdrop-blur-sm">
        <div class="bg-alodo-pure-white rounded-alodo-lg border border-alodo-grey-100 shadow-alodo-lg w-full max-w-md p-6 space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-alodo-black">{{ title }}</h3>
            <button @click="$emit('close')" class="text-alodo-grey-500 hover:text-alodo-black">
              ✕
            </button>
          </div>

          <div class="text-sm text-alodo-grey-700">
            <slot />
          </div>

          <div class="flex items-center justify-end gap-3 pt-2">
            <slot name="actions" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
  title?: string
}>()

defineEmits(['close'])
</script>