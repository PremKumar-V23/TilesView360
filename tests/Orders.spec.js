import { test, expect } from "@playwright/test";
test.setTimeout(5 * 60 * 1000);

async function selectByText(select, text) {
  const option = select.locator("option", { hasText: text });
  await expect(option.first()).toBeAttached();
  const value = await option.first().getAttribute("value");
  await select.selectOption(value);
}

test("Orders", async ({ page }) => {
  await page.goto("https://tilesos.tilesview360.in/login");
  await page
    .getByRole("textbox", { name: "Email address", exact: true })
    .fill("ksp@gmail.com");
  await page
    .getByRole("textbox", { name: "Password", exact: true })
    .fill("Password@123");
  await page.getByRole("button", { name: "Sign in" }).click();
  console.log("Website signin successfully");

  await page.getByLabel("Orders").click();

  await page.getByRole("button", { name: "New sales order" }).click();

  const dropdowns = page.locator("select");
  await dropdowns.nth(0).selectOption({ label: "Namakkal Branch" });
  console.log("Branch Entered");

  const customerDropdown = dropdowns.nth(1);
  await expect(customerDropdown).toBeEnabled();
  await selectByText(customerDropdown, "Divya");
  console.log("Customer name Entered");

  await page.getByLabel("Expected delivery ").fill("2026-11-10");
  await page.getByLabel("Contact name ").fill("Divi");
  await page.getByLabel("Contact phone ").fill("9879877123");
  await page.getByLabel("Delivery address ").fill("Karur, TamilNadu.");

  const tileDropdown = page.locator("select", {
    has: page.locator("option", { hasText: /marble\s*inlay/i }),
  });
  await expect(tileDropdown).toBeVisible();
  await selectByText(tileDropdown, /marble\s*inlay/i);
  console.log("Tiles name Entered");

  await page.getByLabel("Boxes  ").fill("10");
  await page.getByRole("Button", { name: "Create order" }).click();
  console.log("Order Created");
});