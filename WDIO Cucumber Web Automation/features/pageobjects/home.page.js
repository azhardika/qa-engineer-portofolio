import { $, expect, browser } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
    get cartIcon() {
        return $("#shopping_cart_container");
    }

    get productCount() {
        return $$('.inventory_item');
    }

    get buttonAddCartBackpack() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get buttonRemoveCartBackpack() {
        return $('#remove-sauce-labs-backpack');
    }

    get cartCountBadge() {
        return $('.shopping_cart_badge');
    }

    get secondHeader() {
        return $('.title');
    }

    async currentUrl() {
        return await browser.getUrl();
    }

    async pageTitle() {
        return await browser.getTitle();
    }

    async validateOnHomePage() {
        await expect(this.cartIcon).toBeExisting();
        await expect(this.productCount).toBeElementsArrayOfSize(6);
        await expect(this.buttonAddCartBackpack).toBeEnabled();
        await expect(await this.secondHeader).toHaveText('Products');
        await expect(await this.currentUrl()).toBe('https://www.saucedemo.com/inventory.html');
        await expect(await this.pageTitle()).toBe('Swag Labs');
    }

    async addItem() {
        await this.buttonAddCartBackpack.click();
        //validation
        await expect(this.buttonAddCartBackpack).not.toBeExisting();
        await expect(this.buttonRemoveCartBackpack).toBeExisting();
        await expect(await this.cartCountBadge).toHaveText('1');
    }

    async openCartPage() {
        await this.cartIcon.click();
    }

    open() {
        return super.open("inventory.html");
    }
}

export default new HomePage();