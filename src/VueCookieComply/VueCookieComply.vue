<script setup>
import { computed, onMounted, ref } from 'vue'

import CookieToggle from './components/CookieToggle.vue'
import CookieButton from './components/CookieButton.vue'

const emit = defineEmits([
  'on-accept-all',
  'on-decline-all',
  'on-save-preferences'
])

const props = defineProps({
  bannerTitle: {
    type: String,
    default: 'Cookie settings'
  },
  bannerDescription: {
    type: String,
    default:
      'We use cookies and similar technologies to help personalize content and offer a better experience. You can opt to customize them by clicking the preferences button.'
  },
  preferencesBtnLabel: {
    type: String,
    default: 'Preferences'
  },
  acceptAllBtnLabel: {
    type: String,
    default: 'Accept All'
  },
  declineAllBtnLabel: {
    type: String,
    default: 'Decline All'
  },
  savePreferencesBtnLabel: {
    type: String,
    default: 'Save'
  },
  modalTitle: {
    type: String,
    default: 'Your cookie settings'
  },
  preferences: {
    type: Array,
    default: () => []
  },
  target: {
    type: String,
    default: 'body'
  },
  bannerBackgroundColor: {
    type: [String, Array],
    default: () => ['bg-gray-200', 'dark:bg-gray-800']
  },
  bannerTextColor: {
    type: [String, Array],
    default: () => ['text-gray-800', 'dark:text-gray-200']
  },
  bannerDescriptionTextColor: {
    type: [String, Array],
    default: () => ['text-gray-600', 'dark:text-gray-400']
  },
  modalMaxWidth: {
    type: String,
    default: 'xl'
  },
  bannerMaxWidth: {
    type: String,
    default: '5xl'
  }
})

const showBanner = ref(true)
const showModal = ref(false)
const checkedValues = ref([])

const modalMaxWidthClass = computed(() => {
  return {
    xs: 'sm:max-w-xs',
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
    '3xl': 'sm:max-w-3xl',
    '4xl': 'sm:max-w-4xl',
    '5xl': 'sm:max-w-5xl',
    '6xl': 'sm:max-w-6xl',
    '7xl': 'sm:max-w-7xl'
  }[props.modalMaxWidth]
})

const bannerMaxWidthClass = computed(() => {
  return {
    xs: 'sm:max-w-xs',
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
    '3xl': 'sm:max-w-3xl',
    '4xl': 'sm:max-w-4xl',
    '5xl': 'sm:max-w-5xl',
    '6xl': 'sm:max-w-6xl',
    '7xl': 'sm:max-w-7xl'
  }[props.bannerMaxWidth]
})

const requiredCookies = computed(() => {
  return props.preferences.map((preference) =>
    preference.items.map((item) => (item.isRequired ? item.value : null))
  ).flat().filter((n) => n)
})

const allCookies = computed(() => {
  return props.preferences.map((preference) => preference.items.map((item) => item.value)).flat().filter((n) => n)
})

const hasOnlyRequiredCookies = computed(() => {
  return requiredCookies.value.length === props.preferences.length
})

onMounted(() => {
  if (localStorage.getItem('cookie-comply')) {
    showBanner.value = false
  }
})

const handleAcceptAll = () => {
  showBanner.value = false
  showModal.value = false

  localStorage.setItem('cookie-comply', JSON.stringify(allCookies.value))

  emit('on-accept-all', allCookies.value)
}

const handleDeclineAll = () => {
  showBanner.value = false
  showModal.value = false

  localStorage.setItem('cookie-comply', JSON.stringify(requiredCookies.value))

  emit('on-decline-all', requiredCookies.value)
}

const handleSave = () => {
  showBanner.value = false
  showModal.value = false

  localStorage.setItem('cookie-comply', JSON.stringify(checkedValues.value))

  emit('on-save-preferences', checkedValues.value)
}

const handlePreferences = () => {
  showModal.value = true
}

const handleModalClose = () => {
  showModal.value = false
}

const handleToggleUpdate = ({ value, isEnabled }) => {
  isEnabled
    ? checkedValues.value.push(value)
    : checkedValues.value.splice(checkedValues.value.indexOf(value), 1)
}
</script>

