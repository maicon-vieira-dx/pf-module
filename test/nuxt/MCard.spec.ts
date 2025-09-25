import MCard from "../../src/runtime/components/M/Card/index.vue";
import { mount } from "@vue/test-utils";
import { describe } from "node:test";
import { expect, it } from "vitest";

describe("Default", () => {
  it("should exist", () => {
    const wrapper = mount(MCard);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).contains("v-card");
  });

  it("should contain default elevation", () => {
    const wrapper = mount(MCard);
    expect(wrapper.classes()).contains("elevation-0");
  });

  it("should contain default variant", () => {
    const wrapper = mount(MCard);
    expect(wrapper.classes()).contains("v-card-undefined");
  });
});

describe("Variant", () => {
  it.each(["flat", "tonal", "plain", "outlined"])(
    "%s should have correct variant",
    (variant: string) => {
      const wrapper = mount(MCard, { props: { variant } });
      expect(wrapper.classes()).contains(`v-card-${variant}`);
    }
  );
});

describe("Density", () => {
  it.each(["default", "comfortable", "compact"])(
    "%s should have correct density",
    (density: string) => {
      const wrapper = mount(MCard, { props: { density } });
      expect(wrapper.classes()).contains(`v-card--density-${density}`);
    }
  );
});

describe("Elevation", () => {
  it.each(Array.from({ length: 24 }, (_, i) => [i + 1]))(
    "%s should have correct elevation",
    (elevation: number) => {
      const wrapper = mount(MCard, { props: { elevation } });
      expect(wrapper.classes()).contains(`elevation-${elevation}`);
    }
  );
});
