import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCalendarStore = defineStore('calendar', () => {
  const generateDate = () => `${new Date().toLocaleDateString('fr-CA')}`
  console.log(generateDate())
  const events = reactive([
    {
      id: 1,
      name: 'P Daniel',
      phone: '500500500',
      table: { label: 'Table 1', value: '1' },
      people: 2,
      date: new Date(),
      start: new Date(),
      end: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
      comment: 'bez glutenu',
    },
    {
      id: 1,
      name: 'Pani Anna',
      phone: '500500500',
      table: { label: 'Table 2', value: '2' },
      people: 2,
      date: new Date(),
      start: new Date(),
      end: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
      comment: '',
    }
    // {
    //   id: 1,
    //   start: `${generateDate()} 12:30`,
    //   end: `${generateDate()} 14:30`,
    //   title: 'Reservation 1',
    //   content: 'test 1',
    //   split: 1,
    // },
    // {
    //   id: 2,
    //   start: `${generateDate()} 12:00`,
    //   end: `${generateDate()} 14:00`,
    //   title: 'Reservation 2',
    //   content: 'test 2',
    //   split: 2,
    // },
    // {
    //   id: 3,
    //   start: `${generateDate()} 15:00`,
    //   end: `${generateDate()} 17:00`,
    //   title: 'Reservation 3',
    //   content: 'test 3',
    //   split: 1
    // },
    // {
    //   id: 4,
    //   start: `${generateDate()} 17:00`,
    //   end: `${generateDate()} 19:00`,
    //   title: 'Reservation 4',
    //   content: 'test 4',
    //   split: 2
    // },
    // {
    //   id: 5,
    //   start: `${generateDate()} 20:00`,
    //   end: `${generateDate()} 22:00`,
    //   title: 'Reservation 5',
    //   content: 'test 5',
    //   split: 2
    // },
    // {
    //   id: 6,
    //   start: `${generateDate()} 19:00`,
    //   end: `${generateDate()} 21:00`,
    //   title: 'Reservation 6',
    //   content: 'test 6',
    //   split: 1
    // },
  ])

  return {
    events: events.map(e => (
      {
        id: e.id,
        start: `${generateDate()} ${e.start.toLocaleTimeString().slice(0, -3)}`,
        end: `${generateDate()} ${e.end.toLocaleTimeString().slice(0, -3)}`,
        title: e.name,
        content: e.comment,
        split: Number(e.table.value),
      }
    ))
  }
})
