<script lang="ts" setup>
import type { IMDialog } from "@/types/MDialog";

const slots = ["title", "text", "actions"];
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
</script>

<template>
    <v-dialog v-bind="props">
        <template v-slot:activator="{ props: activatorProps }">
            <slot name="activator" v-if="$slots.activator" :props="activatorProps"></slot>
            <MButton v-bind="activatorProps" v-else>Clique Aqui!</MButton>
        </template>
        <template v-slot:default="{ isActive }">
            <MCard v-bind="$attrs">
                <template #append>
                  <v-icon @click="isActive.value = false">mdi-close</v-icon>
                </template>
                <template v-for="name in slots" :key="name">
                    <slot v-bind="{ name }" v-if="$slots[name]"></slot>
                </template>
            </MCard>
        </template>
    </v-dialog>
</template>