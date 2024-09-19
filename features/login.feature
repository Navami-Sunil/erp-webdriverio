# features/login.feature
Feature: ERP Timesheet Management

  Scenario: Login and save a timesheet entry
    Given I am on the ERP login page
    When I enter my email and password
    And I navigate to the timesheet page
    And I add a new timesheet entry
    Then The timesheet entry should be saved successfully
