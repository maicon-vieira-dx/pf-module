<script lang="ts" setup>
import type { IMDialog } from '@/types/MDialog';

const props = withDefaults(defineProps<IMDialog>(), {
  closeOnBack: true,
  location: 'top',
  locationStrategy: 'static',
  openOnClick: true,
  origin: 'center center',
  retainFocus: true,
  scrim: true,
  scrollStrategy: 'block',
  zIndex: 2400
})
</script>

<template>
    <v-dialog v-bind="props">
        <template v-slot:activator="{ props: activatorProps }">
            <slot name="activator" v-if="$slots.activator" :props="activatorProps"></slot>
            <MButton v-bind="activatorProps" v-else>Clique Aqui!</MButton>
        </template>
        <template v-slot:default="{ isActive }">
            <MCard v-bind="$attrs">
                <template v-if="!$attrs.append" #append>
                  <slot name="append"></slot>
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
            </MCard>
        </template>
    </v-dialog>
</template>