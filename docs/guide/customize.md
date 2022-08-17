# Customize

You can use slots to leverage composition and customize `vue3-tailwind3-cookie-comply` with your own components. If the slots are not used, it will default to the internal components.

::: v-pre
```js-vue
<Vue3CookieComply
  :preferences="preferences"
  // ...
>
    <template v-slot:header={ title, description }>
        <h3>{{ title }}</h3>
  
        <p>
          {{ description }}
        </p>
    </template>
    
    <template v-slot:actions={ onAccept, onPreferences }>
        <button v-on:click="onAccept">Preferences</button>
          
        <button v-on:click="onPreferences">Accept All</button>
    </template>
    
    <template v-slot:modal-close-button={ onClose }>
        <button v-on:click="onClose">X</button>         
    </template>
    
    <template v-slot:modal-title>
        <h2>Make your decisions</h2>        
    </template>
    
    <template v-slot:modal-preference-item={ preference, index }>
        <h5>{{ preference.title }}</h5>        
    </template>
    
    <template v-slot:modal-footer={ onAccept, onDecline, onSave }>
        <button v-on:click="onAccept">Accept All</button>
          
        <button v-on:click="onDecline">Decline All</button>    
            
        <button v-on:click="onSave">Save</button>        
    </template>
</Vue3CookieComply>
```
:::

Note that some slots are scoped slots so you can have access to the values and callbacks.
