import { defineStore } from 'pinia';

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
      return (id: string) => state.menu.find((category) => category.attributes.title === id);
    },
  },

  actions: {
    async fetch() {
      try {
        // Fetching menu and save it in state
        const client = useStrapiClient();
        const { data: menu } = await client('categories', {
          params: { 'populate[sections][populate]': '*' },
        });
        this.menu = menu;

        // Fetching events and save them in state
        // const { events } = await $fetch('/api/events');
        // this.events = events;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
