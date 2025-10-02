<template>
  <v-skeleton-loader type="button" v-if="true">
  </v-skeleton-loader>
  <v-btn v-else v-bind="props" :class="`btn-${variant}`">
    <slot></slot>
  </v-btn>
</template>

<script lang="ts" setup>
import type { MButton } from '@/types/MButton';

const props = withDefaults(defineProps<MButton>(), {
  density: 'default',
  tag: 'button',
  variant: 'flat',
  isLoading: false
});

</script>