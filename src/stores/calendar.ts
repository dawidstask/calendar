import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCalendarStore = defineStore('calendar', () => {
  const generateDate = () => `${new Date().toLocaleDateString('fr-CA')}`
  const events = reactive([
    {
      id: 1,
      start: `${generateDate()} 12:30`,
      end: `${generateDate()} 14:30`,
      title: 'Reservation 1',
      content: 'test 1',
      split: 1,
    },
    {
      id: 2,
      start: `${generateDate()} 12:00`,
      end: `${generateDate()} 14:00`,
      title: 'Reservation 2',
      content: 'test 2',
      split: 2,
    },
    {
      id: 3,
      start: `${generateDate()} 15:00`,
      end: `${generateDate()} 17:00`,
      title: 'Reservation 3',
      content: 'test 3',
      split: 1
    },
    {
      id: 4,
      start: `${generateDate()} 17:00`,
      end: `${generateDate()} 19:00`,
      title: 'Reservation 4',
      content: 'test 4',
      split: 2
    },
    {
      id: 5,
      start: `${generateDate()} 20:00`,
      end: `${generateDate()} 22:00`,
      title: 'Reservation 5',
      content: 'test 5',
      split: 2
    },
    {
      id: 6,
      start: `${generateDate()} 19:00`,
      end: `${generateDate()} 21:00`,
      title: 'Reservation 6',
      content: 'test 6',
      split: 1
    },
  ])

  return { events }
})
