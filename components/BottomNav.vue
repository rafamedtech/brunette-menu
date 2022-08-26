<template>
  <div class="flex w-screen justify-center lg:hidden">
    <transition-group
      tag="ul"
      name="fade"
      class="menu rounded-box menu-horizontal fixed bottom-2 mx-auto gap-4 bg-accent/75 px-4 py-2 text-base-100"
    >
      <li class="w-fit justify-center" key="1">
        <nuxt-link
          to="/"
          class="flex flex-col items-center gap-0 p-0 focus:bg-transparent active:text-primary"
          ><i class="fa-solid fa-house text-xl"></i> Inicio</nuxt-link
        >
      </li>
      <li class="w-fit justify-center" key="2">
        <nuxt-link
          :to="{ name: 'events' }"
          class="flex flex-col items-center gap-0 p-0 focus:bg-transparent active:text-primary"
          ><i class="fa-solid fa-calendar-days text-xl"></i> Eventos</nuxt-link
        >
      </li>
      <li class="w-fit justify-center" key="3">
        <nuxt-link
          :to="{ name: 'survey' }"
          class="flex flex-col items-center gap-0 p-0 focus:bg-transparent active:text-primary"
          ><i class="fa-solid fa-square-poll-horizontal text-xl"></i> Encuesta</nuxt-link
        >
      </li>
      <ScrollToTop key="4" />
    </transition-group>
  </div>
</template>
