<script setup>
import { computed, onMounted } from 'vue'
import transactions from '../assets/transactions.json'
import bets from '../assets/bets.json'
import TotalCard from '../components/dashboard/TotalCard.vue'
import YearCard from '../components/dashboard/YearCard.vue'
import WinrateChart from '../components/dashboard/ui/WinrateChart.vue'
import TransactionsList from '../components/dashboard/TransactionsList.vue'
import { betCount, sumTransactions, getTransactionsByType, groupTransactionsByMonth } from '../helpers'

const totalDeposit = computed(() => sumTransactions(transactions, 'Пополнение счёта'))
const totalWithdraw = computed(() => sumTransactions(transactions, 'Вывод средств'))

const countedWonBets = computed(() => betCount(bets, 'success'))
const countedLostBets = computed(() => betCount(bets, 'fail'))
const profitCard = computed(() => {
  return {
    amount: totalWithdraw.value.amount - totalDeposit.value.amount,
    type: 'Прибыль',
    startDate: totalDeposit.value.startDate,
    endDate: totalDeposit.value.endDate,
  }
})

const cards = computed(() => [totalDeposit.value, totalWithdraw.value, profitCard.value])
const lastTransactions = computed(() => transactions.slice(0, 5))
const transactionByYears = computed(() => groupTransactionsByMonth(transactions, 'date'))

</script>

<template>
  <q-page padding class="dashboard-grid">
    <div class="dashboard-grid__cards">
      <TotalCard v-for="card in cards" :key="card.type" :card="card" />
    </div>
    <WinrateChart :wins="countedWonBets" :losses="countedLostBets" class="dashboard-grid__winrate" />
    <TransactionsList :transactions="lastTransactions" class="dashboard-grid__transactions"/>
      <YearCard v-for="year in transactionByYears" :item="year" />
  </q-page>
</template>

<style lang="scss" scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px;
  &__cards {
    grid-column: 1 / 4;
    grid-row: 1 / 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
  }
  &__winrate {
    grid-column: 1 / 1;
    grid-row: 2 / 2;
  }
  &__transactions {
    grid-column: 2 / 4;
  }
}
</style>
