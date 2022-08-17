<script setup>
import Vue3CookieComply from './components/CookieBanner.vue';

import CookieButton from './components/CookieButton.vue';

const clear = () => {
  localStorage.removeItem('cookie-comply');

  location.reload();
};

const preferences = [
  {
    title: 'Session token (necessary)',
    description:
      'This cookie contains a token. With the help of the token, your current session can be continued when using the website. This cookie is valid for 2 hours after creation and is renewed each time you change pages within this website.',
    items: [
      {
        label: '*_session',
        value: 'session',
        isRequired: true,
      },
    ],
  },
  {
    title: 'Remember Token (nötig)',
    description:
      'This cookie contains a token. With the help of the token, your login session can be resumed even after the 2 hours that the session cookie is valid. This cookie is only set if you have activated the option "Stay logged in" when logging in. This cookie is removed when you log out.',
    items: [
      {
        label: 'remember_web_*',
        value: 'remember_web',
        isRequired: true,
      },
    ],
  },
  {
    title: 'XSRF Token (nötig)',
    description:
      'This cookie contains a token. The token prevents a third party from submitting forms on the website on your behalf. This cookie is valid for 2 hours and is renewed at every page change within the website.',
    items: [
      {
        label: 'XSRF-TOKEN',
        value: 'xsrf_token',
        isRequired: true,
      },
    ],
  },
];

const fn = (e) => {
  console.log(e);
};
</script>

<template>
  <main>
    <div class="max-w-5xl mx-auto">
      <div class="mt-32 text-gray-800 dark:text-gray-200">
        <img
          alt="Vue logo"
          class="h-64 w-64 mx-auto"
          src="./assets/vue-logo.png"
        />

        <h1 class="text-center font-semibold text-4xl mt-16">
          Testing the vue3-tailwind3-cookie-comply component
        </h1>

        <p class="text-center my-6 text-gray-600 dark:text-gray-400">
          Click in the button below to clean the local storage and test the
          vue3-tailwind3-cookie-comply component again
        </p>

        <CookieButton class="mx-auto block" @click="clear">
          Clear local storage
        </CookieButton>
      </div>
    </div>

    <Vue3CookieComply
      :preferences="preferences"
      @on-accept-all="fn"
      @on-decline-all="fn"
      @on-save-preferences="fn"
    ></Vue3CookieComply>
  </main>
</template>
