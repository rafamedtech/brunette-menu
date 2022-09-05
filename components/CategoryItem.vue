<script setup lang="ts">
// import { Category } from '@/stores/main';

const props = defineProps({
  category: {
    type: Object,
    default: () => ({}),
  },
});

const route = useRoute();

// const props = defineProps<{
//   category: Category;
// }>()

// const cover: string = props.category.cover.data.attributes.url;
// console.log(props.category);

// const categoryTitle = computed(() => {
//   return props.category.title.charAt(0).toUpperCase() + props.category.title.slice(1);
// });
</script>

<template>
  <nuxt-link
    :to="{ path: `${route.path === '/' ? '/' : '/en/'}${category.title}` }"
    class="h-fit w-full text-center"
  >
    <figure class="card h-48 shadow-xl lg:h-56">
      <img
        :src="category.cover"
        class="rounded-box h-full w-full object-cover"
        alt="item picture"
      />
    </figure>
    <span class="text-lg uppercase text-primary">{{ category.title }}</span>
  </nuxt-link>
</template>
