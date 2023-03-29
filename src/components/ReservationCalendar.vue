<script setup lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
defineProps<{
  date: Date
}>()

const events = [
  {
    id: 1,
    start: '2023-03-15 18:00',
    end: '2023-03-15 20:00',
    title: 'Reservation 1',
    content: 'test 1',
    split: 1,
  },
  {
    id: 2,
    start: '2023-03-15 17:00',
    end: '2023-03-15 20:00',
    title: 'Reservation 2',
    content: 'test 2',
    split: 2,
  },
  {
    id: 3,
    start: '2023-03-15 21:00',
    end: '2023-03-15 23:00',
    title: 'Reservation 3',
    content: 'test 3',
    split: 1
  },
]
const splits = [
  { id: 1, class: 'table1', label: 'Table 1' },
  { id: 2, class: 'table2', label: 'Table2' },
]
const onEventClick = (event, e) => console.log({event, e}, event.id)
</script>

<template>
  <div class="reservation-calendar">
    <vue-cal
      :disable-views="['years', 'year', 'month', 'week']"
      :selected-date="date"
      :time-from="12*60"
      :time-to="25*60"
      :events="events"
      :split-days="splits"
      :on-event-click="onEventClick"
      sticky-split-labels
    >
    </vue-cal>
  </div>
</template>

<style lang="scss" scoped>
.reservation-calendar  {
  height: 500px;
  :deep(.vuecal__menu) {
    display: none;
  }
}
</style>