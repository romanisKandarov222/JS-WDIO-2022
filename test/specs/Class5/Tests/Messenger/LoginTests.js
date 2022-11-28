const LoginPage = require('../../POM/Messenger/LoginPage')
const LoginErrorPage = require('../../POM/Messenger/LoginErrorPage')
const { expect } = require('chai');


describe('Messenger Test Suite', () => {
    
    it.only('Homework-3: Verify user gets error when submit empty login on messenger screen', async () => {
        const messenger = new LoginPage();
        const messengerError = new LoginErrorPage();
        
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

        // Automation
        // 1. Launch www.facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Find required webElement 'Messenger' and perform click
        await messenger.clickMessengerLink();

        await browser.pause(2000);

        // 3. Find required webElement 'Keep me sign in' checkbox and verify it's not selected
        expect(await messenger.checkKeepMeSignInIsSelected(), 'Keep me sign in IS selected').to.be.false;

        // 4. Find required webElement "Messenger login button" and perform click
        await messenger.clickMessengerLoginButton();

        // 5. Verify error "Find your account and log in." is displayed
        expect(await messengerError.isMessengerLoginErrorDisplayed(), 'Login error message is NOT displayed').to.be.true;
        
        await browser.pause(2000);

        // 6. Find required webElement 'Continue' and verify it's enabled
        expect(await messengerError.continueButtonIsEnabled(), 'Continue button is NOT displayed').to.be.true;

        // 7. Find required webElement 'Keep me sign in' checkbox and verify it's not selected
        expect(await messenger.checkKeepMeSignInIsSelected(), 'Keep me sign in IS selected').to.be.false;

        // 8. Find required webElement 'Keep me sign in' box and perform click
        await messenger.clickKeepMeSignInCheckbox();

        await browser.pause(5000);

        // 9. Find required webElement 'Keep me sign in' checkbox and verify it's selected
        
        expect(await messengerError.isKeepMeSignInSelected(), 'keepMeSignIn checkbox IS NOT selected').to.be.true; 
    });


});