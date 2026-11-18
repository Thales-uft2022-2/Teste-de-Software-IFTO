const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/sistema-login/index.html");
});

test("deve realizar login com credenciais válidas", async ({ page }) => {
  await page.locator("#usuario").fill("admin");
  await page.locator("#senha").fill("123456");
  await page.locator("#entrar").click();
  await expect(page.locator("#mensagem"))
    .toHaveText("Login realizado com sucesso");
});

test("deve apresentar erro com senha incorreta", async ({ page }) => {
  await page.locator("#usuario").fill("admin");
  await page.locator("#senha").fill("senha-errada");
  await page.locator("#entrar").click();
  await expect(page.locator("#mensagem"))
    .toHaveText("Usuário ou senha inválidos");
});