<template>
  <teleport :to="target">
    <aside
      v-if="showBanner"
      :class="[bannerBackgroundColor, bannerMaxWidthClass]"
      class="fixed px-6 py-4 bottom-0 left-0 right-0 sm:bottom-6 sm:left-16 sm:right-16 sm:rounded-md mx-auto"
    >
      <div
        :class="[bannerTextColor]"
        class="flex items-center justify-between space-x-6"
      >
        <div>
          <slot :description="bannerDescription" :title="bannerTitle" name="banner-text">
            <h3 class="font-semibold">{{ bannerTitle }}</h3>

            <p :class="[bannerDescriptionTextColor]" class="text-sm">
              {{ bannerDescription }}
            </p>
          </slot>
        </div>

        <div
          class="ml-auto flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"
        >
          <slot
            :on-accept="handleAcceptAll"
            :on-preferences="handlePreferences"
            name="banner-actions"
          >
            <CookieButton
              class="whitespace-nowrap"
              color="secondary"
              @click="handlePreferences"
            >
              {{ preferencesBtnLabel }}
            </CookieButton>

            <CookieButton class="whitespace-nowrap" color="success" @click="handleAcceptAll">
              {{ acceptAllBtnLabel }}
            </CookieButton>
          </slot>
        </div>
      </div>

      <transition leave-active-class="duration-200">
        <div
          v-show="showModal"
          class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-[1000] flex items-center"
        >
          <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-show="showModal"
              class="fixed inset-0 transform transition-all"
            >
              <div
                class="absolute inset-0 bg-gray-500 opacity-90 dark:bg-gray-900 dark:opacity-80"
              />
            </div>
          </transition>

          <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              v-show="showModal"
              :class="modalMaxWidthClass"
              class="mb-6 shadow-xl transform transition-all sm:w-full sm:mx-auto"
            >
              <div class="relative bg-white dark:bg-gray-800 rounded-lg">
                <slot
                  :modal-title="modalTitle"
                  :on-close="handleModalClose"
                  name="modal-header"
                >
                  <header class="p-6 bg-gray-50 dark:bg-gray-700 rounded-t-lg">
                    <slot name="modal-title">
                      <h3
                        class="text-xl font-medium text-gray-900 dark:text-white"
                      >
                        {{ modalTitle }}
                      </h3>
                    </slot>

                    <slot :on-close="handleModalClose" name="modal-close-button">
                      <CookieButton
                        class="absolute top-6 right-6"
                        color="danger-o"
                        padding-classes="p-1.5"
                        @click="handleModalClose"
                      >
                        <svg
                          class="h-[12px] w-[12px]"
                          viewPort="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            stroke="currentColor"
                            stroke-width="2"
                            x1="1"
                            x2="11"
                            y1="11"
                            y2="1"
                          />

                          <line
                            stroke="currentColor"
                            stroke-width="2"
                            x1="1"
                            x2="11"
                            y1="1"
                            y2="11"
                          />
                        </svg>
                      </CookieButton>
                    </slot>
                  </header>
                </slot>

                <slot
                  :preferences="preferences"
                  :on-toggle="handleToggleUpdate"
                  name="modal-body"
                >
                  <main class="px-6 overflow-y-auto py-6">
                    <div v-for="(preference, index) in preferences" :key="index">
                      <slot
                        :index="index"
                        :preference="preference"
                        :on-toggle="handleToggleUpdate"
                        name="modal-preference-item"
                      >
                        <h5
                          class="text-semibold text-gray-800 dark:text-gray-200"
                        >
                          {{ preference.title }}
                        </h5>

                        <p class="text-sm text-gray-600 dark:text-gray-400">
                          {{ preference.description }}
                        </p>

                        <div class="space-y-2 mt-6">
                          <div
                            v-for="item in preference.items"
                            :key="item.value"
                            class="flex justify-between items-center"
                          >
                            <h6 class="text-gray-800 dark:text-gray-200">
                              {{ item.label }}
                            </h6>

                            <CookieToggle
                              :is-required="item.isRequired"
                              :value="item.value"
                              @update:checkbox="handleToggleUpdate"
                            ></CookieToggle>
                          </div>
                        </div>

                        <hr
                          v-if="index !== preferences.length - 1"
                          class="border-t border-gray-100 dark:border-gray-700 my-6"
                        />
                      </slot>
                    </div>
                  </main>
                </slot>

                <slot
                  :has-only-required="hasOnlyRequiredCookies"
                  :on-accept="handleAcceptAll"
                  :on-decline="handleDeclineAll"
                  :on-save="handleSave"
                  name="modal-footer"
                >
                  <footer class="p-6 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
                    <div class="flex items-center justify-end space-x-3">
                      <div
                        :class="{
                          'mr-auto': !hasOnlyRequiredCookies,
                          'ml-auto': hasOnlyRequiredCookies,
                        }"
                        class="space-x-3"
                      >
                        <CookieButton
                          v-if="!hasOnlyRequiredCookies"
                          class="whitespace-nowrap"
                          color="danger"
                          @click="handleDeclineAll"
                        >
                          {{ declineAllBtnLabel }}
                        </CookieButton>

                        <CookieButton
                          class="whitespace-nowrap"
                          color="success"
                          @click="handleAcceptAll"
                        >
                          {{ acceptAllBtnLabel }}
                        </CookieButton>
                      </div>

                      <CookieButton
                        v-if="!hasOnlyRequiredCookies"
                        class="whitespace-nowrap"
                        @click="handleSave"
                      >
                        {{ savePreferencesBtnLabel }}
                      </CookieButton>
                    </div>
                  </footer>
                </slot>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </aside>
  </teleport>
</template>
