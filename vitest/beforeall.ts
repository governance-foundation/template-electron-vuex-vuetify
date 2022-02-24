import { beforeAll } from "vitest"

beforeAll(() => {
  console.log("beforeAll")
  global.CSS = {
    supports: (str: string) => false,
    escape: (str: string) => str,
  }
  console.log("CSS.support:" + CSS.supports("selector(:focus-visible)"))
})
