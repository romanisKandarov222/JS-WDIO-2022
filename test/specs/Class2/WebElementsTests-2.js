const { expect } = require("chai");

describe('WebElements Test cases', () => {

    it('TestCase using id-locator', async() => {

    // Manual testing steps:    
        /* 
        1. Launch default website
        2. type 'roman123@gmail.com' in username field
        3. type '!@#$%' in password field
        4. click on log in button
        */

    // Automation steps:
        // 1. Launch facebook.com 
        await browser.url('/');

        // 2. type 'roman123@gmail.com' as username
        const loginEmailInputBox = await $('#email');
        loginEmailInputBox.setValue('roman123@gmail.com');
        await browser.pause(3000);

        // 3. type '!@#$%' as password
        const loginPwdInputBox = await $('#pass')
        loginPwdInputBox.setValue('!@#$%');
        await browser.pause(3000);
        
        // 4. click on log in button
        const loginButton = await $('button[name=login]');
        loginButton.click();

        await browser.pause(10000);
    })

    it.only('Verify error message and link are displayed for incorrect credentials', async() => {

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
            await browser.pause(3000);
    
            // 3. type '!@#$%' as password
            const loginPwdInputBox = await $('#pass')
            await loginPwdInputBox.setValue('!@#$%');
            await browser.pause(3000);
            
            // 4. click on log in button
            const loginButton = await $('button[name=login]');
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

    it('Click Create New Account button', async() => {

    // Manual testing steps:    
            /* 
            1. Launch default website
            2. Click on Create new account button
            */    

    // Automation steps:
            // 1. Launch facebook.com 
            await browser.url('/');
    
            // 2. click on log in button
            const createNewAccountButton = await $('=Create new account');
            createNewAccountButton.click();
    
            await browser.pause(5000);
    })

    it('Click Create New Account button - using partial link-text', async() => {

    // Manual testing steps:    
        /* 
        1. Launch default website
        2. Click on Create new account button
        */    
    
    // Automation steps:
        // 1. Launch facebook.com 
        await browser.url('/');
        
        // 2. click on log in button
        const createNewAccountButton = await $('*=te n');
        createNewAccountButton.click();
        
        await browser.pause(7000);
    })

    it('Verify login input fields and button are enabled by default', async() => {

    // Manual testing steps:    
        /* 
        1. Launch default website
        2. Verify login email input field is enabled
        3. Verify login password input field is enabled
        4. Verify login button is enabled
        */
    
    // Automation steps:
        // 1. Launch facebook.com 
        await browser.url('/');
    
        // 2. Verify login email input field is enabled
        const loginEmailInputBox = await $('input[data-testid=royal_email]');
        const isLoginInputBoxEnabled = await loginEmailInputBox.isEnabled();
        expect(isLoginInputBoxEnabled, 'Login email input box IS NOT enabled').to.be.true;
        
        await browser.pause(3000);

        // 3. Verify login password input field is enabled
        const loginPwdInputBox = await $('input[placeholder=Password]');
        const isPwdInputBoxEnabled = await loginPwdInputBox.isEnabled();
        expect(isPwdInputBoxEnabled, 'Login password input box IS NOT enabled').to.be.true;
            
        await browser.pause(3000);

        // 4. Verify login button is enabled
        const loginButton = await $('button[name=login]');
        const isLoginButtonEnabled = await loginButton.isEnabled();
        expect(isLoginButtonEnabled, 'Login button IS NOT enabled').to.be.true;
    
        await browser.pause(5000);
    });

    it('Verify default no gender button is selected on Sign up page', async() => {

        // Manual testing steps:    
            /* 
            1. launch default website
            2. click on Create new account button
            3. verify that Sign up form doesn't have selected default gender 
            4. if not selected, click on Female gender
            5. verify that Female gender selected
            */
    
        // Automation steps:
            // 1. Launch facebook.com 
            await browser.url('/');
            
            // 2. click on Create new account button
            const createNewAccButton = await $('=Create new account');
            createNewAccButton.click();
    
            await browser.pause(4000);

            // 3. verify non of gender fields selected 
            const genderFemale = await $('input[value="1"]');
            const genderMale = await $('input[value="2"]');
            const genderCustom = await $('input[value="-1"]')

            // 4. verify that Sign up form doesn't have selected FEMALE gender  
            const isFemaleGenderSelected = await genderFemale.isSelected();
            expect(isFemaleGenderSelected, 'Female gender IS selected').to.be.false;
            
            // 5. verify that Sign up form doesn't have selected MALE gender  
            const isMaleGenderSelected = await genderMale.isSelected();
            expect(isMaleGenderSelected, 'Male gender IS selected').to.be.false;

            // 6. verify that Sign up form doesn't have selected CUSTOM gender  
            const isCustomGenderSelected = await genderCustom.isSelected();
            expect(isCustomGenderSelected, 'Custom gender IS selected').to.be.false;

            // 7. select FEMALE gender and verify it
            if(!isFemaleGenderSelected) {
                genderFemale.click();
                const isFemaleGenderSelected = await genderFemale.isSelected();
                expect(isFemaleGenderSelected, 'Female gender IS NOT selected').to.be.true;
                await browser.pause(1000);
            }
            
    })    
    
           
});