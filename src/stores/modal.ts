import { ref } from "vue";
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isModalOpen = ref(false)
  const setIsModalOpen = (val: boolean) => isModalOpen.value = val

  return {
    isModalOpen,
    setIsModalOpen,
  }
})
