<script setup>
import { useMainStore } from '@/stores/main';

const store = useMainStore();
const { params } = useRoute();

store.$patch({
  language: 'en',
});

// Get category title
const title = ref(params.category);
const categoryTitle = computed(() => {
  return title.value.charAt(0).toUpperCase() + title.value.slice(1);
});

// Current category and sections
const category = store.getByCategoryEn(params.category);
// const sections = category.attributes.sections.data.sort((a, b) => {
//   return a.id - b.id;
// });

useHead({
  title: categoryTitle,
  meta: [
    {
      name: 'description',
      content: `Nuestro menu de ${categoryTitle}`,
    },
  ],
});

definePageMeta({
  pageTransition: {
    name: 'up',
    mode: 'out-in',
  },
});
</script>

<template>
  <main class="container">
    <section class="flex items-center">
      <button class="absolute my-auto ml-5 text-primary" @click="$router.back()">
        <i class="fa-solid fa-arrow-left-long text-3xl"></i>
      </button>
      <h1 class="mx-auto px-2 text-center font-handlee text-3xl uppercase text-accent lg:px-32">
        {{ title }}
      </h1>
    </section>

    <section class="my-4 lg:grid lg:grid-cols-2 lg:gap-8">
      <div v-for="section in category.sections" :key="section.title">
        <SectionBanner :section="section" />
        <SectionItems :items="section.items" />
      </div>
    </section>
  </main>
</template>
