import { Page, expect } from '@playwright/test';
import { commonLocators as loc } from '../locators/locators';

export class ManagerPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goTo() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/login');
    await expect(this.page).toHaveTitle(/XYZ Bank/);
  }

  async clickManagerLogin() {
    await this.page.getByRole('button', { name: /Bank Manager Login/ }).click();
  }

  async openAccountTab() {
    await this.page.click('button[ng-click="openAccount()"]');
  }

  async addCustomerTab() {
    await this.page.getByRole('button', {name: /Add Customer/}).first().click();
  }

  async customersTab() {
    // await this.page.reload();
    await this.page.click('button[ng-click="showCust()"]');
  }

  async selectCustomerByIndex(index: number) {
    const customerDropdown = this.page.locator(loc.customerDropdown);
    await expect(customerDropdown).toBeVisible();
    await customerDropdown.selectOption({ index });
  }

  async selectCurrency(currency: string) {
    await this.page.locator(loc.currencyDropdown).selectOption(currency);
  }

  async enterFirstName(name: string) {
    await this.page.locator(loc.firstNameInput).fill(name);
  }

  async enterLastName(name: string) {
    await this.page.locator(loc.lastNameInput).fill(name);
  }

  async enterPostCode(postCode: string) {
    await this.page.locator(loc.postCodeInput).fill(postCode);
  }

  async processCustomerCreation() {
    this.page.on('dialog', async (dialog) => {
      expect(dialog.type()).toContain('alert');
      expect(dialog.message()).toContain('Customer added successfully with customer id :');
      await dialog.accept();
    });

    await this.page.locator(loc.addCustomerBtn).last().click();
  }

  async processAccountCreation() {
    this.page.on('dialog', async (dialog) => {
      expect(dialog.type()).toContain('alert');
      expect(dialog.message()).toContain('Account created successfully with account Number :');
      await dialog.accept();
    });

    await this.page.getByRole('button', { name: /Process/ }).click();
  }

  async submitCustomerAndExpectDuplicate() {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Please check the details. Customer may be duplicate.');
      await dialog.accept();
    });
  }

  async validateTable() {
    // const table = this.page.locator('.table.table-bordered.table-striped');
    const rows = this.page.locator('table tbody tr');
    console.log('Number of rows: ', await rows.count());
    expect(await rows.count()).toBeGreaterThan(4);
  }

  async accountNumberUpdate() {
    // const table = this.page.locator('.table.table-bordered.table-striped');
    await expect(this.page.locator('//table//tbody/tr[5]/td[4]')).not.toBeEmpty();
  }
}