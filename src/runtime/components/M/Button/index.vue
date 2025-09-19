<template>
  <v-skeleton-loader type="button" :loading="isLoading">
    <v-btn v-bind="{ active, appendIcon, baseColor, block, border, color, density, disabled, elevation, exact, flat, height, href, icon, loading, location, maxHeight, maxWidth, minHeight, minWidth, position, prependIcon, readonly, replace, ripple, selectedClass, size, slim, stacked, symbol, tag, text, theme, tile, to, value, width }" :class="`btn-${variant}`">
      <slot></slot>
    </v-btn>
  </v-skeleton-loader>
</template>

<script setup>
defineProps({
  active: Boolean,
  activeColor: String,
  appendIcon: [String, Array, Function, Object],
  baseColor: String,
  block: Boolean,
  border: [String, Number, Boolean],
  color: String,
  density: {
    type: String,
    default: 'default',
    validator: value => ['default', 'comfortable', 'compact'].includes(value),
  },
  disabled: Boolean,
  elevation: [String, Number],
  exact: Boolean,
  flat: Boolean,
  height: [String, Number],
  href: String,
  icon: [Boolean, String, Array, Function, Object],
  loading: [String, Boolean],
  location: String,
  maxHeight: [String, Number],
  maxWidth: [String, Number],
  minHeight: [String, Number],
  minWidth: [String, Number],
  position: {
    type: String,
    validator: value => ['static', 'relative', 'fixed', 'absolute', 'sticky'].includes(value),
  },
  prependIcon: [String, Array, Function, Object],
  readonly: Boolean,
  replace: Boolean,
  ripple: [Boolean, Object],
  selectedClass: String,
  size: [String, Number],
  slim: Boolean,
  stacked: Boolean,
  symbol: [String, Number, Symbol, Object],
  tag: {
    type: String,
    default: 'button',
  },
  text: String,
  theme: String,
  tile: Boolean,
  to: [String, Object],
  value: [String, Number, Boolean, Object, Array],
  variant: {
    type: String,
    default: 'flat',
    validator: value => ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'].includes(value),
  },
  width: [String, Number],
  isLoading: {
    type: Boolean,
    default: false,
  },
})
</script>
