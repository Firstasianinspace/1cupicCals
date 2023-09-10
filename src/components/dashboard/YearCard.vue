<script setup>
import { ref, computed } from 'vue'
import { formatPrice, sumTransactions } from '../../helpers'
import { ionArrowUpOutline, ionArrowDownOutline } from "@quasar/extras/ionicons-v6";

const props = defineProps({
  item: {
    type: Object,
  }
})

const type = ref('Пополнение счёта')

const transactions = computed(() => sumTransactions(props.item, type.value))
const total = computed(() => formatPrice(transactions.value.amount))
const dates = computed(() => `${transactions.value.startDate} — ${transactions.value.endDate}`)

const changeType = () => {
  if (type.value === 'Пополнение счёта') {
    type.value = 'Вывод средств'
  } else {
    type.value = 'Пополнение счёта'
  }
}
</script>

<template>
  <div class="year-card" @click.native="changeType">
    <div class="year-card__title">
      {{ type }}
    </div>
    <div class="year-card__dates">
      {{ dates }}
    </div>
    <div class="year-card__total">
      {{ total }}
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>