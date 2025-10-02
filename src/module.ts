import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'maicon-components-module',
    configKey: 'maiconComponentsModule',
  },
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    addComponentsDir({
      path: resolver.resolve('runtime/components/M'),
      prefix: 'M',
    });

    _nuxt.options.alias["@/types"] = resolver.resolve("runtime/types");
    _nuxt.options.alias["@/components"] = resolver.resolve("runtime/components");
    _nuxt.options.css.push(resolver.resolve('runtime/assets/css/main.css'))
  },
})
