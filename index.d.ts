/* eslint-disable @typescript-eslint/ban-types */
import {
  DefineComponent,
  ComputedOptions,
  ComponentOptionsMixin,
  MethodOptions,
} from 'vue';

type EmitEvents = 'on-accept-all' | 'on-decline-all' | 'on-save-preferences';

interface VueCookieComply {}

declare const _default: DefineComponent<
  VueCookieComply,
  {},
  {},
  ComputedOptions,
  MethodOptions,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  EmitEvents[],
  EmitEvents,
  VueCookieComply
>;

export default _default;
