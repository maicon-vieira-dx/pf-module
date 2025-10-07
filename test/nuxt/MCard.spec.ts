import MCard from "@/components/M/Card/index.vue";
import { IMCard } from "@/types/MCard";
import { mount, shallowMount } from "@vue/test-utils";
import { describe } from "node:test";
import { expect, it } from "vitest";

describe("Default", () => {
  it("should exist", () => {
    const wrapper = shallowMount(MCard);
    expect(wrapper.exists()).toBe(true);
  });

  it("should contain default elevation", () => {
    const wrapper = shallowMount(MCard);
    expect(wrapper.props("elevation")).toBe(1);
  });

  it("should contain default variant", () => {
    const wrapper = shallowMount(MCard);
    expect(wrapper.classes()).contains("v-card-undefined");
  });
});

describe("Variant", () => {
  it.each(["flat", "tonal", "plain", "outlined"] as IMCard["variant"][])(
    "%s should have correct variant",
    (variant: IMCard['variant']) => {
      const wrapper = shallowMount(MCard, { props: { variant } });
      expect(wrapper.classes()).contains(`v-card-${variant}`);
    }
  );
});

describe("Density", () => {
  it.each(["default", "comfortable", "compact"] as IMCard["density"][])(
    "%s should have correct density",
    (density: IMCard["density"]) => {
      const wrapper = shallowMount(MCard, { props: { density } });
      expect(wrapper.props("density")).toBe(density);
    }
  );
});

describe("Elevation", () => {
  it.each(Array.from({ length: 24 }, (_, i) => [i + 1]))(
    "%s should have correct elevation",
    (elevation: number) => {
      const wrapper = shallowMount(MCard, { props: { elevation } });
      expect(wrapper.props("elevation")).toBe(elevation);
    }
  );
});

describe("Slots", () => {
  it("should render multiple slots", () => {
    const wrapper = mount(MCard, {
      slots: {
        prepend: "<div class='prepend-content'>Ícone</div>",
        title: "<h3>Título Principal</h3>",
        subtitle: "<p>Subtítulo explicativo</p>",
        default: "Conteúdo principal do card com informações importantes",
        item: "<div>Item</div>",
        actions: `
            <div class="actions">
                <button class="btn-primary">Salvar</button>
                <button class="btn-secondary">Cancelar</button>
            </div>
        `,
      },
    });

    expect(wrapper.find(".prepend-content").text()).toBe("Ícone");
    expect(wrapper.find("h3").text()).toBe("Título Principal");
    expect(wrapper.find("p").text()).toBe("Subtítulo explicativo");
    expect(wrapper.text()).toContain("Conteúdo principal do card");
    expect(wrapper.html()).toContain("<div>Item</div>");
    expect(wrapper.find(".btn-primary").text()).toBe("Salvar");
    expect(wrapper.find(".btn-secondary").text()).toBe("Cancelar");
  });
});

describe("Props", () => {
  it.each([
    ["title", "Título personalizado"],
    ["subtitle", "Subtítulo personalizado"], 
    ["text", "Texto personalizado"],
    ["image", "https://example.com/image.jpg"],
    ["prependIcon", "mdi-home"],
    ["appendIcon", "mdi-check"],
    ["prependAvatar", "https://example.com/avatar.jpg"],
    ["appendAvatar", "https://example.com/avatar2.jpg"],
    ["disabled", true],
    ["loading", true],
    ["flat", true],
    ["hover", true],
    ["link", true],
    ["border", true],
    ["rounded", true],
    ["tile", true],
    ["exact", true],
    ["elevation", 2],
    ["height", "200px"],
    ["width", "300px"],
    ["maxHeight", "500px"],
    ["maxWidth", "400px"],
    ["minHeight", "100px"],
    ["minWidth", "200px"],
    ["color", "primary"],
    ["density", "compact"],
    ["tag", "section"],
    ["href", "https://example.com"]
  ] as Array<[keyof IMCard, string | boolean | number]>)("should render %s prop content", (name: keyof IMCard, content: string | boolean | number) => {
    const wrapper = shallowMount(MCard, { props: { [name]: content }});
    expect(wrapper.props(name)).toBe(content);
  });
});
