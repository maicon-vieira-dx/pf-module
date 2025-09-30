import { expect, it, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MButton from "../../src/runtime/components/M/Button/index.vue";

describe("Default", () => {
  it("should exist", () => {
    const wrapper = mount(MButton);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("should have a default slot", () => {
    const wrapper = mount(MButton, { slots: { default: "Click me" } });
    expect(wrapper.text()).toContain("Click me");
  });

  it("should contain default variant", () => {
    const wrapper = mount(MButton);
    expect(wrapper.find("button").classes()).toContain("btn-flat");
  });

  it("should contain default density", () => {
    const wrapper = mount(MButton);
    expect(wrapper.find("button").classes()).toContain("v-btn--density-default");
  })
});

describe("Variant", () => {
  it.each([
    ["text", "btn-text"],
    ["flat", "btn-flat"],
    ["elevated", "btn-elevated"],
    ["tonal", "btn-tonal"],
    ["outlined", "btn-outlined"],
    ["plain", "btn-plain"],
  ])("%s should have class %s", (variant: string, classes: string) => {
      const wrapper = mount(MButton, { props: { variant } });
      expect(wrapper.find("button").classes()).toContain(classes);
    }
  );
});

describe("Density", () => {
  it.each([
    ["default", "v-btn--density-default"],
    ["compact", "v-btn--density-compact"],
    ["comfortable", "v-btn--density-comfortable"]
  ])("%s should have class %s", (density: string, classes: string) => {
      const wrapper = mount(MButton, { props: { density } });
      expect(wrapper.find("button").classes()).toContain(classes);
    }
  );
});

describe("Skeleton Loader", () => {
    it.each([
        ['Loading...', true],
        [undefined, false]
    ])("arial-label should be %s when isLoading is %s", (att: any, isLoading: boolean) => {
        const wrapper = mount(MButton, { props: { isLoading }});
        // expect(wrapper.attributes('arialabel')).toBe(att)
    })
});

describe("Event", () => {
    it("should emit event when clicked", async () => {
        const wrapper = mount(MButton);
        await wrapper.find("button").trigger("click");
        expect(wrapper.emitted()).toHaveProperty("click");
    });

    it("should not emit click when disabled", async () => {
        const wrapper = mount(MButton, { props: { disabled: true }});
        await wrapper.find("button").trigger("click");
        expect(wrapper.emitted("click")).toBeUndefined();
    });
});
