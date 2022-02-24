import { Module, VuexModule, Mutation } from "vuex-module-decorators"
import store from "../index"
@Module({
  name: "Language",
  store: store,
  dynamic: true,
  preserveState: localStorage.getItem("vuex") !== null,
})
export default class Language extends VuexModule {
  language = "en"
  @Mutation
  setLanguage(text: string) {
    this.language = text
  }
}
