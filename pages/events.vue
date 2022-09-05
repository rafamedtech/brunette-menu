<script setup>
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const store = useMainStore();
const { events, language } = storeToRefs(store);

useHead({
  title: 'Eventos',
  meta: [
    {
      name: 'description',
      content: 'Nuestros eventos mas recientes',
    },
  ],
});

definePageMeta({
  pageTransition: {
    name: 'up',
    mode: 'out-in',
    appear: true,
  },
});
</script>

<template>
  <main>
    <section class="flex items-center">
      <button class="absolute my-auto ml-5 text-primary" @click="$router.back()">
        <i class="fa-solid fa-arrow-left-long text-3xl"></i>
      </button>
      <h1 class="mx-auto px-2 text-center font-handlee text-4xl text-accent lg:px-32">
        {{ language === 'es' ? 'Eventos' : 'Events' }}
      </h1>
    </section>

    <section>
      <div v-for="event in events" :key="event.id" class="card p-4">
        <h2 class="text-center text-2xl uppercase text-primary">{{ event.title }}</h2>
        <img class="rounded-2xl md:mx-auto md:h-96" :src="event.cover" alt="" />
      </div>
    </section>
  </main>
</template>
