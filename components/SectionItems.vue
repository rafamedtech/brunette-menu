<script setup>
const props = defineProps({
  items: {
    type: Array,
  },
});

const sortedItems = props.items.sort((a, b) => a.id - b.id);
</script>

<template>
  <ul class="grid grid-cols-2 gap-4 p-4">
    <li v-for="item in items" :key="item.name">
      <div>
        <h4 class="text-base font-bold uppercase text-accent">{{ item.name }}</h4>
        <p class="text-primary" v-if="item.price" v-html="item.price"></p>
        <p v-if="item.description" v-html="item.description"></p>
      </div>
    </li>
  </ul>
</template>
