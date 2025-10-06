<script lang="ts" setup>
import type { IMCard } from '@/types/MCard';

const slots = ["image", "prepend", "default", "title", "subtitle", "text", "loader", "append", "actions", "item"];
const props = withDefaults(defineProps<IMCard>(), {
    elevation: 1,
    tag: 'div',
    density: 'default'
});
</script>

<template>
    <v-card v-bind="props" :class="`v-card-${variant}`">
    <template v-for="name in slots" :key="name">
      <slot :name="name" v-if="$slots[name]" />
    </template>
    <template v-if="$slots.loader" #loader="{ color, isActive }">
      <slot name="loader" :color="color" :isActive="isActive" />
    </template>
  </v-card>
</template>