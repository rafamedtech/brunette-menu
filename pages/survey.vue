<script setup>
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const store = useMainStore();

const { modal, language } = storeToRefs(store);

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
      <h1 class="mx-auto px-2 text-center font-handlee text-4xl text-accent lg:px-32">
        {{ language === 'es' ? 'Encuesta' : 'Survey' }}
      </h1>
    </section>

    <section class="lg:mt-8">
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row">
          <div v-if="language === 'es'" class="text-center lg:text-left">
            <h1 class="text-2xl text-primary">Agradeceríamos tu opinión</h1>
            <p class="py-6">Con tus comentarios, podemos mejorar nuestros productos y servicios.</p>
          </div>
          <div v-else class="text-center lg:text-left">
            <h1 class="text-2xl text-primary">We would appreciate your feedback.</h1>
            <p class="py-6">With your opinion, we can improve our products and services.</p>
          </div>
          <div class="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
            <form class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">{{
                    language === 'es' ? 'Pregunta 1' : 'Question 1'
                  }}</span>
                </label>
                <input type="range" min="1" max="5" value="2" class="range range-accent" step="1" />
                <div class="flex w-full justify-between px-2 text-xs">
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x1</span>
                  </div>
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x2</span>
                  </div>
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x3</span>
                  </div>
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x4</span>
                  </div>
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x5</span>
                  </div>
                </div>
                <!-- <input
                  type="text"
                  :placeholder="language === 'es' ? 'Pregunta 1' : 'Question 1'"
                  class="input input-bordered"
                /> -->
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">{{
                    language === 'es' ? 'Pregunta 2' : 'Question 2'
                  }}</span>
                </label>
                <input type="range" min="1" max="5" value="3" class="range range-accent" step="1" />
                <div class="flex w-full justify-between px-2 text-xs">
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x1</span>
                  </div>
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x2</span>
                  </div>
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x3</span>
                  </div>
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x4</span>
                  </div>
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x5</span>
                  </div>
                </div>
                <label class="label">
                  <a href="#" class="link link-hover label-text-alt">{{
                    language === 'es' ? 'Texto de ayuda' : 'Help text'
                  }}</a>
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">{{
                    language === 'es' ? 'Pregunta 3' : 'Question 3'
                  }}</span>
                </label>
                <input type="range" min="1" max="5" value="5" class="range range-accent" step="1" />
                <div class="flex w-full justify-between px-2 text-xs">
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x1</span>
                  </div>
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x2</span>
                  </div>
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x3</span>
                  </div>
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x4</span>
                  </div>
                  <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-primary" />
                    <span>x5</span>
                  </div>
                </div>
                <label class="label">
                  <a href="#" class="link link-hover label-text-alt">{{
                    language === 'es' ? 'Texto de ayuda' : 'Help text'
                  }}</a>
                </label>
              </div>

              <div class="form-control">
                <label class="label" for="comment">
                  <span class="label-text">{{
                    language === 'es' ? 'Comentarios' : 'Comments'
                  }}</span>
                </label>
                <textarea class="textarea textarea-accent" name="comment" id="comment"></textarea>
              </div>

              <div class="form-control mt-6">
                <!-- <button class="btn btn-primary text-base-100">Submit</button> -->
                <label @click="openModal" for="my-modal-6" class="btn btn-primary text-base-100">{{
                  language === 'es' ? 'Enviar' : 'Submit'
                }}</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- <Modal class="z-50" /> -->
  </main>
</template>
