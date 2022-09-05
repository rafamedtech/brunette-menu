<script setup>
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const store = useMainStore();
const route = useRoute();
const { language } = storeToRefs(store);

const changeLanguage = () => {
  store.$patch({
    isLoading: true,
    language: language.value === 'es' ? 'en' : 'es',
  });

  setTimeout(() => {
    store.$patch({
      isLoading: false,
    });
  }, 1500);
};
</script>

<template>
  <section class="drawer relative h-full">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle max-h-0" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <nav class="navbar w-full justify-between bg-base-100 lg:px-32">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-ghost btn-square text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-6 w-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        <!-- Logo -->
        <figure class="text-2xl text-neutral-content">
          <img class="h-14" src="@/assets/images/logo1.png" alt="logo" />
        </figure>

        <section>
          <!-- Language switch -->

          <!-- <label for="my-modal" class="modal-button btn">open modal</label> -->

          <!-- Desktop navbar -->
          <div class="hidden flex-none lg:block">
            <ul class="menu menu-horizontal">
              <li><nuxt-link :to="{ path: route.path === '/' ? '/en' : '/' }">Menu</nuxt-link></li>
              <li><nuxt-link :to="{ name: 'events' }">Eventos</nuxt-link></li>
              <li><nuxt-link :to="{ name: 'survey' }">Encuesta</nuxt-link></li>
            </ul>
          </div>

          <nuxt-link
            class="btn btn-accent h-fit flex-col px-2 text-base-100 opacity-0 transition-all duration-500 lg:flex-row lg:gap-2"
            :class="{
              'opacity-100 transition-all duration-700': route.path === '/' || route.path === '/en',
            }"
            :to="{ path: route.path === '/' ? '/en' : '/' }"
          >
            <i class="fa-solid fa-language text-lg"></i>
            <span v-if="route.path === '/'" class="text-xs">EN</span>
            <span v-if="route.path === '/en'" class="text-xs">ES</span>
          </nuxt-link>
          <!-- <label
            for="my-modal"
            @click="changeLanguage"
            class="btn btn-accent h-fit flex-col px-2 text-base-100 lg:flex-row lg:gap-2"
          >
            <i class="fa-solid fa-language text-lg"></i>
            <span class="text-xs">{{ language }}</span>
          </label> -->
        </section>
      </nav>

      <!-- Page content  -->
      <slot></slot>
    </div>

    <!-- Mobile Sidebar -->
    <Sidebar />
  </section>
</template>
