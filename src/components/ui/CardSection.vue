<template>
  <section class="cards">
    <h3 class="titulo-cards">
      {{ title }}
    </h3>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
