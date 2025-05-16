<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import CardSection from '../components/ui/CardSection.vue'
import ActionButton from '../components/ui/ActionButton.vue'
import Form from '../components/forms/Form.vue'
</script>

<template>
  <DefaultLayout>
    <!-- Conteúdo da página vai aqui -->
    <section class="xs:px-4 container w-full max-w-[85rem] py-10">
      <h2
        class="xs:text-[1.5rem] md:text-md mb-8 text-center font-bold text-gray-800 lg:text-2xl"
      >
        Bem-vindo ao Terminal de Autoatendimento Hashing3 Bank
      </h2>

      <div class="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2">
        <!-- Card 1: Gerenciamento de Contas -->
        <CardSection title="Gerenciamento de Contas">
          <ActionButton icon="solar:card-bold"
            >Gerenciar Minhas Contas</ActionButton
          >
          <ActionButton icon="solar:add-circle-bold"
            >Criar Nova Conta</ActionButton
          >
        </CardSection>
        <!-- Card 2: Operações Bancárias -->
        <CardSection title="Operações Bancárias">
          <ActionButton icon="solar:wallet-money-bold">Depósito</ActionButton>
          <ActionButton icon="solar:round-transfer-horizontal-bold"
            >Saque</ActionButton
          >
          <ActionButton icon="solar:card-transfer-bold"
            >Transferência</ActionButton
          >
          <ActionButton icon="solar:document-bold">Gerar Extrato</ActionButton>
        </CardSection>
      </div>

      <Form
        :campos="[
          {
            tipo: 'number',
            label: 'Valor (R$)  ',
            chave: 'Valor do Depósito',
            required: true,
            id: 'valor'
          },
          {
            tipo: 'text',
            label: 'Descrição (opcional)',
            chave: 'Descrição do Depósito',
            required: true,
            id: 'nome',
            disabled: false
          },
          {
            tipo: 'checkbox',
            label: 'Conta Especial',
            id: 'especial',
            chave: 'Define conta Especial ou não'
          },
          {
            tipo: 'select',
            id: 'selecionar-conta',
            chave: 'Seleciona uma conta para transferencia',
            label: 'Conta Destino',
            placeholder: 'Selecione a conta destino',
            options: [
              {
                value: 'semconta',
                label: 'Nenhuma conta disponivel',
                disabled: true,
                selected: true
              }
            ]
          }
        ]"
      >
      </Form>
    </section>
  </DefaultLayout>
</template>
