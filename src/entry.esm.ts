import type { App, Plugin } from 'vue';
import component from './VueCookieComply/VueCookieComply.vue';

type InstallableComponent = typeof component & {
  install: Exclude<Plugin['install'], undefined>;
};

export default /*#__PURE__*/ ((): InstallableComponent => {
  const installable = component as unknown as InstallableComponent;

  installable.install = (app: App) => {
    app.component('VueCookieComply', installable);
  };
  return installable;
})();
