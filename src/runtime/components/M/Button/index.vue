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
    <template v-if="!$props.text" #default>
      <slot></slot>
    </template>
  </v-btn>
</template>