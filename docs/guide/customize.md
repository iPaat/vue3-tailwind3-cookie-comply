# Customize

You can use slots to leverage composition and customize `vue3-tailwind3-cookie-comply` with your own components. If the slots are not used, it will default to the internal components.

::: v-pre
```js-vue
<Vue3CookieComply
  :preferences="preferences"
  // ...
>
    <template v-slot:banner-text="{ title, description }">
        <h3>{{ title }}</h3>
  
        <p>
          {{ description }}
        </p>
    </template>
    
    <template v-slot:banner-actions="{ onAccept, onPreferences }">
        <button v-on:click="onAccept">Preferences</button>
          
        <button v-on:click="onPreferences">Accept All</button>
    </template>
        
    <!-- Replace whole modal header -->
    <template v-slot:modal-header="{ modalTitle, onClose }">
        <header>
            <h3>{{ modalTitleLabel }} | <button v-on:click="onClose">X</button></h3>
        </header>
    </template>
    
    <!-- Replace modal title only -->
    <template v-slot:modal-title="{ modalTitle }">
        <h2>Make your decisions</h2>        
    </template>
    
    <!-- Replace modal header close button only -->
    <template v-slot:modal-close-button="{ onClose }">
        <button v-on:click="onClose">X</button>         
    </template>
    
    <!-- Replace whole modal body -->
    <!-- onToggle excepts { value: string value of the preference, isEnabled: boolean } -->
    <template v-slot:modal-content="{ preferences, onToggle }">
        <main>
            <div v-for="(preference, index) in preferences" v-bind:key="index">
                <h5>{{ preference.title }}</h5>
            </div>
        </main>        
    </template>
    
    <!-- Replace modal preferences item only -->
    <!-- onToggle excepts { value: string value of the preference, isEnabled: boolean } -->
    <template v-slot:modal-preference-item="{ preference, index, onToggle }">
        <h5>{{ preference.title }}</h5>        
    </template>
       
    <template v-slot:modal-footer="{ onAccept, onDecline, onSave, hasOnlyRequired }">              
        <button v-on:click="onDecline" v-if="!hasOnlyRequired">Decline All</button>    
            
        <button v-on:click="onAccept">Accept All</button>
            
        <button v-on:click="onSave" v-if="!hasOnlyRequired">Save</button>               
    </template>
</Vue3CookieComply>
```
:::

Note that all slots are scoped slots so you can have access to the values and callbacks.
