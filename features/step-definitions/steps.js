const { Given, When, Then } = require('@cucumber/cucumber');
const { format } = require('date-fns');
const LoginPage = require('../pageobjects/LoginPage');

browser.setTimeout({ 'implicit': 10000 });
Given('I am on the ERP login page', async () => {
    await browser.url("https://erp.people10.com/login#login");
    await browser.maximizeWindow();
    await LoginPage.googleLoginButton.click();
});

When('I enter my email and password', async () => {
    await LoginPage.emailField.setValue('navami.sunil@people10.com');
    await LoginPage.nextButtonEmail.click();
    await LoginPage.passwordField.setValue('');
    await LoginPage.nextButtonPassword.click();
});

When('I navigate to the timesheet page', async () => {
    await LoginPage.projectsTab.waitForDisplayed({ timeout: 20000 });
    await LoginPage.projectsTab.click();
    await LoginPage.timesheetLink.click();
});

When('I add a new timesheet entry', async () => {
    await LoginPage.primaryActionButton.click();
    await LoginPage.activityTypeDropdown.click();
    await LoginPage.activityInput.setValue("internal");
    await browser.pause(5000); 
    await LoginPage.activityOption.waitForDisplayed({ timeout: 20000 });
    await LoginPage.activityOption.click();
    
    const currentTime = new Date();
    currentTime.setHours(currentTime.getHours() - 8);
    const formattedTime = format(currentTime, 'dd-MM-yyyy HH:mm:ss');
    
    await LoginPage.fromTimeInput.setValue(formattedTime);
    await LoginPage.hoursInput.setValue('8');
    await LoginPage.projectInput.setValue("vortex");
    await browser.pause(2000); 
    await LoginPage.projectOption.click();
    await LoginPage.saveButton.click();
});

Then('The timesheet entry should be saved successfully', async () => {
    await browser.pause(3000);
    await LoginPage.timesheetListLink.click();
    await LoginPage.filterButton.waitForClickable({ timeout: 5000 });
    await LoginPage.filterButton.click();
    await browser.pause(4000); 
    
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    const dynamicXPath = `//a[@data-filter='start_date,=,${currentDate}']`;
    
    const dateElement = await $(dynamicXPath);
    await dateElement.waitForDisplayed({ timeout: 30000 }); 
    const isDisplayed = await dateElement.isDisplayed();
    
    if (isDisplayed) {
        console.log('ERP timesheet has been successfully saved.');
      
    } else {
        console.log('ERP timesheet is not saved! Try again!');
        throw new Error('Timesheet entry not displayed');
    }
    
});
