<script setup>
const props = defineProps({
  section: {
    type: Object,
  },
});
</script>

<template>
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
</template>
