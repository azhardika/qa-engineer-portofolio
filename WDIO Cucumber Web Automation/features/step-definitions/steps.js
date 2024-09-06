import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

Given('user is on Login page', async() => {
    await LoginPage.open()
});

When(/^user input "([^"]*)" as username$/, async (username) => {
    await LoginPage.inputUsername.setValue(username)
});

When(/^user input "([^"]*)" as password$/, async (password) => {
    await LoginPage.inputPassword.setValue(password)
});

When('user click login button', async () => {
    await LoginPage.buttonSubmit.click()
});

Then('user is redirected to Home page', async () => {
    await HomePage.validateOnHomePage()
});

Then(/^user shown error message "([^"]*)"$/, async (message) => {
    await expect(LoginPage.errorMessage).toHaveText(message)
});
