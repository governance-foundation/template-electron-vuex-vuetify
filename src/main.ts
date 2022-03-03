import { createApp } from "vue"
import i18n from "./i18n"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import { loadFonts } from "./plugins/webfontloader"
import "vuetify/styles"

loadFonts()

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(store)
app.use(vuetify)
app.mount("#app")
