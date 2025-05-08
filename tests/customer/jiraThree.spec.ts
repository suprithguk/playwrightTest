import{test, expect} from '@playwright/test'
import { CustomerPage } from '../pages/customerPage';

test('Create an account', async ({page}) => {
    const customer = new CustomerPage(page);
    await customer.goTo()
    await customer.clickCustomerLogin()
    await customer.selectCustomerByIndex(5)
    await customer.clickLogin()
    await customer.clickDeposit()
    await customer.enterAmount()
    await customer.deposit()
})