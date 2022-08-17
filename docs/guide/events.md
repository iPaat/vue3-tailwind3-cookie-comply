# Events

## on-accept-all

This event is dispatched when the user clicks the Accept All button. You can call your own handler to do whatever you might do in this case:

```js-vue{14-16,22}
<script setup>
import { ref } from 'vue'
  
const preferences = [
  {
    title: 'Session token (necessary)',
    
    // 
  },
];
  
const result = ref('Waiting for user interaction...')
  
const onAccept = (accepted) => {
  result.value = 'User accepted all cookies. 👍: ' + accepted.join(', ')
}
</setup>
  
<template>
    <Vue3CookieComply
        :preferences="preferences"
        @on-accept-all="onAccept"
    ></Vue3CookieComply>
</template>
```
After `on-accept-all` is dispatched, an item with key `cookie-comply` is placed in the `localStorage` with the value of an array containing the values from every cookie. You can use the presence of this key and value to do some logic on the client. Once the `cookie-comply` key exists in the `localStorage`, the `vue3-tailwind3-cookie-comply` won't show anymore on the page.

## on-decline-all

This event is dispatched when the user clicks the Decline All button. You can call your own handler to do whatever you might do in this case:
```js-vue{14-16,22}
<script setup>
import { ref } from 'vue'
  
const preferences = [
  {
    title: 'Session token (necessary)',
    
    // 
  },
];
  
const result = ref('Waiting for user interaction...')
  
const onDecline = (required) => {
  result.value = 'User accepted no cookies. 👎: ' + required.join(', ')
}
</setup>
  
<template>
    <Vue3CookieComply
        :preferences="preferences"
        @on-decline-all="onDecline"
    ></Vue3CookieComply>
</template>
```
After `on-decline-all` is dispatched, an item with key `cookie-comply` is placed in the `localStorage` with the value of an array containing the values from the cookies marked as required. You can use the presence of this key and value to do some logic on the client. Once the `cookie-comply` key exists in the `localStorage`, the `vue3-tailwind3-cookie-comply` won't show anymore on the page.

## on-save-preferences

This event is dispatched when the user clicks the Save button. You can call your own handler to do whatever you might do in this case:
```js-vue{14-16,22}
<script setup>
import { ref } from 'vue'
  
const preferences = [
  {
    title: 'Session token (necessary)',
    
    // 
  },
];
  
const result = ref('Waiting for user interaction...')
  
const onSave = (accepted) => {
  result.value = 'User accepted the following cookies 📋: ' + accepted.join(', ')
}
</setup>
  
<template>
    <Vue3CookieComply
        :preferences="preferences"
        @on-save-preferences="onSave"
    ></Vue3CookieComply>
</template>
```
After `on-save-preferences` is dispatched, an item with key `cookie-comply` is placed in the `localStorage` with the value of an array containing the values from the cookies marked as required and those the user selected. You can use the presence of this key and value to do some logic on the client. Once the `cookie-comply` key exists in the `localStorage`, the `vue3-tailwind3-cookie-comply` won't show anymore on the page.
