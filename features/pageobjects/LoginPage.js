class LoginPage {
    get googleLoginButton() { return $('//a[text()=" Google"]'); }
    get emailField() { return $("//input[@id='identifierId']"); }
    get nextButtonEmail() { return $('//span[text()="Next"]'); }
    get passwordField() { return $('//input[@name="Passwd"]'); }
    get nextButtonPassword() { return $('//span[text()="Next"]'); }
    get projectsTab() { return $('//div[contains(text(),"Projects")]'); }
    get timesheetLink() { return $('(//a[@href="#List/Timesheet"])[2]'); }
    get primaryActionButton() { return $('//button[@class="btn btn-primary btn-sm primary-action"]'); }
    get activityTypeDropdown() { return $('(//div[@data-fieldname="activity_type"])[2]'); }
    get activityInput() { return $('//input[@class="input-with-feedback form-control bold input-sm"]'); }
    get activityOption() { return $('//strong[text()="GEN - Internal Training"]'); }
    get fromTimeInput() { return $('//input[@data-fieldname="from_time"]'); }
    get hoursInput() { return $('//input[@placeholder="Hrs"]'); }
    get projectInput() { return $('//input[@placeholder="Project"]'); }
    get projectOption() { return $('//strong[text()="AGT - Vortex"]'); }
    get saveButton() { return $('//span[@data-label="Save"]'); }
    get timesheetListLink() { return $('//a[@href="#List/Timesheet"]'); }
    get filterButton() { return $('//button[@data-value="100"]'); }
}

module.exports = new LoginPage();
