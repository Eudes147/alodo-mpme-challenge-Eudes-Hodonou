<!-- app.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-alodo-white font-sans text-alodo-black antialiased">
    <!-- Header / Navbar Globale (Optimisée Mobile & Desktop) -->
    <header class="sticky top-0 z-50 bg-alodo-pure-white/90 backdrop-blur-md border-b border-alodo-grey-100">
      <div class="max-w-4xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <!-- Logo ALODO MPME -->
        <NuxtLink to="/" class="flex items-center gap-2 sm:gap-2.5 group">
          <img 
            src="/alodo_logo.png" 
            alt="Logo ALODO MPME" 
            class="h-7 w-auto sm:h-9 object-contain transition-transform group-hover:scale-105"
          />
          <span class="font-bold text-base sm:text-lg tracking-tight text-alodo-black">
            <span class="text-alodo-primary font-normal">ALODO</span>MPME
          </span>
        </NuxtLink>

        <!-- Badge Programme / Status (Format compact sur mobile) -->
        <div class="flex items-center">
          <span class="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-alodo-teal-light text-alodo-teal border border-alodo-teal/20">
            <span class="w-1.5 h-1.5 rounded-full bg-alodo-teal animate-pulse"></span>
            Diagnostic v1.0
          </span>
        </div>
      </div>
    </header>

    <!-- Main Content Area (Mobile-First Spacing) -->
    <main class="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-10">
      <NuxtPage />
    </main>

    <!-- Footer Responsive -->
    <footer class="bg-alodo-pure-white border-t border-alodo-grey-100 py-4 sm:py-6 text-center text-[11px] sm:text-xs text-alodo-grey-400">
      <div class="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
        <p>© 2026 ALODO TECH — Tous droits réservés.</p>
        <p class="text-alodo-grey-300">Programme d'Accompagnement des MPME au Bénin</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ALODO MPME` : 'ALODO MPME - Diagnostic de Maturité';
  },
  meta: [
    { name: 'description', content: 'Outil de diagnostic rapide de la maturité des MPME locales au Bénin.' },
    { name: 'theme-color', content: '#ec663b' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>