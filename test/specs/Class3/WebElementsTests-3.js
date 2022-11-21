const { expect } = require("chai");
const { it } = require("mocha");

describe('WebElements Test cases', () => {

    it('Verify error message and link are displayed for incorrect credentials', async() => {

        // Manual testing steps:    
            /* 
            1. launch default website
            2. type 'qwerty' in username field
            3. type '!@#$%' in password field
            4. click on log in button
            5. verify error is displayed
            */
    
        // Automation steps:
            // 1. Launch facebook.com 
            await browser.url('/');
    
            // 2. type 'roman123@gmail.com' as username
            const loginEmailInputBox = await $('#email');
            await loginEmailInputBox.setValue('qwerty');
            await browser.pause(2000);
    
            // 3. type '!@#$%' as password
            const loginPwdInputBox = await $('#pass')
            await loginPwdInputBox.setValue('!@#$%');
            await browser.pause(2000);
            
            // 4. click on login button
            const loginButton = await $('<button>');
            await loginButton.click();
    
            await browser.pause(12000);

            // 5. verify login error text and link are displayed
            const errorMessageLink = await $('*=Forgot');
            const isLoginErrorLinkDisplayed = await errorMessageLink.isDisplayed();
            expect(isLoginErrorLinkDisplayed, 'Login error link IS NOT displayed').to.be.true;

            const isLoginErrorLinkEnabled = await errorMessageLink.isEnabled();
            expect(isLoginErrorLinkEnabled, 'Login error link IS NOT enabled').to.be.true;

            const loginErrorMsgText = await $('div*=The password you');
            const isLoginErrorMsgDisplayed = await loginErrorMsgText.isDisplayed();
            expect(isLoginErrorMsgDisplayed, 'Login error message is NOT displayed').to.be.true; 
    })   
    
    it('Verify default state (texts) of login/password fields', async() => {

        // Manual testing steps:    
            /* 
            1. launch default website
            2. verify login email field displays default text sa "Email address or phone number"
            3. verify login password field displays default text sa "Password"
            4. verify login button displays default text sa "Log In"
            */
    
        // Automation steps:
            // 1. Launch facebook.com 
            await browser.url('/');

            // 2. Verify loginEmail has default text "Email address or phone number"
            const loginFieldDefaultText = "Email or phone number";
    
            // 3. find webElements on particular page and verify expected result matches with actual 
            const loginEmailField = await $('input[data-testid*=al_e]');
            const actualLoginEmailFieldText = await loginEmailField.getAttribute('placeholder');
            expect(actualLoginEmailFieldText, 'Login email field text is NOT as expected').to.equal(loginFieldDefaultText);

            const loginFieldPwdDefaultText = "Password";
            const loginPasswordField = await $('input[data-testid*=royal_p]');
            const actualLoginPasswordFieldText = await loginPasswordField.getAttribute('placeholder');
            expect(actualLoginPasswordFieldText, 'Login password field text is NOT as expected').to.equal(loginFieldPwdDefaultText);
            
            // 4. Verify text of login button has default value "Log in" 
            const loginButtonDefaultText = "Log In";
            const loginButton = await $('<button>');
            const actualLoginButtonText = await loginButton.getText();
            expect(actualLoginButtonText, 'Login button text is NOT as expected').to.equal(loginButtonDefaultText);
            

            
    })   


    it('Complete sign up form with xpath', async() => {
        /* 
        Manual testing steps:
        1. Launch webpage
        2. Click create new account
        3. Fill up required fields with data
        */


        // Automation:
        // 1. Launch www.facebook.com
        await browser.url('/');

        // 2. click on log in button
        const createNewAccountButton = await $('=Create new account');
        createNewAccountButton.click();

        await browser.pause(2000);

        // 3. Enter required data
        await $('//input[@aria-label="First name"]').setValue('FIRST');
        await $('//input[contains(@name, "last")]').setValue('LAST');
        await $('//input[@name="reg_email__"]').setValue('989898989@.com');
        await $('//input[contains(@id, "word_")]').setValue('!@#$%^');
        await $('//select[@title="Day"]').selectByVisibleText('20');
        await $('//select[contains(@name, "ay_m")]').selectByVisibleText('Mar');
        await $('//select[contains(@id, "ear")]').selectByVisibleText(1988);
        await $('//label[contains(text(), "Ma")]').click();

        
        await browser.pause(2000);
    })
    
});