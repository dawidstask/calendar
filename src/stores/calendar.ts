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
      id: 2,
      name: 'Pani Anna',
      phone: '500500500',
      table: { label: 'Table 2', value: '2' },
      people: 2,
      date: new Date(),
      start: new Date(),
      end: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
      comment: '',
    },
  ])

  const addEvent = (event: any) => events.push({ id: events.length + 1, ...event })
  const getCalendarEvents = () => {
    return events.map(e => (
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

  return {
    events,
    getCalendarEvents,
    // events: events.map(e => (
    //   {
    //     id: e.id,
    //     start: `${generateDate()} ${e.start.toLocaleTimeString().slice(0, -3)}`,
    //     end: `${generateDate()} ${e.end.toLocaleTimeString().slice(0, -3)}`,
    //     title: e.name,
    //     content: e.comment,
    //     split: Number(e.table.value),
    //   }
    // )),
    addEvent,
  }
})
