import component from './VueCookieComply/VueCookieComply.vue';

export default /*#__PURE__*/ (() => {
  const installable = component;

  installable.install = (app) => {
    app.component('VueCookieComply', installable);
  };

  return installable;
})();
