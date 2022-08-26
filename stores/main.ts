import { defineStore } from 'pinia';
import menu_es from '@/menu-es.json';
import myEvents from '@/events.json';

export const useMainStore = defineStore('main', {
  state: () => ({
    modal: false,
    isLoading: false,
    language: 'es',
    menu: [],
    events: [],
  }),

  getters: {
    getByCategory: (state) => {
      return (id: string) => state.menu.find((category) => category.category === id);
    },
    // getByCategory: (state) => {
    //   return (id: string) => state.menu.find((category) => category.attributes.title === id);
    // },
  },

  actions: {
    async fetch() {
      try {
        // Fetching menu and save it in state
        // const client = useStrapiClient();
        // const { data: menu } = await client('categories', {
        //   params: { 'populate[sections][populate]': '*' },
        // });
        this.menu = menu_es;
        // console.log(this.menu);

        // Fetching events and save them in state
        // const { data: events } = await client('events');
        // this.events = events;
        this.events = myEvents;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
