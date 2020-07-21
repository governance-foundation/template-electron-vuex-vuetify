/**
 * @jest-environment node
 */
import spectron from "spectron";
import { testWithSpectron } from "vue-cli-plugin-electron-builder";

describe("Application launch", function() {
  jest.setTimeout(300000);

  let app;
  let win;
  let client;
  let stopServe;

  console.log("Starting");

  beforeEach(() => {
    console.log("beforeEach");
    // Wait for dev server to start
    return testWithSpectron(spectron, {
      chromeDriverArgs: [
        "--disable-infobars",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--no-sandbox",
        "--enable-automation",
        "--profile-directory=Default",
        "--user-data-dir=./.chrome-user-data",
        "--remote-debugging-port=9222"
      ]
    }).then(instance => {
      app = instance.app;
      win = app.browserWindow;
      client = app.client;
      stopServe = instance.stopServe;
      //wait for window to appear
      client.waitUntilWindowLoaded();

    });
  }, 300000);

  test("Window Loads Properly", async () => {
    console.log("test");
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
  });

  afterAll(function() {
    console.log("afterAll");
    if (app && app.isRunning()) {
      return stopServe();
    }
  });
});
