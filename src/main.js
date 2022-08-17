import CookieComplyBanner from './components/CookieBanner.vue';

export default {
  install: (app) => {
    if (!window) {
      return;
    }

    app.component('Vue3CookieComply', CookieComplyBanner);
  },
};
