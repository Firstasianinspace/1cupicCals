<script setup>
import { computed } from 'vue'
import { formatPrice } from '../../helpers'
import { ionLogInOutline, ionLogOutOutline, ionWalletOutline } from "@quasar/extras/ionicons-v6";

const props = defineProps({
  card: {
    type: Object,
  }
})

const cardTitle = computed(() => props.card?.type)
const cardAmount = computed(() => formatPrice(props.card?.amount))
const cardDates = computed(() => `${props.card?.startDate} — ${props.card?.endDate}`)
const iconName = computed(() => {
  if (props.card.type === 'Пополнение счёта') {
    return ionLogInOutline
  }
  if (props.card.type === 'Вывод средств') {
    return ionLogOutOutline
  }
  return ionWalletOutline
})

const dynamicClass = computed(() => props.card?.amount < 0 ? 'negative' : 'positive')
const dynamicColor = computed(() => props.card.type === 'Пополнение счёта' ? 'blue' : 'green')
</script>

<template>
  <div class="total-card dashboard-card">
    <div class="total-card__title">
      <h6 class="dashboard-card__title">{{ cardTitle }}</h6>
      <p class="total-card__dates">{{ cardDates }}</p>
    </div>
    <q-icon :name="iconName" class="total-card__icon" :class="dynamicColor" />
    <q-separator spaced="16px" />
    <div class="total-card__amount" :class="dynamicClass">{{ cardAmount }} <span>₽</span></div>
  </div>
</template>

<style lang="scss" scoped>
.total-card {
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto 1fr;
  &__title {
    grid-column: 1 / 3;
  }
  .q-separator {
    grid-column: 1 / 4;
    grid-row: 2 / 2;
  }
  &__dates {
    grid-column: 1 / 4;
    grid-row: 2 / 2;
    color: #898989;
  }
  &__icon {
    grid-column: 3 / 3;
    grid-row: 1 / 2;
    font-size: 24px;
    background: grey;
    border-radius: 5px;
    padding: 15px;
    place-self: end;
    transform: rotate(90deg);
  }
  &__amount {
    grid-column: 1 / 3;
    grid-row: 3 / 3;
    font-size: 24px;
    font-weight: 700;
    &.negative {
      color: red;
    }
  }
}
.blue {
  background: #F1F3FE;
}
.light-red {
  background: #FBEEEE;
}
.light-green {
  background: #EEFBEF;
}
</style>
