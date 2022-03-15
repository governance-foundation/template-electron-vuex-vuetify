import { describe, it, expect } from "vitest"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import i18n from "@/i18n"

import { mount, shallowMount } from "@vue/test-utils"
import HelloWorld from "@/components/HelloWorld.vue"

export const waitFor = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms || 0))
}

describe("HelloWorld", () => {
  const vuetify = createVuetify({ components, directives })

  it("renders properly in english", () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [vuetify, i18n],
      },
    })
    expect(wrapper.text()).toContain("Welcome to Vue3")
  })

  it("renders properly in hindi", async () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [vuetify, i18n],
      },
    })

    const langsel = wrapper.find("select")
    langsel.element.value = "hi"
    await langsel.trigger("change")

    expect(wrapper.text()).toContain(
      "Vue3 + Vite + Vuetify इलेक्ट्रॉन ऐप में आपका स्वागत है।"
    )
  })
})
