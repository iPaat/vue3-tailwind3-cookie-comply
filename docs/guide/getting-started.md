# Getting Started

This section will help you to find a starting point.

## Step 1: Install the package

```bash
yarn add @ipaat/vue3-tailwind3-cookie-comply
  
# or
  
npm install @ipaat/vue3-tailwind3-cookie-comply
```

## Step 2: Import the component

### global

```js{3,6}
import { createApp } from 'vue'
import App from './App.vue'
import VueCookieComply from '@ipaat/vue3-tailwind3-cookie-comply'
  
const app = createApp(App)
app.component('VueCookieComply', VueCookieComply)
app.mount('#app')
```

### local
```js-vue{2}
<script setup>
import VueCookieComply from '@ipaat/vue3-tailwind3-cookie-comply'
  
//
</script>
```

## Step 3: Tell Tailwind CSS about the component

```js{3}
module.exports = {
  content: [
    './node_modules/@ipaat/vue3-tailwind3-cookie-comply/dist/vue3-tailwind3-cookie-comply.umd.js',

    // ..
  ],
  
  theme: {
    extend: {
      // ..
    }
  },
  
  plugins: [
    // ..
  ]
}
```

::: danger WARNING
If you miss this part. No styling will be applied.
:::

## Step 4: Define preferences and callbacks

::: details Preferences
```js-vue
<script setup>
const preferences = [
  {
    title: 'Session token (necessary)',
    description: 'This cookie contains a token. With the help of the token, your current session can be continued when using the website. This cookie is valid for 2 hours after creation and is renewed each time you change pages within this website.',
    items: [
      {
        label: '*_session',
        value: 'session',
        isRequired: true,
      },
    ],
  },
  {
    title: 'Remember Token (necessary)',
    description: 'This cookie contains a token. With the help of the token, your login session can be resumed even after the 2 hours that the session cookie is valid. This cookie is only set if you have activated the option "Stay logged in" when logging in. This cookie is removed when you log out.',
    items: [
      {
        label: 'remember_web_*',
        value: 'remember_web',
        isRequired: true,
      },
    ],
  },
  {
    title: 'XSRF Token (necessary)',
    description: 'This cookie contains a token. The token prevents a third party from submitting forms on the website on your behalf. This cookie is valid for 2 hours and is renewed at every page change within the website.',
    items: [
      {
        label: 'XSRF-TOKEN',
        value: 'xsrf_token',
        isRequired: true,
      },
    ],
  },
];
</script>
```
:::

::: details Callbacks
```js-vue
<script setup>
import { ref } from 'vue'
  
const result = ref('Waiting for user interaction...')
  
const onDecline = (accepted) => {
  result.value = 'User accepted no cookies. 👎: ' + accepted.join(', ') + ' (required)'
}
  
const onAccept = (accepted) => {
  result.value = 'User accepted all cookies. 👍: ' + accepted.join(', ')
}
  
const onSave = (accepted) => {
  result.value = 'User accepted the following cookies 📋: ' + accepted.join(', ')
}
</script>
```
:::

## Step 5: Use the component

```js-vue{3-8}
<template>
  <div>
    <VueCookieComply
        :preferences="preferences"
        @on-accept-all="onAccept"
        @on-decline-all="onDecline"
        @on-save-preferences="onSavePreferences"
    ></VueCookieComply>
  </div>
</template>
```

> `vue3-tailwind3-cookie-comply` automatically places the component at the bottom of your page
