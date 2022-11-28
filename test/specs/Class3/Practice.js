const { expect } = require("chai");
const { it } = require("mocha");
const moment = require ('moment');

// Homework due date: Nov 21 (Mon)


describe('Practice test cases:', () => {

    it('Verify "feels like temperature" from DarkSky', async() => {
        
        /* 
        Manual testing steps:
        1. Launch https://www.darksky.net/
        2. Enter a zip code in the search box
        3. Click on search button
        4. Verify 'feels like temp' value (without degree sign)
        */

        // Automation:
        // 1. Launch website
        await browser.url('https://www.darksky.net/');

        // 2. Find required webElement and perform click
        const searchBarField = await $('//input[@type="text"]');
        searchBarField.click();

        // 3. Set zip code 11214 and print value of feelsLikeTemp without degree sign
        if(searchBarField.getText() !== ' ') {
            searchBarField == '';
            await searchBarField.setValue("11214");
            const searchButtonClick = await $('.searchButton');
            await searchButtonClick.click();

            await browser.pause(2000);

            const feelsLikeTemperature = await $('.feels-like-text');
            var feelsLikeTemperatureValue = await feelsLikeTemperature.getText();
            console.log(`feels like temperature -> ${feelsLikeTemperatureValue.substring(0, feelsLikeTemperatureValue.length-1)}`);
        }
        await browser.pause(2000);

    });  

    it('Verify "no gender selected" error on FB SignUp form', async() => {
        
        /* 
        Manual testing steps:
        1. Launch webpage
        2. Click create new account
        3. Fill up required fields with data except gender
        4. Click on sign up button
        5. Verify gender error displayed   
        */


        // Automation:
        // 1. Launch www.facebook.com
        await browser.url('/');

        // 2. click on log in button
        const createNewAccountButton = await $('=Create new account');
        createNewAccountButton.click();

        await browser.pause(2000);

        // 3. Enter required data except gender selection
        await $('//input[@aria-label="First name"]').setValue('FIRST');
        await $('//input[contains(@name, "last")]').setValue('LAST');
        await $('//input[@name="reg_email__"]').setValue('989898989@.com');
        await $('//input[contains(@id, "word_")]').setValue('!@#$%^');
        await $('//select[@title="Day"]').selectByVisibleText('20');
        await $('//select[contains(@name, "ay_m")]').selectByVisibleText('Mar');
        await $('//select[contains(@id, "ear")]').selectByVisibleText(1988);

        // 4. Click on 'Sign Up' button
        const signUpButton = await $('button[name="websubmit"]');
        await signUpButton.click();

        // 5. Find webElement of error and verify it's displayed
        const genderErrorMsg = await $('div*=change who can'); 
        const isGenderErrorMsgDisplayed = await genderErrorMsg.isDisplayed();
        expect(isGenderErrorMsgDisplayed, 'Gender msg is NOT displayed').to.be.true;
        await browser.pause(2000);
    });    

    it.only('Verify money conversion works as expected', async() => {

        /* 
 ?      Manual testing steps:
        1. Launch https://www.oanda.com
        2. Click on 'See converter' link
        3. Verify expected money conversion from Bitcoin to Dollars 
        */

        //? Automation steps:
        // 1. Launch https://www.oanda.com

        await browser.url('https://www.oanda.com');

        // 2. Find required webElement 'See converter' link and perform click
        const seeConverterLink = '//a[contains(text(),"See conv")]';
        await $(seeConverterLink).click();

        await browser.pause(2000);

        // 3. Find required webElement in dropdown 'BTC'-option and perform click
        const openDropDown = '//button[@aria-label="Open"]';
        await $(openDropDown).click();

        await browser.pause(3000);

        const bitCoinOption = '//div[@id="cc-main-conversion-block"]//div[@class="flag flag-btc"]';
        await $(bitCoinOption).click();

    });

})

