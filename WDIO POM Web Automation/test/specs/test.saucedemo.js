import LoginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/home.page";
import CartPage from "../pageobjects/cart.page";

describe('Test Saucedemo WDIO - Page Object Based', () => {
    it('Test 1 - Login Successfully and Add Item to Cart', async () => {
        await LoginPage.open()
        await LoginPage.login("standard_user", "secret_sauce")
        await HomePage.validateOnHomePage()
        await HomePage.addItem()
        await HomePage.openCartPage()
        await CartPage.validateItemOnCartPage()
    });

    it('Test 2 - Login Failed Invalid Credential', async () => {
        await LoginPage.open()
        await LoginPage.login("standard_user", "hahaYouWrong")
        await LoginPage.validateWrongPasswordDisplayed()
    });
});