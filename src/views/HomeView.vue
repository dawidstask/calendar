<script setup lang="ts">
import ReservationCalendar from "@/components/ReservationCalendar.vue";
import AddReservationModal from "@/components/AddReservationModal.vue";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import { ref } from "vue";
import { useModalStore } from "@/stores/modal";
const date = ref(new Date())

const { setIsModalOpen } = useModalStore()
const setToday = () => date.value = new Date()
const addDays = (days: number) => {
  let result = new Date(date.value);
  result.setDate(result.getDate() + days);
  date.value = result
}
</script>

<template>
  <div class="w-full text-800">
    <div class="flex align-items-center justify-content-between mt-8">
      <div>
        <Calendar v-model="date" showIcon dateFormat="dd/mm/yy" />
      </div>
      <div>
        <Button icon="pi pi-angle-left" outlined @click="addDays(-1)" />
        <Button label="Dzisiaj" outlined class="ml-2" @click="setToday" />
        <Button icon="pi pi-angle-right" outlined class="ml-2" @click="addDays(1)" />
      </div>
    </div>
    <div class="flex align-items-center justify-content-end mt-4">
      <Button label="Dodaj rezerwację" icon="pi pi-plus" @click="setIsModalOpen(true)" />
    </div>
    <AddReservationModal />
    <div class="mt-2">
      <ReservationCalendar :date="date" />
    </div>
  </div>
</template>
