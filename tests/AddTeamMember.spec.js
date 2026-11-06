import { test, expect } from "@playwright/test";
test.setTimeout(5 * 60 * 1000);

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
  await page.getByLabel("Team").click();
  await page.getByRole("button", { name: "team" }).click();
  console.log("Team module opened");
  await page.waitForTimeout(4000);
  await page.getByRole("button", { name: "Add team member" }).click();
  await page.waitForTimeout(4000);
  await page.getByLabel("Full name").fill("Anu");
  console.log("Name entered");
  await page.getByLabel("Employee code ").fill("Anu135");
  await page.getByLabel("Email ").fill("Anu@gmail.com");
  await page.getByLabel("Phone ").fill("9182736450");
  await page.getByLabel("Job title ").fill("Accountant");
  await page.getByLabel("Joining date ").fill("2026-11-06");
  await page.getByLabel("Primary role ").selectOption({ label: "accountant" });
  await page.getByLabel("Temporary password ").fill("Password@123");
  await page.getByLabel("Internal notes ").fill("I worked as Accountant");
  await page.getByRole("button", { name: "Save team member" }).click();
  console.log("New Team Member entered");
});
