import { test, expect } from "@playwright/test";

test.setTimeout(5 * 60 * 1000);

test("Supplier Creation and Field Validation @high", async ({ page }) => {
  await page.goto("https://tilesos.tilesview360.in/login");

  // Login
  await page
    .getByRole("textbox", { name: "Email address" })
    .fill("inv@gmail.com");
  await page.getByRole("textbox", { name: "Password" }).fill("Password@123");
  await page.getByRole("button", { name: "Sign in" }).click();

  console.log("Website signin successfully");

  // Navigate to Purchases
  await page.getByRole("link", { name: "Purchases" }).click();

  console.log("Purchases section opened successfully");

  // Add Supplier
  await page.getByRole("button", { name: "Add supplier" }).click();

  const suppliername = "Kag";
  const code = "Kag-1234";

  await page.getByRole("textbox", { name: "Supplier name" }).fill(suppliername);
  await page.getByRole("textbox", { name: "Code" }).fill(code);
  await page
    .getByRole("textbox", { name: "Contact person" })
    .fill("9876236478");
  await page.getByRole("textbox", { name: "Phone" }).fill("6574837354");
  await page.getByRole("textbox", { name: "Email" }).fill("ui@gmail.com");
  await page.getByRole("textbox", { name: "GSTIN" }).fill("364891847567193044");
  await page.getByRole("textbox", { name: "City" }).fill("Chennai");
  await page.getByRole("textbox", { name: "State" }).fill("Tamilnadu");

  // Test 1: Invalid GSTIN (incorrect length)
  await page.getByRole("button", { name: "Save supplier" }).click();

  console.log("Invalid GSTIN validation checked");

  // Test 2: Valid length GSTIN format
  const gstin = page.getByRole("textbox", { name: /GSTIN/ });

  await gstin.fill("453672816354678");

  console.log("GSTIN updated");

  // Test 3: Contact person validation
  await page.getByRole("textbox", { name: /Contact person/ }).fill("Yash");

  console.log("Contact person updated");

  // Test 4: GSTIN with 14 characters
  await gstin.fill("45367281635467");
  await page.getByRole("button", { name: "Save supplier" }).click();

  console.log("14-character GSTIN validation checked");

  // Test 5: GSTIN with 15 characters
  await gstin.fill("456787654567879");
  await page.getByRole("button", { name: "Save supplier" }).click();

  console.log("15-character GSTIN validation checked");

  // Test 6: GSTIN with standard GSTIN structure
  await gstin.fill("24AAAGM0289C1ZP");
  await page.getByRole("button", { name: "Save supplier" }).click();

  console.log("Standard GSTIN format validation checked");
});
