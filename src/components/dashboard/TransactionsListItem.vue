<script setup>
import { computed } from 'vue'

const props = defineProps({
  transaction: {
    type: Object,
  }
})

const transactionId = computed(() => props.transaction?.id)
const transactionType = computed(() => props.transaction?.type)
const transactionDate = computed(() => props.transaction?.date)
const transactionAmount = computed(() => props.transaction?.amount)
</script>

<template>
  <div class="row transaction-list-item">
    <div class="col transaction-list-item__id">{{ transactionId }}</div>
    <div class="col transaction-list-item__type">
      {{ transactionType }}
    </div>
    <div class="col transaction-list-item__date">
      {{ transactionDate }}
    </div>
    <div class="col transaction-list-item__amount">
      {{ transactionAmount }}
    </div>
  </div>
</template>

<style scoped></style>
