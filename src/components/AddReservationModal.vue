<script setup lang="ts">
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Textarea from 'primevue/textarea';
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import { reactive, ref } from "vue";
import { useModalStore } from "@/stores/modal";
import { storeToRefs } from "pinia";
const modalStore = useModalStore()
const { isModalOpen } = storeToRefs(modalStore)
const { setIsModalOpen } = modalStore

// TODO: move to store
const tables = ref([
  { label: 'Table 1', value: '1' },
  { label: 'Table 2', value: '2' },
  { label: 'Table 3', value: '3' },
  { label: 'Table 4', value: '4' },
]);
// TODO: update calendar store. Create getter to have events for cal, keep it as below in store
const event = reactive({
  name: null,
  phone: null,
  table: tables.value[0],
  people: 2,
  date: new Date(),
  start: new Date(),
  end: new Date(),
  comment: null,
})
const onAddClick = () => {
  console.log('e: ', event)
  setIsModalOpen(false)
}
</script>

<template>
  <Dialog v-model:visible="isModalOpen" modal header="Dodaj rezerwację" :style="{ 'max-width': '500px' }">
    <div class="flex mb-3">
      <div class="flex flex-column gap-1 w-8 mr-3">
        <label for="name">Imię</label>
        <InputText id="name" v-model="event.name" />
      </div>
      <div class="flex flex-column gap-1 w-4">
        <label for="phone">Telefon</label>
        <InputMask v-model="event.phone" date="phone" mask="999-999-999" placeholder="500-000-000" />
      </div>
    </div>
    <div class="flex mb-3">
      <div class="flex flex-column gap-1 w-7 mr-3">
        <label for="table">Stolik</label>
        <Dropdown id="table" v-model="event.table" :options="tables" optionLabel="label" placeholder="Wybierz stolik" />
      </div>
      <div class="flex flex-column gap-1 w-3">
        <label for="people">Ilość osób</label>
        <InputNumber id="people" v-model="event.people" inputId="stacked-buttons" showButtons :min="0" :max="4" />
      </div>
    </div>
    <div class="flex mb-3">
      <div class="flex flex-column gap-1 w-5 mr-3">
        <label for="date">Data</label>
        <Calendar id="date" v-model="event.date" dateFormat="dd/mm/yy" showIcon />
      </div>
      <div class="flex flex-column gap-1 w-3 mr-3">
        <label for="start">Początek</label>
        <Calendar id="start" v-model="event.start" timeOnly />
      </div>
      <div class="flex flex-column gap-1 w-3">
        <label for="end">Koniec</label>
        <Calendar id="end" v-model="event.end" timeOnly />
      </div>
    </div>
    <div class="flex mb-3">
      <div class="flex flex-column gap-1">
        <label for="comment">Komentarz</label>
        <Textarea id="comment" v-model="event.comment" rows="2" cols="45" />
      </div>
    </div>
    <template #footer>
      <Button label="Zamknij" icon="pi pi-times" @click="setIsModalOpen(false)" text />
      <Button label="Dodaj" icon="pi pi-check" @click="onAddClick" autofocus />
    </template>
  </Dialog>
</template>

<style lang="scss">
.p-dropdown {
  height: 44px;
}
.p-inputnumber-input {
  width: 30%;
}
</style>