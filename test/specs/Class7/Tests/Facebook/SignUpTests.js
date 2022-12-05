const { expect } = require('chai');
const LoginPage = require('../../POM/Facebook/LoginPage')
const SignUpPage = require('../../POM/Facebook/SignUpPage')
const Dates = require('../../Utils/Dates');

describe('Sign Up Tests', () => {
   it('Verify current date is displayed on Sign-Up form', async () => {
    
        const loginPage = new LoginPage();
        const signUpPage = new SignUpPage();

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com');

        // 2. Click Create New Account button
        loginPage.clickCreateNewAccountButton();

        // 3. Verify current date is displayed in Date of birth dropdowns
        const actualSelectedDate = await signUpPage.getDefaultSelectedDate();   // 28
        const expectedSelectedDate = Dates.getCurrentDate();

        const actualSelectedMonth = await signUpPage.getDefaultSelectedMonth();
        const expectedSelectedMonth = Dates.getCurrentMonthNameInShort();

        const actualSelectedYear = await signUpPage.getDefaultSelectedYear();
        const expectedSelectedYear = Dates.getCurrentYearInYYYY();

        expect(actualSelectedDate, 'Default date in dropdown is NOT current date').to.be.equal(expectedSelectedDate);
        expect(actualSelectedMonth, 'Default month in dropdown is NOT current month').to.be.equal(expectedSelectedMonth);
        expect(actualSelectedYear, 'Default year in dropdown is NOT current year').to.be.equal(expectedSelectedYear);

   });

   it('Enter data in dropdown', async () => {
    
        const loginPage = new LoginPage();
        const signUpPage = new SignUpPage();

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com');

        // 2. Click Create New Account button
        await loginPage.clickCreateNewAccountButton();

        // 3. Enter '10 Aug 1998' in birth-date
        // await signUpPage.selectBirthDate('10');
        // await signUpPage.selectBirthMonth('Aug');
        // await signUpPage.selectBirthYear('1998');

        await signUpPage.selectBirthData('10 Aug 1998');
        
   });
});


/**
 * TC-1: https://www.facebook.com/
 * Facebook: Verify current date is displayed on Sign-Up form
 * 
 * Steps:
 * 1. Launch facebook.com
 * 2. Click Create New Account button
 * 3. Verify current date is displayed in Date of birth dropdowns
 *
 */