<template>
  <v-container>
    <v-row class="text-right">
      <v-col>
        <label for="selectedLang">Language: </label>
        <select id="selectedLang" :value="selectedLang" @change="handleChange">
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12" class="my-3">
        <v-row justify="center" no-gutters>
          <v-col
            v-for="(next, i) in frameworksLogos"
            :key="i"
            md="2"
            :href="next.logo"
          >
            <v-img :src="next.logo" contain height="100" />
          </v-col>
        </v-row>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ $t("components.helloworld.heading") }}
        </h1>

        <p class="subheading font-weight-regular">
          {{ $t("components.helloworld.sub-heading") }}
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">
          {{ $t("components.helloworld.frameworks-heading") }}
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in frameworks"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_new"
          >
            {{ $t(`components.helloworld.frameworks[${i}]`) }}
          </a>
        </v-row>
      </v-col>
      <v-col class="mb-6" cols="12">
        <h3 class="headline font-weight-bold mb-6">
          {{ $t("components.helloworld.tools-heading") }}
        </h3>

        <v-row justify="center">
          <a
            v-for="(next, i) in tools"
            :key="i"
            :href="next.href"
            class="subheading mx-4"
            target="_new"
          >
            <v-img
              v-if="next.logo != undefined"
              :src="next.logo"
              contain
              class="mb-2"
              height="50"
            />
            {{ next.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import { getModule } from "vuex-module-decorators"
  import Language from "../store/Modules/Language"
  const langModule = getModule(Language)

  console.log(langModule)
  console.log(langModule.language)

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
        selectedLang: langModule.language,
        options: [
          { text: "English", value: "en" },
          { text: "हिन्दी", value: "hn" },
        ],
        frameworks: [
          {
            text: "Electron",
            href: "https://www.electronjs.org/",
            logo: "/assets/electron.svg",
          },
          {
            text: "Vue3",
            href: "https://vuejs.org/",
            logo: "/assets/vue.svg",
          },
          {
            text: "Vite2",
            href: "https://vitejs.dev/",
            logo: "/assets/vite.svg",
          },
          {
            text: "Vuex4",
            href: "https://vuex.vuejs.org/",
          },
          {
            text: "Vuetify3",
            href: "https://vuetifyjs.com/",
            logo: "/assets/vuetify.svg",
          },
        ],
        tools: [
          {
            text: "Vitest",
            href: "https://vitest.dev/",
            logo: "/assets/vitest.svg",
          },
          {
            text: "Cypress",
            href: "https://www.cypress.io/",
            logo: "/assets/cypress.png",
          },
          {
            text: "Github Actions",
            href: "https://docs.github.com/en/actions",
            logo: "/assets/github-actions.png",
          },
          {
            text: "JsDom",
            href: "https://github.com/jsdom/jsdom",
            logo: "/assets/jsdom.svg",
          },
          {
            text: "Typescript",
            href: "https://www.typescriptlang.org/",
            logo: "/assets/typescript.svg",
          },
          {
            text: "Prettier",
            href: "https://prettier.io/",
            logo: "/assets/prettier.png",
          },
          {
            text: "ESLint",
            href: "https://eslint.org/",
            logo: "/assets/eslint.svg",
          },
        ],
      }
    },
    computed: {
      frameworksLogos() {
        return this.frameworks.filter((f) => f.logo !== undefined)
      },
    },
    methods: {
      handleChange(event: { target: { value: "" } }) {
        const value = event.target.value
        this.selectedLang = value
        langModule.setLanguage(value)
        this.$i18n.locale = value
      },
    },
  })
</script>
