<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" :for="id" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <input
      type="text"
      :id="id"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      v-model="model"
      class="rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>

<script setup lang="ts">
import type { CampoFormulario } from '../../types/CampoFormulario'

const model = defineModel<string>()

defineProps<
  Pick<
    CampoFormulario,
    'label' | 'id' | 'placeholder' | 'required' | 'disabled'
  > & {
    modelValue?: string
    id?: string
    disabled?: boolean
    required?: boolean
  }
>()
</script>
