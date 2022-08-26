<script setup>
import { useMainStore } from '@/stores/main';

const store = useMainStore();
const { params } = useRoute();

// Get category title
const title = ref(params.category);
const categoryTitle = computed(() => {
  return title.value.charAt(0).toUpperCase() + title.value.slice(1);
});

// Current category
const category = store.getByCategory(params.category);

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
        {{ categoryTitle }}
      </h1>
    </section>

    <section class="my-4 lg:grid lg:grid-cols-2 lg:gap-8">
      <div v-for="section in category.attributes.sections.data" :key="section.id">
        <!--  Section banner -->
        <div class="custom-banner relative flex h-32 w-full flex-col justify-center py-2 lg:h-40">
          <img
            class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
            :src="section.attributes.cover"
            alt=""
          />
          <h2 class="text-center font-handlee text-2xl uppercase text-base-100">
            - {{ section.attributes.title }} -
          </h2>
          <p class="text-center font-handlee text-lg font-extralight uppercase text-gray-50">
            {{ section.attributes.description }}
          </p>
        </div>

        <!--Section Items -->
        <ul class="grid grid-cols-2 gap-4 p-4">
          <li v-for="item in section.attributes.items.data" :key="item.id">
            <div>
              <h4 class="text-lg font-bold uppercase text-accent">{{ item.attributes.title }}</h4>
              <p class="text-primary" v-html="`$ ${item.attributes.price}`"></p>
              <p v-if="item.attributes.description">{{ item.attributes.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
