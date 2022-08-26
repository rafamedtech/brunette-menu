<script setup>
if (process.client) {
  const showMenu = () => {
    if (window.scrollY > 50) {
      showButton.value = true;
    } else {
      showButton.value = false;
    }
  };
  window.addEventListener('scroll', showMenu);
}

const showButton = ref(false);
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<template>
  <li v-show="showButton" class="w-fit" key="4">
    <button
      @click="scrollToTop"
      class="flex flex-col gap-0 p-0 focus:bg-transparent active:bg-transparent active:text-primary"
    >
      <i class="fa-solid fa-chevron-up text-xl"></i> Arriba
    </button>
  </li>
</template>
