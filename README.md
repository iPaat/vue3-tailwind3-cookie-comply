# Vue3 Tailwind Cookie Comply 🍪

[//]: # 'Insert on Made with vue!'

> A Vue 3 compatible component to handle cookie consent styled with Tailwind CSS.

## Features

- 🔹 Small bundle size (3.76 KiB minified + gziped)
- 🙅‍♂️ No extra external dependencies
- 🤖 Optionated and customizable data structure for the modal content
- 👐 Emit events on user actions, so you can use your handlers
- 📱 Default responsive layout
- 🗄️ Highly customizable through **slots**
- 🚪 Usage of Vue3 **Teleport** to render the modal anywhere in your app
- 💅 Looks amazing and is highly customizable
- 🌙 Dark mode from scratch
- ⚖️ TTDSG, DSGVO & ePrivacy Directive compliant

> Heavily inspired by Airbnb's cookie consent UI  
> and https://github.com/yaiks/vue-cookie-comply

## Important

> The creator assumes no liability. The use of this Vue3 component is at your own risk. Consult a lawyer if you are unsure. 

## Installation
> This package is only compatible with Vue 3.x and Tailwind CSS 3.x

First install `vue-cookie-comply` as a dependency of your Vue app:

```sh
yarn add @ipaat/vue3-tailwind3-cookie-comply

# or

npm install @ipaat/vue3-tailwind3-cookie-comply
```

Then, install `vue3-tailwind3-cookie-comply` as a plugin wherever you create your Vue app:

```js
import { createApp } from 'vue'
import App from './App.vue'
import Vue3CookieComply from '@ipaat/vue3-tailwind3-cookie-comply'

const app = createApp(App).use(Vue3CookieComply).mount('#app')
```

## Usage

```vue
<template>
  <div>
    <Vue3CookieComply
        :preferences="preferences"
        @on-accept-all="onAccept"
        @on-decline-all="onDecline"
        @on-save-preferences="onSavePreferences"
    ></Vue3CookieComply>
  </div>
</template>
```

> `vue3-tailwind3-cookie-comply` automatically places the component at the bottom of your page

## Contributing

Feel free to open an issue with bugs, suggestions for features, enhancements, weird behaviours, questions and more. Also, feel more than welcome to open an PR to fix something you came across or improve the code 🚀
