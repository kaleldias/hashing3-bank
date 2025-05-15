<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import CardSection from '../components/ui/CardSection.vue';
import ActionButton from '../components/ui/ActionButton.vue';

</script>

<template>
  <DefaultLayout>
    <!-- Conteúdo da página vai aqui -->
    <section class="container xs:px-4 w-full max-w-[85rem] py-10" >
      <h2 class="xs:text-[1.5rem] md:text-md mb-8 text-center font-bold text-gray-800 lg:text-2xl">
        Bem-vindo ao Terminal de Autoatendimento Hashing3 Bank
      </h2>
      <div class="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2">
        <!-- Card 1: Gerenciamento de Contas -->
        <CardSection title="Gerenciamento de Contas">
          <ActionButton icon="solar:card-bold">Gerenciar Minhas Contas</ActionButton>
          <ActionButton icon="solar:add-circle-bold">Criar Nova Conta</ActionButton>
        </CardSection>
        <!-- Card 2: Operações Bancárias -->
        <CardSection title="Operações Bancárias">
          <ActionButton icon="solar:wallet-money-bold">Depósito</ActionButton>
          <ActionButton icon="solar:round-transfer-horizontal-bold">Saque</ActionButton>
          <ActionButton icon="solar:round-transfer-horizontal-bold">Transferência</ActionButton>
          <ActionButton icon="solar:document-bold">Gerar Extrato</ActionButton>
        </CardSection>

      </div>
    </section>
  </DefaultLayout>
</template>
