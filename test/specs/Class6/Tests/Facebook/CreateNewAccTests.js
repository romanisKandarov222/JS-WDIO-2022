const CreateNewAccount = require('../../POM/Facebook/CreateNewAccount')
const { expect } = require('chai');
const Dates = require('../../Utils/Dates');


describe('CreateNewAccount form Test Suite', () => {
    
    it('Homework-3: Verify current date is displayed on Sign-Up form', async () => {
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


    it.only('Verify current date is displayed on Sign-Up form with "Select From DropDown with select-function"', async () => {
        const createNewAcc = new CreateNewAccount();
        

        /* 
        Manual testing steps:
        1. Launch www.facebook.com
        2. Click Create new account button
        3. Verify current date displayed in Date of birth dropdown with select from dropdown select-function
        */

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Find required webElement 'Create New Account' and perform click
        await createNewAcc.clickCreateAccButton();

        // 3. Verify expected date/month/year matches with actual result
        const actualSelectedDate = await createNewAcc.getDefaultSelectedDate();
        const expectedSelectedDate = Dates.getCurrentDate();

        const actualSelectedMonth = await createNewAcc.getDefaultSelectedMonth();
        const expectedSelectedMonth = Dates.getCurrentMonth();

        const actualSelectedYear = await createNewAcc.getDefaultSelectedYear();
        const expectedSelectedYear = Dates.getCurrentYear();
        
        expect(actualSelectedDate, 'Default date is NOT current date').to.be.equal(expectedSelectedDate);
        expect(actualSelectedMonth, 'Default month is NOT current date').to.be.equal(expectedSelectedMonth);
        expect(actualSelectedYear, 'Default year is NOT current date').to.be.equal(expectedSelectedYear);

    });

});