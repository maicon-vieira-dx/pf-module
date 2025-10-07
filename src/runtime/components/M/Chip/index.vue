<template>
    <v-chip v-bind="props">
        <template v-for="name in slots" :key="name">
            <slot :name="name" v-if="$slots[name]"></slot>
        </template>
    </v-chip>
</template>

<script lang="ts" setup>
import { IMChip } from '@/types/MChip';

const slots = ["append", "close", "default", "filter", "label", "prepend"];

const props = withDefaults(defineProps<IMChip>(), ({
  density: 'default',
  ripple: true,
  size: 'default',
  tag: 'span',
  variant: 'tonal'
}))
</script>