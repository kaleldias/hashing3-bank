<template>
  <div class="flex w-full flex-col gap-1">
    <label v-if="label" :for="id">{{ label }}</label>
    <select
      :id="id"
      v-model="model"
      :disabled="disabled || !options?.length"
      class="rounded-lg border border-gray-300 px-4 py-2 text-base transition focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="" disabled selected hidden>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
        :selected="option.selected"
      >
        {{ option.label }}
      </option>
    </select>
    <div
      v-if="!options?.length"
      class="mt-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-400"
    >
      {{ emptyMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CampoFormulario } from '../../types/CampoFormulario'

const model = defineModel<string | number | undefined>()

defineProps<
  Pick<
    CampoFormulario,
    'label' | 'id' | 'options' | 'emptyMessage' | 'disabled' | 'placeholder'
  >
>()
</script>
