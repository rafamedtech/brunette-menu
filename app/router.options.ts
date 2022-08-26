import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve) => {
        resolve(savedPosition);
      });
    }
    return new Promise((resolve) => {
      resolve({ top: 0, behavior: 'smooth' });
    });
  },
};
