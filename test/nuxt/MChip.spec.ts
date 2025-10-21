import { mount, shallowMount } from "@vue/test-utils";
import MChip from "@/components/M/Chip/index.vue"
import { describe, it, expect } from "vitest";
import { IMChip } from "@/types/MChip";

describe("Default", () => {
  it("should exist", () => {
    const wrapper = shallowMount(MChip);
    expect(wrapper.exists()).toBe(true);
  });

  it.each([
    ["density", "default"],
    ["ripple",  true,],
    ["size", "default"],
    ["tag", "span"],
    ["variant", "tonal"],
    ["rounded",  true,]
  ] as Array<[keyof IMChip, string | boolean]>)("%s should contain default", (prop: any, value: string | boolean) => {
    const wrapper = shallowMount(MChip);
    expect(wrapper.props(prop)).toBe(value)
  });
});

describe("Variant", () => {
    it.each(
        ["flat", "text", "elevated", "tonal", "outlined","plain"] as IMChip["variant"][]
    )("% should haver correct variant", (variant: IMChip["variant"]) => {
        const wrapper = shallowMount(MChip, { props: { variant }});
        expect(wrapper.props("variant")).toBe(variant);
    });
});

describe("Density", () => {
    it.each(["default", "comfortable", "compact"] as IMChip["density"][])(
        "%s should have correct density", (density: IMChip["density"]) => {
            const wrapper = shallowMount(MChip, { props: { density }});
            expect(wrapper.props("density")).toBe(density);
        }
    );
});

describe("Elevation", () => {
    it.each(Array.from({ length: 24 }, (_,i) => [i + 1]))("%s should have correct elevation", (elevation: number) => {
        const wrapper = shallowMount(MChip, { props: { elevation }});
        expect(wrapper.props("elevation")).toBe(elevation);
    })
});

describe("Slots", () => {
    it("should contain correct props", () => {
        const wrapper = mount(MChip, {
            slots: {
                append: "<v-icon>mdi-loupe</v-icon>",
                prepend: "<v-icon>mdi-magnify</v-icon>",
                close: "<v-icon>mdi-close</v-icon>",
                default: "Click here",
                filter: "<p>Filter slot</p>",
                label: "Label to MChip"
            }
        });

        expect(wrapper.html()).toContain("mdi-loupe");
        expect(wrapper.html()).toContain("mdi-magnify");
        expect(wrapper.html()).toContain("mdi-close");
        expect(wrapper.html()).toContain("Click here");
        expect(wrapper.html()).toContain("Filter slot");
        expect(wrapper.html()).toContain("Label to MChip");
    })
});

describe("Props", () => {
    it.each([
        ["closable", true],
        ["disabled", true],
        ["draggable", true],
        ["filter", true],
        ["label", true],
        ["link", true],
        ["pill", true],
        ["tile", true],
        ["modelValue", true],
        ["exact", true],
        ["replace", true],
        ["baseColor", "primary"],
        ["color", "success"],
        ["theme", "dark"],
        ["activeClass", "active-chip"],
        ["selectedClass", "selected-chip"],
        ["size", "large"],
        ["density", "comfortable"],
        ["rounded", "xl"],
        ["elevation", "4"],
        ["text", "Chip Text"],
        ["closeLabel", "Fechar"],
        ["href", "https://example.com"],
        ["to", "/home"],
        ["appendIcon", "mdi-plus"],
        ["prependIcon", "mdi-check"],
        ["closeIcon", "mdi-close-circle"],
        ["filterIcon", "mdi-filter-variant"],
        ["appendAvatar", "/path/to/avatar.jpg"],
        ["prependAvatar", "https://example.com/avatar.png"],
        ["variant", "flat"],
        ["ripple", true],
        ["tag", "div"],
        ["value", 42]
    ] as Array<[keyof IMChip, string | boolean | number]>)("%s should have correct in prop %s", (name: keyof IMChip, value: string | boolean | number) => {
        const wrapper = shallowMount(MChip, { props: { [name]: value }});
        expect(wrapper.props(name)).toBe(value);
    });
});

