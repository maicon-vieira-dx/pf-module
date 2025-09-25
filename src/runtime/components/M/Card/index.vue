<template>
    <v-card v-bind="{ appendAvatar, appendIcon, border, color, density, disabled, elevation, exact, flat, height, hover, href, image, link, loading, location, maxHeight, maxWidth, minHeight, minWidth, position, prependAvatar, prependIcon, replace, ripple, rounded, subtitle, tag, text, theme, tile, title, width }" :class="`v-card-${variant}`">
        <template v-if="$slots.image" #image>
            <slot name="image" />
        </template>
        <template v-if="$slots.prepend" #prepend>
            <slot name="prepend" />
        </template>
        <template v-if="$slots.default" #default>
            <slot />
        </template>
        <template v-if="$slots.title" #title>
            <slot name="title" />
        </template>
        <template v-if="$slots.subtitle" #subtitle>
            <slot name="subtitle" />
        </template>
        <template v-if="$slots.text" #text>
            <slot name="text" />
        </template>
        <template v-if="$slots.loader" #loader="{ color, isActive }">
            <slot name="loader" :color="color" :isActive="isActive" />
        </template>
        <template v-if="$slots.append" #append>
            <slot name="append" />
        </template>
        <template v-if="$slots.actions" #actions>
            <slot name="actions" />
        </template>
        <template v-if="$slots.item" #item>
            <slot name="item" />
        </template>
    </v-card>
</template>

<script lang="ts" setup>
defineProps({
    appendAvatar: String,
    appendIcon: [String, Array, Function, Object],
    border: [String, Number, Boolean],
    color: String,
    density: {
        type: String,
        validator: (value: string) => ["default","comfortable","compact"].includes(value)
    },
    disabled: Boolean,
    elevation: {
        type: [String, Number],
        default: 0,
    },
    exact: Boolean,
    flat: Boolean,
    height: [String, Number],
    hover: Boolean,
    href: String,
    image: String,
    link: Boolean,
    loading: [String, Boolean],
    location: String,
    maxHeight: [String, Number],
    maxWidth: [String, Number],
    minHeight: [String, Number],
    minWidth: [String, Number],
    position: String,
    prependAvatar: String,
    prependIcon: [String, Array, Function, Object],
    replace: String,
    ripple: [Boolean, Object],
    rounded: [String, Number, Boolean],
    subtitle: [String, Number],
    tag: {
        type: String,
        default: 'div',
    },
    text: [String, Number],
    theme: String,
    tile: Boolean,
    title: [String, Number],
    variant: {
        type: String,
        validator: (value: string) => ['flat', 'tonal', 'outlined', 'plain'].includes(value),
    },
    width: [String, Number]
});
</script>