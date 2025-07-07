<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
    <slot name="header" />

    <!-- Renderizar campos dinamicamente -->
    <div v-for="campo in campos" :key="campo.chave">
      <InputText
        v-if="campo.tipo === 'text'"
        v-model="form[campo.chave]"
        :label="campo.label"
        :placeholder="campo.placeholder"
        :required="campo.required"
        :disabled="campo.disabled"
        :id="campo.id"
      />
      <InputNumber
        v-else-if="campo.tipo === 'number'"
        v-model="form[campo.chave]"
        :label="campo.label"
        :placeholder="campo.placeholder"
        :required="campo.required"
        :id="campo.id"
      />
      <ToggleButton
        v-else-if="campo.tipo === 'checkbox'"
        v-model="form[campo.chave]"
        :label="campo.label"
        :id="campo.id"
      />
      <InputSelect
        v-else-if="campo.tipo === 'select'"
        v-model="form[campo.chave]"
        :label="campo.label"
        :id="campo.id"
        :options="campo.options || []"
        :placeholder="campo.placeholder"
        :emptyMessage="campo.emptyMessage"
        :disabled="campo.disabled"
      />
    </div>

    <div class="form-actions">
      <ActionButton type="submit" icon="solar:cash-out-line-duotone">
        Depositar
      </ActionButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import InputText from '../ui/InputText.vue'
import InputNumber from '../ui/InputNumber.vue'
import ActionButton from '../ui/ActionButton.vue'
import { reactive } from 'vue'
import type { CampoFormulario } from '../../types/CampoFormulario'
import ToggleButton from '../ui/ToggleButton.vue'
import InputSelect from '../ui/InputSelect.vue'

const props = defineProps<{
  campos: CampoFormulario[]
  onSubmit?: (valores: Record<string, any>) => void
}>()

const form = reactive<Record<string, any>>({})

props.campos.forEach((campo) => {
  //Verifica se o campo já NÃO existe no objeto reativo form.
  //Isso evita sobrescrever valores já preenchidos (ex: se o valor inicial veio do pai ou já foi alterado pelo usuário).
  if (!(campo.chave in form)) {
    if('initialValue' in campo){
      form[campo.chave] = campo.initialValue
    }
    else{
      form[campo.chave] = campo.tipo === 'checkbox' ? false : '';
    }
    
  }
})

function handleSubmit() {
  props.onSubmit?.({ ...form })
}
</script>
