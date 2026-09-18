<!-- pages/result.vue -->
<template>
  <div class="max-w-2xl mx-auto space-y-6 sm:space-y-8">
    <!-- Redirection si aucun diagnostic n'est complété -->
    <div v-if="!isCompleted && questions.length > 0" class="text-center py-12 space-y-4">
      <AppCard class="p-8">
        <h2 class="text-xl font-bold text-alodo-black mb-2">Aucun diagnostic terminé</h2>
        <p class="text-sm text-alodo-grey-600 mb-6">
          Veuillez compléter le questionnaire pour accéder à votre bilan de maturité.
        </p>
        <AppButton variant="primary" @click="navigateTo('/diagnostic')">
          Commencer le diagnostic ➔
        </AppButton>
      </AppCard>
    </div>

    <template v-else>
      <!-- 1. Carte du Score Global -->
      <ResultScoreCard :score="globalScore" />

      <!-- 2. Répartition par Dimension -->
      <ResultDimensionBreakdown 
        :dimensions="dimensions" 
        :scores="dimensionScores" 
      />

      <!-- 3. Points Forts, Faiblesses & Recommandations -->
      <ResultInsightsList 
        :strengths="insights.strengths"
        :weaknesses="insights.weaknesses"
        :recommendation="insights.recommendation"
      />

      <!-- 4. Actions -->
      <AppCard class="p-6 text-center space-y-4">
        <h3 class="font-bold text-base text-alodo-black">Que souhaitez-vous faire ensuite ?</h3>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <AppButton 
            variant="secondary" 
            class="w-full sm:w-auto text-xs sm:text-sm py-3 px-6"
            @click="handleRestart"
          >
            🔄 Recommencer un diagnostic
          </AppButton>

          <AppButton 
            variant="primary" 
            class="w-full sm:w-auto text-xs sm:text-sm py-3 px-6"
            @click="handlePrint"
          >
            📥 Télécharger mon bilan (PDF)
          </AppButton>
        </div>
      </AppCard>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useDiagnostic } from '~/composables/useDiagnostic'
import AppButton from '~/components/ui/AppButton.vue'
import AppCard from '~/components/ui/AppCard.vue'
import ResultScoreCard from '~/components/result/ScoreCard.vue'
import ResultDimensionBreakdown from '~/components/result/DimensionBreakdown.vue'
import ResultInsightsList from '~/components/result/InsightsList.vue'

const { 
  isCompleted, 
  questions, 
  dimensions,
  globalScore, 
  dimensionScores,
  insights, 
  resetSession 
} = useDiagnostic()

const handleRestart = () => {
  resetSession()
  navigateTo('/diagnostic')
}

const handlePrint = () => {
  if (import.meta.client) {
    window.print()
  }
}

useHead({
  title: 'Bilan de Maturité - ALODO MPME'
})
</script>