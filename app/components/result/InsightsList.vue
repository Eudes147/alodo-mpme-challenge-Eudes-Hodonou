<template>
  <div class="space-y-4">
    <!-- Points Forts -->
    <UiAppCard>
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
          ✓
        </div>
        <div>
          <h4 class="font-bold text-alodo-black text-sm sm:text-base">Points Forts Identifiés</h4>
          <ul class="mt-2 space-y-1 text-xs sm:text-sm text-alodo-grey-700 list-disc list-inside">
            <li v-for="(strength, idx) in strengths" :key="idx">
              {{ strength }}
            </li>
          </ul>
        </div>
      </div>
    </UiAppCard>

    <!-- Faiblesses & Points de Vigilance -->
    <UiAppCard>
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
          !
        </div>
        <div>
          <h4 class="font-bold text-alodo-black text-sm sm:text-base">Points de Vigilance</h4>
          <ul class="mt-2 space-y-1 text-xs sm:text-sm text-alodo-grey-700 list-disc list-inside">
            <li v-for="(weakness, idx) in weaknesses" :key="idx">
              {{ weakness }}
            </li>
          </ul>
        </div>
      </div>
    </UiAppCard>

    <!-- Recommandation ALODO MPME -->
    <UiAppCard class="border-2 border-alodo-primary/30 bg-alodo-primary-light/30">
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 rounded-full bg-alodo-primary text-white flex items-center justify-center shrink-0 font-bold mt-0.5">
          ★
        </div>
        <div>
          <h4 class="font-bold text-alodo-black text-sm sm:text-base">Recommandation ALODO</h4>
          <p class="mt-2 text-xs sm:text-sm text-alodo-black leading-relaxed">
            {{ recommendation }}
          </p>
        </div>
      </div>
    </UiAppCard>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  strengths: string[]
  weaknesses: string[]
  recommendation: string
}>()
</script>