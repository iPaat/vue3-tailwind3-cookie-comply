# Configuration via Props

```js-vue{2-14,20-22}
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
  }
]
</script>
  
<template>
    <div>
        <VueCookieComply
            :preferences="preferences"
            banner-title="Cookie Preferences"
            banner-max-width="7xl"
        ></VueCookieComply>
    </div>
</template>
```

## bannerTitle
* Type: `String`
* Default: `Cookie settings`

The cookie banner title.

## bannerDescription
* Type: `String`
* Default: `We use cookies and similar technologies to help personalize content and offer a better experience. You can opt to customize them by clicking the preferences button.`

The cookie banner description.

## preferencesBtnLabel
* Type: `String`
* Default: `Preferences`

Text from the button in the cookie banner that opens the modal for setting cookies preferences.

## acceptAllBtnLabel
* Type: `String`
* Default: `Accept All`

Text from the button in the cookie banner and modal that accepts all cookies.

## declineAllBtnLabel
* Type: `String`
* Default: `Decline All`

Text from the button in the modal that declines all cookies (expect those marked as required).

## savePreferencesBtnLabel
* Type: `String`
* Default: `Save`

Text from the button in the modal that saves the users cookie selection.

## modalTitle
* Type: `String`
* Default: `Your cookie settings`

The cookie settings modal title.

## preferences
* Type: `Array`
* Default: `[]`

An array of objects to display the options of cookie preferences in the modal. The user may or may not be able to interact with a preference option (see isRequired field):

```
[
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
  {
    title: 'Google Analytics (optional)',
    description: 'Google Analytics will keep track of the number of visitors to the website and the pages they visit.',
    items: [
      {
        label: '_ga',
        value: 'ga',
      },
    ],
  },
];
```

Each object is a section of the **preference's modal**. Each section consists of the following values:
* **title**: the cookie preference name to be displayed
* **description**: the cookie preference description to be displayed along with the title
* **items**: array of objects displaying the preference's options the user may interact with
  * **label**: name of the option
  * **value**: value to be dispatched once the user select this option
  * **isRequired**: if true, means the preference is obligatory and such cookies cannot be opted out

## target
* Type: `String`
* Default: `body`

A string in form of a css selector to target where the preference modal will be placed in your app. It is used for the Teleport feature of Vue 3. It defaults to body, but you can attach any selector such as `#app`, `.my-class`, etc...

## bannerBackgroundColor
* Type: `String, Array`
* Default: `['bg-gray-200', 'dark:bg-gray-800']`

Background color of the cookie banner. It can be a string or an array of strings.

## bannerTextColor
* Type: `String, Array`
* Default: `['text-gray-800', 'dark:text-gray-200']`

Text color of the cookie banner. It can be a string or an array of strings.

## bannerDescriptionTextColor
* Type: `String, Array`
* Default: `['text-gray-600', 'dark:text-gray-400']`

Text color of the cookie banner description. It can be a string or an array of strings.

## modalMaxWidth
* Type: `String`
* Default: `xl`
* Options: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`

Max width of the cookie preferences modal.

## bannerMaxWidth
* Type: `String`
* Default: `5xl`
* Options: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`

Max width of the cookie banner.
