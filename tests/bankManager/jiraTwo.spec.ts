import{test, expect} from '@playwright/test'
import { ManagerPage } from '../pages/managerPage';

test('Create an account', async ({page}) => {
    const manager = new ManagerPage(page);
    await manager.goTo()
    await manager.clickManagerLogin()
    await manager.openAccountTab()
    await manager.selectCustomerByIndex(5)
    await manager.selectCurrency('Pound')
    await manager.processAccountCreation()
    await manager.customersTab()
    await manager.accountNumberUpdate()
})