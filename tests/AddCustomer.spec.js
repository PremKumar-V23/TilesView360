const { test, expect } = require('@playwright/test');

test('Create Customer in TilesView360', async ({ page }) => {

    // Open login page
    await page.goto('https://tilesos.tilesview360.in/login');
    console.log('Login page opened');

    // Enter Email
    await page.locator("input[type='email']").fill('inv@gmail.com');
    console.log('Email entered');

    // Enter Password
    await page.locator("input[type='password']").fill('Password@123');
    console.log('Password entered');

    // Click Login
    await page.getByRole('button', { name: 'Sign in' }).click();
    console.log('Sign in button clicked');

    // Wait for Owner page
    await page.waitForURL('**/owner**');
    console.log('Owner page opened');

    // Open Customers module
    await page.locator("a[href='/owner/crm']").click();
    console.log('Customers menu clicked');

    // Verify Customers page
    await page.waitForURL('**/owner/crm');
    await expect(page).toHaveURL(/\/owner\/crm\/?$/);
    console.log('Customers module opened:', page.url());

    // Click Add Customer
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[1]/div[2]/div/button[3]'
    ).click();
    console.log('Add Customer button clicked');

    // Enter Name
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[1]/input'
    ).fill('Priya');
    console.log('Customer name entered');

    // Enter Phone
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[2]/input'
    ).fill('9360597607');
    console.log('Phone number entered');

    // Enter Alternate Phone
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[3]/input'
    ).fill('9876543210');
    console.log('Alternate phone entered');

    // Enter Email
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[4]/input'
    ).fill('om@gmail.com');
    console.log('Customer email entered');

    // Select Customer Type - index 2
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[5]/select'
    ).selectOption({ index: 2 });
    console.log('Customer type selected');

    // Select Status
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[6]/select'
    ).selectOption({ label: 'Active' });
    console.log('Status selected: Active');

    // Select Source
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[7]/select'
    ).selectOption({ label: 'google' });
    console.log('Customer source selected: google');

    // Enter Company
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[8]/input'
    ).fill('Priya Residence');
    console.log('Company name entered');

    // Enter GST
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[9]/input'
    ).fill('33ABCDE1234F1Z5');
    console.log('GST number entered');

    // Enter City
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[10]/input'
    ).fill('Chennai');
    console.log('City entered');

    // Enter State
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[11]/input'
    ).fill('TamilNadu');
    console.log('State entered');

    // Enter Postal Code
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[12]/input'
    ).fill('600102');
    console.log('Postal code entered');

    // Enter Address
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[13]/input'
    ).fill('No. 16, Thiruvalluvar Nagar, Anna Nagar East');
    console.log('Address entered');

    // Select Branch - index 1
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[14]/select'
    ).selectOption({ index: 1 });
    console.log('Branch selected');

    // Select Team Member - index 3
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[15]/select'
    ).selectOption({ index: 3 });
    console.log('Team member selected');

    // Enter Project Name
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[16]/input'
    ).fill('Priya Residence');
    console.log('Project name entered');

    // Select Stage - index 3
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[17]/select'
    ).selectOption({ index: 3 });
    console.log('Project stage selected');

    // Enter Budget
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[18]/input'
    ).fill('100000');
    console.log('Budget entered');

    // Enter Area
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[19]/input'
    ).fill('3000');
    console.log('Area entered');

    // Enter Preferred Categories
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[20]/input'
    ).fill('Granite,Marble');
    console.log('Preferred categories entered');

    // Enter Notes
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/label[21]/textarea'
    ).fill('I want Tiles ASAP');
    console.log('Notes entered');

    // Save Customer
    await page.locator(
        'xpath=/html/body/div/div/main/section/div[6]/div/form/div/button[2]'
    ).click();
    console.log('Save Customer button clicked');

});
