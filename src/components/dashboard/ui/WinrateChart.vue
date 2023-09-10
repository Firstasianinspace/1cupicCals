<script setup>
import { computed } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { calculateWinrate } from '../../../helpers'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  wins: {
    type: Number,
  },
  losses: {
    type: Number
  }
})

const winrate = computed(() => calculateWinrate(props.wins, props.losses))

const data = {
  labels: ['Побед', 'Поражении'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651'],
      data: [props.wins, props.losses]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}

</script>

<template>
  <div class="winrate-chart dashboard-card">
    <h6 class="winrate-chart__title dashboard-card__title">
      Доля побед
    </h6>
    <div class="winrate-chart__dougnut">
      <Doughnut :data="data" :options="options" />
    </div>
  </div>
</template>

<style scoped>
.winrate-chart {
  display: grid;
  padding: 20px;
  max-height: 400px;
}
</style>
