<script setup>
import { useMainStore } from '@/stores/main';

const store = useMainStore();
const { params } = useRoute();

// Get category title
const title = ref(params.category);
// const categoryTitle = computed(() => {
//   return title.value.charAt(0).toUpperCase() + title.value.slice(1);
// });

// Current category and sections
const category = store.getByCategory(params.category);
// const sections = category.attributes.sections.data;
// console.log(category.sections);

// useHead({
//   title: categoryTitle,
//   meta: [
//     {
//       name: 'description',
//       content: `Nuestro menu de ${categoryTitle}`,
//     },
//   ],
// });

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
      <div v-for="section in category.sections" :key="section.sectionTitle">
        <!--  Section banner -->
        <div class="custom-banner relative flex h-32 w-full flex-col justify-center py-2 lg:h-40">
          <img
            class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
            :src="section.cover"
            alt=""
          />
          <h2 class="text-center font-handlee text-2xl uppercase text-base-100">
            - {{ section.sectionTitle }} -
          </h2>
          <p class="text-center font-handlee text-lg font-extralight uppercase text-gray-50">
            {{ section.sectionDescription }}
          </p>
        </div>

        <!--Section Items -->
        <ul class="grid grid-cols-2 gap-4 p-4">
          <li v-for="item in section.sectionItems" :key="item.itemTitle">
            <div>
              <h4 class="text-lg font-bold uppercase text-accent">{{ item.itemTitle }}</h4>
              <p class="text-primary" v-if="item.itemPrice" v-html="`$ ${item.itemPrice}`"></p>
              <p v-if="item.itemDescription" v-html="item.itemDescription"></p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- <section class="my-4 lg:grid lg:grid-cols-2 lg:gap-8">
      <div v-for="{ id, attributes: section } in sections" :key="id">
          Section banner 
        <div class="custom-banner relative flex h-32 w-full flex-col justify-center py-2 lg:h-40">
          <img
            class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
            :src="section.cover"
            alt=""
          />
          <h2 class="text-center font-handlee text-2xl uppercase text-base-100">
            - {{ section.title }} -
          </h2>
          <p class="text-center font-handlee text-lg font-extralight uppercase text-gray-50">
            {{ section.description }}
          </p>
        </div>

        Section Items 
        <ul class="grid grid-cols-2 gap-4 p-4">
          <li v-for="{ id, attributes: item } in section.items.data" :key="id">
            <div>
              <h4 class="text-lg font-bold uppercase text-accent">{{ item.title }}</h4>
              <p class="text-primary" v-if="item.price" v-html="`$ ${item.price}`"></p>
              <p v-if="item.description" v-html="item.description"></p>
            </div>
          </li>
        </ul>
      </div>
    </section> -->
  </main>
</template>
