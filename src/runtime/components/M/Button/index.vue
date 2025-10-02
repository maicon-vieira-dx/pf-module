<script lang="ts" setup>
import type { IMButton } from '@/types/MButton';

const props = withDefaults(defineProps<IMButton>(), {
  density: 'default',
  tag: 'button',
  variant: 'flat'
});
</script>

<template>
  <v-skeleton-loader type="button" v-if="isLoading">
  </v-skeleton-loader>
  <v-btn v-else v-bind="props" :class="`btn-${variant}`">
    <slot></slot>
  </v-btn>
</template>