import { Page, expect } from '@playwright/test';
import { commonLocators as loc } from '../locators/locators';

export class CustomerPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async goTo() {
        await this.page.goto('/angularJs-protractor/BankingProject/#/login');
        await expect(this.page).toHaveTitle(/XYZ Bank/);
    }

    async clickCustomerLogin() {
        await this.page.getByRole('button', {name: /Customer Login/}).click();
    }

    async selectCustomerByIndex(index: number) {
        await this.page.locator("#userSelect").selectOption({index: 5});
    }

    async clickLogin() {
        await this.page.getByRole('button', {name: /Login/}).click();
    }

    async clickDeposit() {
        await this.page.getByRole('button', {name: /Deposit/}).first().click();
    }

    async enterAmount() {
        await this.page.getByPlaceholder('amount').fill('1000')
    }

    async deposit() {
        await this.page.getByRole('button', {name: /Deposit/}).last().click();
    }
}