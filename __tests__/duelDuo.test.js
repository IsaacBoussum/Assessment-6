const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("clicking the Draw button displays the div with id = “choices”", async () => {
    await driver.get("http://localhost:8000");
    const drawButton = await driver.findElement(By.id("draw-button"));
    await drawButton.click();
    const choices = await driver.findElement(By.id("choices"));
    await driver.wait(until.elementIsVisible(choices), 1000);
  });
  test("clicking an 'Add to Duo' button displays the div with id = 'player-duo'", async () => {
    await driver.get("http://localhost:8000");
    const addBotButton = await driver.findElement(By.id("add-bot-0"));
    await addBotButton.click();
    const playerDuo = await driver.findElement(By.id("player-duo"));
    await driver.wait(until.elementIsVisible(playerDuo), 1000);
  });
});