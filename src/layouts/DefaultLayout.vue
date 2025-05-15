<template>
  <div class="bg-branco flex min-h-screen flex-col">
    <!-- HEADER -->
    <header class="bg-azul text-branco flex justify-center p-4">
      <div
        class="container flex max-w-[85rem] flex-col items-center justify-between gap-1 md:flex-row md:px-8 lg:px-0"
      >
        <div class="logotipo flex gap-2">
          <img
            v-show="!isMobile"
            src="../assets/img/logo.svg"
            alt="Logo Hashing3 Bank"
            class="w-8 self-start"
          />

          <div class="flex flex-col md:gap-1">
            <img
              v-show="isMobile"
              src="../assets/img/logo.svg"
              alt="Logo Hashing3 Bank"
              class="xs:self-center w-10"
            />
            <h1
              class="xs:text-center xs:mt-1 text-2xl font-bold leading-none md:mt-0 md:text-start md:text-2xl lg:text-[1.75rem]"
            >
              {{ COMPANY_NAME }}
            </h1>
            <span
              class="sub-head xs:text-center xs:text-xs xs:my-3 sm:text-base md:my-0"
            >
              {{ SYSTEM_NAME }}
            </span>
          </div>
        </div>
        <div role="contentinfo" class="header-date">
          <span class="date text-cinza1 xs:text-[0.75rem] sm:text-sm">
            {{ dataAtual }}
          </span>
        </div>
      </div>
    </header>

    <!-- CONTEÚDO PRINCIPAL -->
    <main class="flex flex-1 flex-col items-center">
      <slot />
      <!-- Conteúdo dinâmico entra aqui -->
    </main>

    <!-- FOOTER -->
    <footer
      class="bg-cinza2 flex h-12 items-center justify-center text-sm text-gray-600"
    >
      <span>© 2025 Hashing3 Bank - Sistema de Autoatendimento</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const COMPANY_NAME: string = 'Hashing3 Bank'
const SYSTEM_NAME: string = 'Terminal de Autoatendimento'

// Computed property para verificar se é Mobile
const screenSize = ref(window.innerWidth)
const isMobile = computed(() => screenSize.value < 768)

// Atribui valor atual da tela ao screenSize
const handleResize = (): number => (screenSize.value = window.innerWidth)

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// Pegar data atual
let dataAtual: string = new Date().toLocaleDateString('pt-BR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
dataAtual = dataAtual.charAt(0).toUpperCase() + dataAtual.slice(1)
</script>
