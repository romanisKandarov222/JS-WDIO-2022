const { expect } = require("chai");
const { it } = require("mocha");
const moment = require ('moment');

// Homework due date: Nov 21 (Mon)


describe('Homework test cases:', () => {

    it('TC-1: Verify current date is displayed on Sign-Up form', async() => {
        /**
        TC-1: https://www.facebook.com/
        Facebook: Verify current date is displayed on Sign-Up form
        */

        const today = moment();
        const now = today.format("MMM D YYYY");
        
        /* 
        Manual testing steps:
        1. Launch www.facebook.com
        2. Click Create new account button
        3. Verify current date displayed in Date of birth dropdown
        */

        // Automation:
        // 1. Launch website
        await browser.url('/');

        // 2. Find required webElement
        const createNewAccountButton = await $('=Create new account');
        createNewAccountButton.click();

        await browser.pause(2000);

        // 3. Get their text values
        // logic of this case is not well-written, due to you have to change code line with month and day values
        const monthDropDown = await $('#month');
        var expectedMonth = '';
        if(monthDropDown) {
            const currentMonth = await $('//option[contains(text(),"Nov")]');
            expectedMonth = await currentMonth.getText();
        }

        const dayDropDown = await $('//select[@aria-label="Day"]');
        var expectedDay = '';
        if(dayDropDown) {
            const currentDay = await $('//option[contains(text(),"21")]');
            expectedDay = await currentDay.getText();
        }

        const yearDropDown = await $('#year');
        var expectedYear = '';
        if(yearDropDown) {
            const currentYear = await $('//option[contains(text(),"2022")]');
            expectedYear = await currentYear.getText();
        }

        // 4. Assign result of their concatenation to ActualDate variable
        const actualDate = expectedMonth + ' ' + expectedDay + ' ' + expectedYear;

        // 5. Verify expected matches with actual result
        expect(actualDate, 'Expected current date does NOT match with actual').to.equal(now);

    });


    it('TC-2: Verify user gets error when submits empty login form', async() => {
        /**
        TC-2: https://www.facebook.com/
        Facebook: Verify user gets error when submits empty login form
        Expected error msg -> The email address or mobile number you entered isn't connected to an account.
        */

        /* 
        Manual testing steps:
        1. Launch www.facebook.com
        2. Click login button without any input data
        3. Verify login error is displayed 
        */

        // Automation:
        // 1. Launch website
        await browser.url('/');

        // 2. Find required webElement and click on it
        const logInButton = await $('//button[@name="login"]');
        logInButton.click();

        // 3. Find error msg locator and verify error is displayed 
        const logInError = await $('//a[contains(text(), "and log in")]');
        const isLogInErrorDisplayed = await logInError.isDisplayed();
        expect(isLogInErrorDisplayed, 'Login error message is NOT displayed').to.be.true;
        
    });    

    
    it('TC-3: Verify user gets error when submit empty login on messenger screen', async() => {
        /**
        * TC-3: https://www.facebook.com/
        * Facebook: Verify user gets error when submit empty login on messenger screen
         
        * 1. Click Messenger
        * 2. Verify "Keep me signed in" is NOT selected
        * 3. Click "Log in" button
        * 4. Verify link (Find your account and log in.) is displayed
        * 5. Verify "Continue" button is enabled
        * 6. Verify "Keep me signed in" is NOT selected
        * 7. Click "Keep me signed in" checkbox
        * 8. Verify "Keep me signed in" is selected
        */

        /* 
        Manual testing steps:
        1. Launch https://www.facebook.com/
        2. Click "Messenger" hyperlink at the bottom
        3. Click "Log in" button
        4. Verify link (Find your account and log in.) is displayed
        5. Verify "Continue" button is enabled
        6. Verify "Keep me signed in" is NOT selected 
        7. Click "Keep me signed in" checkbox
        8. Verify "Keep me signed in" is selected
        */


        // Automation:
        // 1. Launch www.facebook.com
        await browser.url('/');

        // 2. Find required webElement 'Messenger' and perform click
        const messengerLink = await $('//a[@title="Check out Messenger."]');
        await messengerLink.click();

        // 3. Find required webElement 'Keep me sign in' checkbox and verify it's not selected
        const keepMeSignIn = await $('//label[text()="Keep me signed in"]')
        const isKeepMeSignInSelected = await keepMeSignIn.isSelected();
        expect(isKeepMeSignInSelected, 'keepMeSignIn IS selected').to.be.false;

        // 3. Find required webElement and perform click
        const messengerLogIn = await $('//button[@name="login"]');
        await messengerLogIn.click();

        await browser.pause(2000);
        // 4. Verify error "Find your account and log in." is displayed
        const errorFindYourAcc = await $('//a[contains(text(), "Find your")]');
        const isErrorFindYourAccDisplayed = await errorFindYourAcc.isDisplayed();
        expect(isErrorFindYourAccDisplayed, 'errorFindYourAcc IS NOT displayed').to.be.true;

        // 5. Find required webElement 'Continue' and perform click
        const continueButton = await $('//button[text() = "Continue"]');
        const isContinueButtonEnabled = await continueButton.isEnabled();
        expect(isContinueButtonEnabled, 'continueButton IS NOT enabled').to.be.true;


        // 6. Find required webElement 'Keep me sign in' checkbox and verify it's not selected
        const keepMeSignInBox = await $('//input[@type="checkbox"]')
        var isKeepMeSignInBoxSelected = await keepMeSignInBox.isSelected();
        expect(isKeepMeSignInBoxSelected, 'keepMeSignIn checkbox IS selected').to.be.false;

        // 7. Find required webElement 'Keep me sign in' box and perform click
        const keepMeSignInBoxSelected = await $('//label[text()="Keep me signed in"]');
        await browser.pause(2000);
        await keepMeSignInBoxSelected.click();

        await browser.pause(2000);

        // 8. Find required webElement 'Keep me sign in' checkbox and verify it's selected
        const keepMeSignInCheckBox = await $('//input[@type="checkbox"]');
        isKeepMeSignInBoxSelected = await keepMeSignInCheckBox.isSelected();
        expect(isKeepMeSignInBoxSelected, 'keepMeSignIn checkbox IS NOT selected').to.be.true; // <- true statement gives an error

    });

   
    it('TC-4: Verify feelsLikeTempValue is in between lowTempValue and highTempValue', async() => {
        /**
        * TC-4: https://www.darksky.net/
        * Darksky: Verify feelsLikeTempValue is in between lowTempValue and highTempValue 
        */ 
        
        /* 
        Manual testing steps:
        1. Launch https://www.darksky.net/
        2. Enter a city name in the search box
        3. Click on search button
        4. Verify 'feels like temp' value (without degree sign) is between low & high temperature values
        */

        // Automation:
        // 1. Launch website
        await browser.url('https://www.darksky.net/');

        // 2. Find required webElement and perform click
        const searchBarField = await $('//input[@type="text"]');
        searchBarField.click();

        // 3. Find required webElement and set Value "Los Angeles"
        if(searchBarField.getText() !== ' ') {
            searchBarField == '';
            await searchBarField.setValue("Los Angeles");
            const searchButton = await $('//img[@alt="Search Button"]');
            await searchButton.click();
            await browser.pause(2000);

        // 4. Get temperature of feels like, low & high and trim degree sign
            const feelsLikeTemp = await $('.feels-like-text');
            var feelsLikeTemperatureValue = await feelsLikeTemp.getText();
            const feelsVal = feelsLikeTemperatureValue.substring(0, feelsLikeTemperatureValue.length-1);

            const tempLow = await $('.low-temp-text');
            var tempLowValue = await tempLow.getText();
            const lowVal = tempLowValue.substring(0, tempLowValue.length-1);

            const tempHigh = await $('.high-temp-text');
            var tempHighValue = await tempHigh.getText();
            const highVal = tempHighValue.substring(0, tempHighValue.length-1);
    
        // 5. Compare values, if feelLikeTemp is between low & high temp -> execute if-block, otherwise else-block 
            if (feelsVal > lowVal && feelsVal < highVal) {
                console.log(`\n=======================`)
                console.log(`feelsLikeTemp = ${feelsVal} is between tempLow = ${lowVal} and tempHigh = ${highVal}`);
                console.log(`=======================\n`)
            } else {
                console.log(`\n=======================`)
                console.log(`feelsLikeTemp = ${feelsVal} IS NOT between tempLow = ${lowVal} and tempHigh = ${highVal}`)
                console.log(`=======================\n`)
            }
        }
        await browser.pause(2000);
    });  

})


