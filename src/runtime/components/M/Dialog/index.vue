<script lang="ts" setup>
defineProps({
  absolute: Boolean,
  activator: [String, Object],
  activatorProps: Object,
  attach: [String, Boolean],
  closeDelay: [String, Number],
  closeOnBack: {
    type: Boolean,
    default: true,
  },
  closeOnContentClick: Boolean,
  contained: Boolean,
  disabled: Boolean,
  eager: Boolean,
  fullscreen: Boolean,
  height: [String, Number],
  location: {
    type: String,
    default: 'bottom',
  },
  locationStrategy: {
    type: [String, Function],
    default: 'static',
  },
  maxHeight: [String, Number],
  maxWidth: [String, Number],
  minHeight: [String, Number],
  minWidth: [String, Number],
  modelValue: Boolean,
  noClickAnimation: Boolean,
  offset: [String, Number, Array],
  opacity: [String, Number],
  openDelay: [String, Number],
  openOnClick: {
    type: Boolean,
    default: true,
  },
  openOnFocus: Boolean,
  openOnHover: Boolean,
  origin: {
    type: [String, Object],
    default: 'center center',
  },
  persistent: Boolean,
  retainFocus: {
    type: Boolean,
    default: true,
  },
  scrim: {
    type: [String, Boolean],
    default: true,
  },
  scrollable: Boolean,
  scrollStrategy: {
    type: [String, Function],
    default: 'block',
  },
  target: [String, Object, Array],
  theme: String,
  width: [String, Number],
  zIndex: {
    type: [String, Number],
    default: 2400,
  }
});
</script>

<template>
    <v-dialog v-bind="$props">
        <template v-slot:activator="{ props: activatorProps }">
            <slot name="activator" v-if="$slots.activator" :props="activatorProps"></slot>
            <TeckButton v-bind="activatorProps" v-else>Clique Aqui!</TeckButton>
        </template>
        <template v-slot:default="{ isActive }">
            <TeckCard v-bind="$attrs">
                <template #append>
                  <v-icon @click="isActive.value = false">mdi-close</v-icon>
                </template>
                <template v-if="!$attrs.title" #title>
                    <slot name="title"></slot>
                </template>
                <template v-if="!$attrs.text" #text>
                    <slot></slot>
                </template>
                <template v-if="$slots.actions" #actions>
                  <slot name="actions" :isActive="isActive"></slot>
                </template>
            </TeckCard>
        </template>
    </v-dialog>
</template>