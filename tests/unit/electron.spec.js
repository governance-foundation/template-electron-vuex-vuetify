/**
 * @jest-environment node
 */
import spectron from "spectron";
import { testWithSpectron } from "vue-cli-plugin-electron-builder";

test("Window Loads Properly", async () => {
  // Wait for dev server to start
  const { app, stopServe } = await testWithSpectron(spectron, {
    chromeDriverArgs: [
      // "--remote-debugging-port=9222",
      // "--headless",
      // "--enable-automation",
      // "--no-sandbox",
      // "--disable-popup-blocking",
      // "--user-data-dir=./.chrome-user-data"
    ]
  });
  const win = app.browserWindow;
  const client = app.client;

  //wait for window to appear
  await client.waitUntilWindowLoaded();

  // Window was created
  expect(await client.getWindowCount()).toBe(1);
  // It is not minimized
  expect(await win.isMinimized()).toBe(false);
  // Window is visible
  expect(await win.isVisible()).toBe(true);
  // Size is correct
  const { width, height } = await win.getBounds();
  expect(width).toBeGreaterThan(0);
  expect(height).toBeGreaterThan(0);

  // App is loaded properly
  expect((await client.$("h1=Welcome to Vuetify")) != undefined).toBe(true);

  await stopServe();
});
