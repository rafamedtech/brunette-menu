<script setup>
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const store = useMainStore();
const { menu_en, language } = storeToRefs(store);

store.$patch({
  language: 'en',
  isLoading: true,
});

setTimeout(() => {
  store.$patch({
    isLoading: false,
  });
}, 2000);

useHead({
  title: 'Brunette Menu',
  meta: [
    {
      name: 'description',
      content: 'Restaurant menu website',
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
    <h1 class="px-2 text-center font-handlee text-2xl uppercase text-accent lg:px-32">Menu</h1>
    <span class="mx-auto block w-fit text-xs uppercase text-primary">(english)</span>
    <section class="grid grid-cols-2 gap-4 py-4 px-2 lg:grid-cols-3 lg:px-32">
      <Suspense>
        <CategoryItem v-for="category in menu_en" :category="category" :key="category.category" />
      </Suspense>
    </section>
  </main>
</template>
