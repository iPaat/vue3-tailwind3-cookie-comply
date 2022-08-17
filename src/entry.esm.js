import VueCookieComply from './VueCookieComply/VueCookieComply.vue'

export default {
  install (app) {
    app.component('VueCookieComply', VueCookieComply)
  }
}

export { default as VueCookieComply } from "./VueCookieComply/VueCookieComply.vue";
