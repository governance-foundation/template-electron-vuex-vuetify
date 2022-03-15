// vitest/setup.ts

export async function setup() {
  // global.CSS = {
  //   supports: (str: string) => false,
  //   escape: (str: string) => str,
  // };

  console.log("vitest globalSetup.")
  // console.log("CSS.support:" + CSS.supports("selector(:focus-visible)"));
}

export async function teardown() {
  console.log("vitest globalTeardown")
}
