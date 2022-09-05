<script setup>
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const store = useMainStore();

const { modal } = storeToRefs(store);

const openModal = () => {
  modal.value = true;
};

useHead({
  title: 'Encuesta',
  meta: [
    {
      name: 'description',
      content: 'Tu opinion es muy importante para nosotros',
    },
  ],
});

definePageMeta({
  pageTransition: {
    name: 'up',
    mode: 'out-in',
    appear: true,
  },
});
</script>

<template>
  <main>
    <section class="flex items-center">
      <button class="absolute my-auto ml-5 text-primary" @click="$router.back()">
        <i class="fa-solid fa-arrow-left-long text-3xl"></i>
      </button>
      <h1 class="mx-auto px-2 text-center font-handlee text-4xl text-accent lg:px-32">Encuesta</h1>
    </section>

    <section class="lg:mt-8">
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-center lg:text-left">
            <h1 class="text-2xl text-primary">Por favor, ayudanos con tu opinion.</h1>
            <p class="py-6">Con tus comentarios, podemos mejorar nuestros productos y servicios.</p>
          </div>
          <div class="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Question 1</span>
                </label>
                <input type="text" placeholder="Question 1" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Question 2</span>
                </label>
                <input type="text" placeholder="Question 2" class="input input-bordered" />
                <label class="label">
                  <a href="#" class="link link-hover label-text-alt">Help text</a>
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Question 3</span>
                </label>
                <input type="text" placeholder="Question 3" class="input input-bordered" />
                <label class="label">
                  <a href="#" class="link link-hover label-text-alt">Help text</a>
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Question 3</span>
                </label>
                <input type="text" placeholder="Question 3" class="input input-bordered" />
                <label class="label">
                  <a href="#" class="link link-hover label-text-alt">Help text</a>
                </label>
              </div>
              <div class="form-control mt-6">
                <!-- <button class="btn btn-primary text-base-100">Submit</button> -->
                <label @click="openModal" for="my-modal-6" class="btn btn-primary text-base-100"
                  >Submit</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <Modal class="z-50" /> -->
  </main>
</template>
