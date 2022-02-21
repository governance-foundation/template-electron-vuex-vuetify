import { beforeAll } from "vitest"
;(global as any).CSS = { supports: () => false }

beforeAll(() => {
  console.log("beforeAll")
  console.log("CSS.support:" + CSS.supports("selector(:focus-visible)"))
})
