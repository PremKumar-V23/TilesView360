import { test, expect } from "@playwright/test";

test.setTimeout(5 * 60 * 1000);

test("Navigate All Sections @high", async ({ page }) => {
  await page.goto("https://tilesos.tilesview360.in/login");

  // Login
  await page
    .getByRole("textbox", { name: "Email address" })
    .fill("inv@gmail.com");
  await page.getByRole("textbox", { name: "Password" }).fill("Password@123");
  await page.getByRole("button", { name: "Sign in" }).click();

  console.log("Website signin successfully");

  // Navigate through all sections
  await page.getByRole("link", { name: "Dashboard", exact: true }).click();
  console.log("Dashboard opened successfully");

  await page.getByRole("link", { name: "TilesView AI", exact: true }).click();
  console.log("TilesView AI opened successfully");

  await page.getByRole("link", { name: "Customers", exact: true }).click();
  console.log("Customers opened successfully");

  await page.getByRole("link", { name: "My Work Today", exact: true }).click();
  console.log("My Work Today opened successfully");

  await page.getByRole("link", { name: "Sales Pipeline", exact: true }).click();
  console.log("Sales Pipeline opened successfully");

  await page.getByRole("link", { name: "Projects", exact: true }).click();
  console.log("Projects opened successfully");

  await page.getByRole("link", { name: "Visualizer", exact: true }).click();
  console.log("Visualizer opened successfully");

  await page.getByRole("link", { name: "Quotations", exact: true }).click();
  console.log("Quotations opened successfully");

  await page.getByRole("link", { name: "Orders", exact: true }).click();
  console.log("Orders opened successfully");

  await page.getByRole("link", { name: "Communications", exact: true }).click();
  console.log("Communications opened successfully");

  await page.getByRole("link", { name: "Tile Catalogue", exact: true }).click();
  console.log("Tile Catalogue opened successfully");

  await page.getByRole("link", { name: "QR Catalogue", exact: true }).click();
  console.log("QR Catalogue opened successfully");

  await page.getByRole("link", { name: "Inventory", exact: true }).click();
  console.log("Inventory opened successfully");

  await page.getByRole("link", { name: "Purchases", exact: true }).click();
  console.log("Purchases opened successfully");

  await page.getByRole("link", { name: "Marketing", exact: true }).click();
  console.log("Marketing opened successfully");

  await page.getByRole("link", { name: "Analytics", exact: true }).click();
  console.log("Analytics opened successfully");

  await page.getByRole("link", { name: "Website", exact: true }).click();
  console.log("Website opened successfully");

  await page
    .getByRole("link", { name: "Invoices & Payments", exact: true })
    .click();
  console.log("Invoices & Payments opened successfully");

  await page.getByRole("link", { name: "Team", exact: true }).click();
  console.log("Team opened successfully");

  await page
    .getByRole("link", { name: "Business Settings", exact: true })
    .click();
  console.log("Business Settings opened successfully");

  await page.getByRole("link", { name: "Subscription", exact: true }).click();
  console.log("Subscription opened successfully");

  await page.getByRole("link", { name: "Support", exact: true }).click();
  console.log("Support opened successfully");

  console.log("All sections navigation completed successfully ✅");
});
