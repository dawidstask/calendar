<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { useCalendarStore } from "@/stores/calendar";
import { ref } from "vue";
defineProps<{
  date: Date
}>()

const calendarStore = useCalendarStore()
const splits = [
  { id: 1, class: 'table1', label: 'Stolik 1' },
  { id: 2, class: 'table2', label: 'Stolik 2' },
]
const locale = ref(navigator?.languages[1] || 'pl')
const onEventClick = (event: any, e: any) => console.log({event, e}, event.id)
const scrollToCurrentTime = () => {
  const calendar = document.querySelector('.reservation-calendar .vuecal__bg')
  const now = new Date()
  const timeCellHeight = 26
  const hours = now.getHours() + now.getMinutes() / 60
  calendar?.scrollTo({ top: hours * timeCellHeight, behavior: 'smooth' })
}
</script>

<template>
  <div class="reservation-calendar">
    <vue-cal
      active-view="day"
      :selected-date="date"
      :time-from="12*60"
      :time-to="25*60"
      :events="calendarStore.getCalendarEvents()"
      :split-days="splits"
      :on-event-click="onEventClick"
      :locale="locale"
      :disable-views="['years', 'year', 'week']"
      sticky-split-labels
      @ready="scrollToCurrentTime"
    >
    </vue-cal>
  </div>
</template>

<style lang="scss" scoped>
.reservation-calendar  {
  height: 450px;
  :deep(.vuecal__menu) {
    display: none;
  }
}
</style>