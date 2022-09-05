<script setup>
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const store = useMainStore();
const { language } = storeToRefs(store);
</script>

<template>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label>
    <ul class="menu z-50 w-80 overflow-y-auto bg-base-100 p-4">
      <!-- Sidebar content here -->
      <li><img src="@/assets/images/logo1.png" alt="logo" /></li>
      <li class="flex w-full flex-row justify-center gap-4 text-5xl active:bg-transparent">
        <nuxt-link to="https://www.facebook.com/brunette.realdelmar" target="_blank"
          ><i class="fa-brands fa-facebook"></i
        ></nuxt-link>
        <nuxt-link to="https://www.instagram.com/brunette.realdelmar/" target="_blank"
          ><i class="fa-brands fa-instagram"></i
        ></nuxt-link>
      </li>
      <li><p class="mx-auto text-center font-bold text-accent">(664) 974 6842</p></li>
      <li>
        <div class="flex flex-col text-center">
          <h4 class="font-handlee text-2xl uppercase text-primary">
            {{ language === 'es' ? 'Horario' : 'Schedule' }}
          </h4>
          <article>
            <p class="text-lg font-bold uppercase text-accent">
              {{ language === 'es' ? 'Martes - Jueves' : 'Tuesday - Thursday' }}
            </p>
            <span>9:00 AM - 10:00 PM</span>
          </article>
          <article>
            <p class="text-lg font-bold uppercase text-accent">
              {{ language === 'es' ? 'Viernes - Sabado' : 'Friday - Saturday' }}
            </p>
            <span>9:00 AM - 12:00 AM</span>
          </article>
          <article>
            <p class="text-lg font-bold uppercase text-accent">
              {{ language === 'es' ? 'Domingo' : 'Sunday' }}
            </p>
            <span>8:00 AM - 6:00 PM</span>
          </article>
        </div>
      </li>
      <!-- <span class="mt-20 text-center">Created by Rafamed</span> -->
    </ul>
  </div>
</template>
