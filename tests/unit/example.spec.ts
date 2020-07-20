import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

//load Vuetify to use in tests
import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Welcome to Vuetify";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
