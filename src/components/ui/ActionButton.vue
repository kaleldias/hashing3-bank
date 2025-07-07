<template>
  <button type="button" class="btn" @click="onClick">
    <iconify-icon :icon="icon" width="16"></iconify-icon>
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  onClick?: () => void
}>()
</script>
