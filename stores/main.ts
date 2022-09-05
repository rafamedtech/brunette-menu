import { defineStore } from 'pinia';
import es from '@/data/es.json';
import en from '@/data/en.json';
import events from '@/data/events.json';
import { Category, Section, Item } from '@/types/menu';

export const useMainStore = defineStore('main', {
  state: () => ({
    modal: false,
    isLoading: false,
    language: 'es',
    menu: [],
    menu_en: [],
    events: [],
  }),

  getters: {
    getByCategory: (state) => {
      return (id: string) => state.menu.find((category: Category) => category.title === id);
    },
    getByCategoryEn: (state) => {
      return (id: string) => state.menu_en.find((category: Category) => category.title === id);
    },
    // getByCategory: (state) => {
    //   return (id: string) => state.menu.find((category) => category.attributes.title === id);
    // },
  },

  actions: {
    async fetch() {
      try {
        // Fetching menu and save it in state
        // const { find } = useStrapi4();
        // const { data: menu } = await find('categories', {
        //   populate: ['sections.items', 'sections.cover', 'cover'],
        //   sort: 'id:asc',
        // });
        this.menu = es;
        this.menu_en = en;

        // Fetching events and save them in state
        // const { data: events } = await find('events', {
        //   populate: '*',
        // });
        this.events = events;
      } catch (error: any) {
        console.error(error);
      }
    },
  },
});
