import { test, expect } from "@playwright/test";
test.setTimeout(5 * 30 * 1000);

test("Login @high", async ({ page }) => {
  await page.goto("https://tilesos.tilesview360.in/login");
  await page.getByLabel("Email address").fill("ksp@gmail.com");
  await page.getByLabel("Password").fill("Password@123");
  await page.getByRole("button", { name: "Sign in " }).click();
  console.log("Website signin successfully");
  await page.getByLabel("Customers").click();
  await page.getByRole("button", { name: " Add customer" }).click();
  await page.getByRole("textbox", { name: "Name", exact: true }).click();
  console.log("Name Added successfully");
});

// Add Customer
test("Customer", async ({ page }) => {
  const customername = "Sanjay";
  await page.goto("https://tilesos.tilesview360.in/login");
  await page
    .getByRole("textbox", { name: "Email address", exact: true })
    .fill("ksp@gmail.com");
  await page
    .getByRole("textbox", { name: "Password", exact: true })
    .fill("Password@123");
  await page.getByRole("button", { name: "Sign in" }).click();
  console.log("Website signin successfully");
  await page.getByRole("link", { name: "Customers" }).click();
  await page.getByRole("button", { name: "Add customer" }).click();
  await page
    .getByRole("textbox", { name: "Name", exact: true })
    .fill(customername);
  await page
    .getByRole("textbox", { name: "Phone", exact: true })
    .fill("9876543212");
  await page.getByRole("button", { name: "Save customer" }).click();
  await expect(
    page
      .locator(".crm-customer-card h3")
      .getByText(customername, { exact: true }),
  ).toBeVisible({ timeout: 3000 });
  console.log("Customer created successfully");

  await page
    .locator(".crm-customer-card")
    .getByText("Archive", { exact: true })
    .click();
  page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });
  await expect(
    page
      .locator(".crm-customer-card h3")
      .getByText(customername, { exact: true }),
  ).not.toBeVisible({ timeout: 3000 });
  console.log("Customer deleted successfully");
});

//Create Branch
test.only("Branch", async ({ page }) => {
  const branchname = "Namakkal Branch";
  const branchcode = "NAL123";
  await page.goto("https://tilesos.tilesview360.in/login");
  await page
    .getByRole("textbox", { name: "Email address", exact: true })
    .fill("ksp@gmail.com");
  await page
    .getByRole("textbox", { name: "Password", exact: true })
    .fill("Password@123");
  await page.getByRole("button", { name: "Sign in" }).click();
  console.log("Website signin successfully");
  await page.getByLabel("Team").click();
  await page.getByRole("button", { name: "Add branch" }).click();
  await page.getByLabel("Branch code *").fill(branchcode);
  await page.getByLabel("Branch name *").fill(branchname);
  await page.getByLabel("City *").fill("Namakkal");
  await page.getByLabel("State *").fill("Tamilnadu");
  await page.getByLabel("Postal code *").fill("637001");
  await page.getByLabel("Phone *").fill("7339091608");
  await page.getByLabel("Email *").fill("krishnasanjay1012@gmail.com");
  await page.getByLabel("Address *").fill("No 1, 2nd street, Namakkal");
  await page.getByRole("button", { name: "Save branch" }).click();
  await expect(
    page.locator(".card.branch-card").getByText(branchname, { exact: true }),
  ).toBeVisible({ timeout: 3000 });
  console.log("Branch created successfully ✅");
});

//Create Quotation
test.only("quotation", async ({ page }) => {
  await page.goto("https://tilesos.tilesview360.in/login");
  await page
    .getByRole("textbox", { name: "Email address", exact: true })
    .fill("ksp@gmail.com");
  await page
    .getByRole("textbox", { name: "Password", exact: true })
    .fill("Password@123");
  await page.getByRole("button", { name: "Sign in" }).click();
  console.log("Website signin successfully");
  await page.getByLabel("Quotations").click();
  await page.getByRole("Button", { name: "Create quotation" }).click();
  await page.getByLabel("Customer *").selectOption({ label: "Sharan" });
  console.log("Customer selected");
  await page
    .getByLabel("Customer/default branch")
    .selectOption({ label: "Namakkal Branch" });
  console.log("Branch Added");
  const tileDropdown = page.getByLabel("Tile *");
  await tileDropdown.scrollIntoViewIfNeeded();
  await tileDropdown.selectOption({ label: "Glossygranite  ·  GRA-001" });
  console.log("Tile Added");
  await page.getByLabel("Surface").selectOption({ label: "Floor" });
  await page.getByLabel("Area sq.ft").fill("1300");
  await page.getByLabel("Boxes").fill("20");
  await page.getByRole("button", { name: "Create quotation" }).last().click();
  // await page.locator("button").filter({ hasText: "Create quotation" }).first();
  console.log("Quotation Created");
});