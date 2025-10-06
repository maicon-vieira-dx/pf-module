<script lang="ts" setup>
import type { IMDialog } from "@/types/MDialog";
import { computed, useAttrs } from "vue";

const slots = ["default", "append", "title", "text", "actions"];
const props = withDefaults(defineProps<IMDialog>(), {
  closeOnBack: true,
  location: "top",
  locationStrategy: "static",
  openOnClick: true,
  origin: "center center",
  retainFocus: true,
  scrim: true,
  scrollStrategy: "block",
  zIndex: 2400
})

const allAttrs = useAttrs();
const buttonAttrs = computed(() => {
  const attrs: Record<string, any> = {};
  for (const key in allAttrs) {
    if (key.startsWith('button')) {
      const cleanKey = key.replace('button:', '').toLowerCase();
      attrs[cleanKey] = allAttrs[key];
    }
  }
  return attrs;
});
</script>

<template>
    <v-dialog v-bind="props">
        <template v-slot:activator="{ props: activatorProps }">
            <slot name="activator" v-if="$slots.activator" :props="activatorProps"></slot>
            <MButton v-bind="{ ...buttonAttrs, ...activatorProps }" v-else></MButton>
        </template>
        <template v-slot:default="{ isActive }">
            <MCard v-bind="$attrs">
                <template v-for="name in slots" :key="name" v-slot:[name]>
                    <slot :name="name" v-bind="{ isActive }" v-if="$slots[name]"></slot>
                </template>
            </MCard>
        </template>
    </v-dialog>
</template>