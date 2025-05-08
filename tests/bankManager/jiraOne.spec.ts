import {test, expect} from '@playwright/test'
import { ManagerPage } from '../pages/managerPage';

test.describe('Manager Flow', () => {
    // let manager: ManagerPage;
    test.beforeEach(async ({page}) => {
        const manager = new ManagerPage(page);
    })
    test('Create a Customer', async ({page}) => {
        const manager = new ManagerPage(page);
        await manager.goTo();
        await manager.clickManagerLogin();
        await manager.addCustomerTab();
        await manager.enterFirstName('John');
        await manager.enterLastName('Doe');
        await manager.enterPostCode('SE10');
        await manager.processCustomerCreation();
    })

    test('Validate Table', async ({page}) => {
        const manager = new ManagerPage(page);
        await manager.goTo();
        await manager.clickManagerLogin();
        await manager.customersTab();
        await page.waitForTimeout(5000)
        await manager.validateTable();
    })
})