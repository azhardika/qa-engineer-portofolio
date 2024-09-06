import { $, expect, browser } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {
    async currentUrl() {
        return await browser.getUrl();
    }
    
    get secondHeader() {
        return $('.title');
    }

    get cartCount() {
        return $('.cart_quantity');
    }

    get cartItemName() {
        return $('.inventory_item_name');
    }

    get buttonCheckout() {
        return $('#checkout');
    }

    async validateItemOnCartPage() {
        await expect(await this.currentUrl()).toBe('https://www.saucedemo.com/cart.html');
        await expect(await this.secondHeader).toHaveText('Your Cart');
        await expect(await this.cartCount).toHaveText('1');
        await expect(await this.cartItemName).toHaveText('Sauce Labs Backpack');
        await expect(this.buttonCheckout).toBeEnabled();
    }

    open() {
        return super.open("cart.html");
    }
}

export default new CartPage();