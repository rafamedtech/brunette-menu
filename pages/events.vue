<script setup>
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const store = useMainStore();
const { events } = storeToRefs(store);

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
      <h1 class="mx-auto px-2 text-center font-handlee text-4xl text-accent lg:px-32">Eventos</h1>
    </section>

    <section>
      <div v-for="{ id, cover } in events" :key="id" class="card p-4">
        <img class="rounded-2xl" :src="cover" alt="" />
      </div>
      <!-- <div v-for="{ id, attributes } in events" :key="id" class="card p-4">
        <img class="rounded-2xl" :src="attributes.cover" alt="" />
      </div> -->
    </section>
  </main>
</template>
