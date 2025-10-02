import MButton from '@/components/M/Button/index.vue';
import { expect, it, describe } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import type { IMButton } from '@/types/MButton';

describe("Default", () => {
  it("should exist", () => {
    const wrapper = shallowMount(MButton);
    expect(wrapper.exists()).toBe(true);
  });

  it("should have a default slot", () => {
    const wrapper = mount(MButton, { slots: { default: "Click me" } });
    expect(wrapper.text()).toContain("Click me");
  });

  it("should contain default variant", () => {
    const wrapper = shallowMount(MButton);
    expect(wrapper.classes()).toContain("btn-flat");
  });

  it("should contain default density", () => {
    const wrapper = shallowMount(MButton);
    expect(wrapper.props("density")).toBe('default');
  });
});

describe("Variant", () => {
  it.each(["text", "flat", "elevated", "tonal", "outlined", "plain"] as IMButton["variant"][])
  ("%s should have class %s", (variant) => {
      const wrapper = shallowMount(MButton, { props: { variant } });
      expect(wrapper.props("variant")).toBe(variant);
    }
  );
});

describe("Density", () => {
  it.each(["default","compact","comfortable"] as IMButton["density"][])
  ("%s should have class %s", (density) => {
      const wrapper = shallowMount(MButton, { props: { density } });
      expect(wrapper.props("density")).toBe(density);
    }
  );
});

describe("Skeleton Loader", () => {
    it.each([
        ["v-btn", false],
        ["v-skeleton-loader", true]
    ])("arial-label should be %s when isLoading is %s", (name: any, isLoading: boolean) => {
        const wrapper = mount(MButton, { props: { isLoading }});
        expect(wrapper.findComponent({ name }).exists()).toBe(true);
    })
});

describe("Event", () => {
    it("should emit event when clicked", async () => {
        const wrapper = mount(MButton);
        await wrapper.trigger("click");
        expect(wrapper.emitted()).toHaveProperty("click");
    });

    it("should not emit click when disabled", async () => {
        const wrapper = mount(MButton, { props: { disabled: true }});
        await wrapper.trigger("click");
        expect(wrapper.emitted("click")).toBeUndefined();
    });
});
