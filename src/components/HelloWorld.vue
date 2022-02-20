<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="my-3">
        <v-row justify="center" no-gutters>
          <v-col md="2">
            <v-img src="/assets/vue.svg" contain height="100" />
          </v-col>
          <v-col md="2">
            <v-img src="/assets/vite.svg" contain height="100" />
          </v-col>
          <v-col md="2">
            <v-img src="/assets/vuetify.svg" contain height="100" />
          </v-col>
          <v-col md="2">
            <v-img src="/assets/electron.svg" contain height="100" />
          </v-col>
        </v-row>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ title }}
        </h1>

        <p class="subheading font-weight-regular">
          Your template for making great apps.
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Frameworks</h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in frtameworks"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_new"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    title: {
      type: String,
      default: "Welcome to Your Vue.js App",
    },
  },
  data() {
    return {
      frtameworks: [
        {
          text: "Vue.js",
          href: "https://vuejs.org/",
        },
        {
          text: "Vite",
          href: "https://vitejs.dev/",
        },
        {
          text: "Vuetify",
          href: "https://vuetifyjs.com/",
        },
        {
          text: "Electron",
          href: "https://www.electronjs.org/",
        },
      ],
    };
  },
});
</script>
