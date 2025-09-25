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