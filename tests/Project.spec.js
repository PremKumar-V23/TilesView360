import { test, expect } from "@playwright/test";
test.setTimeout(5 * 60 * 1000);

async function selectByText(select, text) {
  const option = select.locator("option", { hasText: text });
  await expect(option.first()).toBeAttached();
  const value = await option.first().getAttribute("value");
  await select.selectOption(value);
}

test("Team", async ({ page }) => {
  await page.goto("https://tilesos.tilesview360.in/login");
  await page
    .getByRole("textbox", { name: "Email address", exact: true })
    .fill("ksp@gmail.com");
  await page
    .getByRole("textbox", { name: "Password", exact: true })
    .fill("Password@123");
  await page.getByRole("button", { name: "Sign in" }).click();
  console.log("Website signin successfully");
  await page.getByLabel("Projects").click();
  await page.getByRole("button", { name: " New project" }).click();
  await page.getByLabel("Project name").fill("Dream Company");
  const modal = page.locator(".modal");
  await expect(modal).toBeVisible();

  const customerDropdown = modal.getByLabel("Customer");
  await expect(customerDropdown).toBeEnabled();
  await selectByText(customerDropdown, "Lalitha");
  console.log("Customer selected");

  await page
    .getByLabel("Select branch")
    .selectOption({ label: "Namakkal Branch" });
  await page.getByLabel("Select employee").selectOption({ label: "Anu" });
  await page
    .getByLabel("Select property type")
    .selectOption({ label: "Apartment" });
  await page.getByLabel("Budget").fill("50000000");
  await page.getByLabel("Expected start").fill("2026-11-07");
  await page.getByLabel("Expected completion").fill("2027-05-01");
  await page.getByRole("button", { name: "Save project" }).click();
  console.log("Project Created");
});
