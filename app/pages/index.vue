<!-- pages/index.vue -->
<template>
  <div class="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
    <!-- Hero / Présentation principale -->
    <AppCard class="text-center sm:text-left p-6 sm:p-8 space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-alodo-grey-100 pb-4">
        <div>
          <AppBadge variant="orange" class="mb-2">Étape 1 sur 3</AppBadge>
          <h1 class="text-2xl sm:text-3xl font-bold text-alodo-black tracking-tight">
            Diagnostic de Maturité MPME
          </h1>
        </div>
        <div class="flex items-center justify-center sm:justify-start gap-2 text-alodo-grey-600 text-xs sm:text-sm bg-alodo-grey-50 px-3 py-1.5 rounded-alodo-sm self-start">
          <span>⏱️</span>
          <span class="font-medium">Durée estimée : 3 à 5 min</span>
        </div>
      </div>

      <p class="text-alodo-grey-700 text-sm sm:text-base leading-relaxed">
        Bienvenue sur l'outil d'évaluation ALODO MPME. Ce diagnostic court et pragmatique analyse le niveau de structuration de votre entreprise afin d'identifier vos levier de croissance et d'évaluer votre préparation à l'accompagnement et au financement.
      </p>

      <!-- Principes clés du diagnostic -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div class="p-3 rounded-alodo-sm bg-alodo-grey-50 border border-alodo-grey-100 text-left">
          <div class="font-semibold text-xs text-alodo-black mb-1">🎯 10 Questions Ciblées</div>
          <p class="text-[11px] sm:text-xs text-alodo-grey-600">Adaptées aux réalités des petites entreprises locales.</p>
        </div>
        <div class="p-3 rounded-alodo-sm bg-alodo-grey-50 border border-alodo-grey-100 text-left">
          <div class="font-semibold text-xs text-alodo-black mb-1">⚡ Score Instantané</div>
          <p class="text-[11px] sm:text-xs text-alodo-grey-600">Obtenez immédiatement une note globale et par axe[cite: 2].</p>
        </div>
        <div class="p-3 rounded-alodo-sm bg-alodo-grey-50 border border-alodo-grey-100 text-left">
          <div class="font-semibold text-xs text-alodo-black mb-1">💡 Recommandations</div>
          <p class="text-[11px] sm:text-xs text-alodo-grey-600">Conseils d'action personnalisés pour votre PME[cite: 2].</p>
        </div>
      </div>
    </AppCard>

    <!-- Aperçu des 4 dimensions évaluées -->
    <div class="space-y-3">
      <h2 class="text-base sm:text-lg font-semibold text-alodo-black px-1">
        Périmètre d'évaluation (4 dimensions)
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <!-- 1. Finance -->
        <AppCard class="p-4 border-l-4 border-l-amber-500">
          <div class="flex items-start gap-3">
            <span class="text-xl">💰</span>
            <div>
              <h3 class="font-semibold text-sm text-alodo-black">Finance & Trésorerie</h3>
              <p class="text-xs text-alodo-grey-600 mt-0.5">Séparation des comptes, suivi des recettes/dépenses et calcul des marges[cite: 1, 2].</p>
            </div>
          </div>
        </AppCard>

        <!-- 2. Digitalisation -->
        <AppCard class="p-4 border-l-4 border-l-blue-500">
          <div class="flex items-start gap-3">
            <span class="text-xl">📱</span>
            <div>
              <h3 class="font-semibold text-sm text-alodo-black">Digitalisation & Cashless</h3>
              <p class="text-xs text-alodo-grey-600 mt-0.5">Usage de WhatsApp Business et des paiements Mobile Money[cite: 1, 2].</p>
            </div>
          </div>
        </AppCard>

        <!-- 3. Opérations -->
        <AppCard class="p-4 border-l-4 border-l-emerald-500">
          <div class="flex items-start gap-3">
            <span class="text-xl">⚙️</span>
            <div>
              <h3 class="font-semibold text-sm text-alodo-black">Opérations & Organisation</h3>
              <p class="text-xs text-alodo-grey-600 mt-0.5">Indépendance vis-à-vis du dirigeant et gestion des approvisionnements[cite: 1, 2].</p>
            </div>
          </div>
        </AppCard>

        <!-- 4. Préparation au financement -->
        <AppCard class="p-4 border-l-4 border-l-indigo-500">
          <div class="flex items-start gap-3">
            <span class="text-xl">🏦</span>
            <div>
              <h3 class="font-semibold text-sm text-alodo-black">Préparation au Financement</h3>
              <p class="text-xs text-alodo-grey-600 mt-0.5">Formalisation (RCCM/IFU), traçabilité et bancabilité de l'entreprise[cite: 1, 2].</p>
            </div>
          </div>
        </AppCard>
      </div>
    </div>

    <!-- Zone de lancement d'action -->
    <AppCard class="p-6 bg-gradient-to-r from-alodo-pure-white to-alodo-grey-50 text-center space-y-4">
      <div class="max-w-md mx-auto space-y-2">
        <h3 class="font-bold text-lg text-alodo-black">Prêt à évaluer votre entreprise ?</h3>
        <p class="text-xs sm:text-sm text-alodo-grey-600"> Vos réponses sont sauvegardées automatiquement dans votre navigateur en cas d'interruption[cite: 2].</p>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <AppButton 
          variant="primary" 
          class="w-full sm:w-auto px-8 py-3 text-base shadow-alodo-md hover:shadow-alodo-lg"
          @click="startDiagnostic"
        >
          Commencer le diagnostic ➔
        </AppButton>
      </div>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
import AppButton from '~/components/ui/AppButton.vue'
import AppCard from '~/components/ui/AppCard.vue'
import AppBadge from '~/components/ui/AppBadge.vue'
import { useDiagnostic } from '~/composables/useDiagnostic.ts'

const { resetSession } = useDiagnostic()

const startDiagnostic = () => {
  resetSession()
  navigateTo('/diagnostic')
}

useHead({
  title: 'Accueil - Introduction au Diagnostic'
})
</script>