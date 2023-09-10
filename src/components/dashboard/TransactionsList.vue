<script setup>
import TransactionsListItem from './TransactionsListItem.vue'
defineProps({
  transactions: {
    type: Array,
  }
})
</script>

<template>
  <div class="transaction-card dashboard-card">
    <h6 class="total-card__title dashboard-card__title">Последние операции</h6>
    <TransactionsListItem v-for="transaction in transactions" :transaction="transaction" />
  </div>
</template>

<style lang="scss" scoped>
.transaction-card {
  padding: 15px;
}
</style>
