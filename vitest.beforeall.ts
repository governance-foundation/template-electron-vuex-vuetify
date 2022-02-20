import { beforeAll } from "vitest";

beforeAll(() => {
  console.log("beforeAll");
  global.CSS = {
    supports: (str: string) => true,
    escape: (str: string) => str,
  };
});
