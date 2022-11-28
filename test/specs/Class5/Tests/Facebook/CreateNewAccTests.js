const CreateNewAccount = require('../../POM/Facebook/CreateNewAccount')
const { expect } = require('chai');


describe('CreateNewAccount form Test Suite', () => {
    
    it.only('Homework-3: Verify current date is displayed on Sign-Up form', async () => {
        const createNewAcc = new CreateNewAccount();

        /* 
        Manual testing steps:
        1. Launch www.facebook.com
        2. Click Create new account button
        3. Verify current date displayed in Date of birth dropdown
        */

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Find required webElement 'Create New Account' and perform click
        await createNewAcc.clickCreateAccButton();

        // 3. Verify expected date matches with actual result
        expect(await createNewAcc.compareDates(), 'Expected current date does NOT match with actual').to.be.true;
        
    });

});