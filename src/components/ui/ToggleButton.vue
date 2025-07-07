<template>
  <div class="flex w-[fit-content] flex-row-reverse gap-4">
    <label
      v-if="label"
      :for="id"
      class="mb-1 cursor-pointer text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>
    <label class="switch relative flex w-max cursor-pointer items-center">
      <input
        :id="id"
        type="checkbox"
        class="sr-only"
        :checked="model"
        @change="model = !model"
      />
      <span
        class="slider"
        :class="{
          'bg-blue-600': model,
          'bg-gray-300': !model
        }"
      >
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import type { CampoFormulario } from '../../types/CampoFormulario'

const model = defineModel<boolean>()

defineProps<
  Pick<CampoFormulario, 'label' | 'id'> & {
    modelValue?: boolean
    id?: string
  }
>()
</script>

<style scoped>
.switch {
  /* Mantém flex e alinhamento */
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  user-select: none;
}

.slider {
  width: 40px;
  height: 20px;
  background: #ccc;
  border-radius: 20px;
  position: relative;
  transition: background 0.3s;
  display: inline-block;
}

.slider::before {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  left: 1px;
  top: 1px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s;
}

input:checked + .slider {
  background: #009ef7;
}

input:checked + .slider::before {
  transform: translateX(20px);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
