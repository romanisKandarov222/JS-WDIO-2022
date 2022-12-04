const LoginErrorPage = require('../../POM/Facebook/LoginErrorPage');
const LoginPage = require('../../POM/Facebook/LoginPage');
const MetaPayHomePage = require('../../POM/MetaPay/MetaPayHomePage');
const HomePage = require('../../POM/Oculus/HomePage');
const { expect } = require('chai');


describe('Login Test Suite', () => {

    const loginPage = new LoginPage();
    const loginErrorPage = new LoginErrorPage();
    const homePageOculus = new HomePage();
    const metaPay = new MetaPayHomePage();
    
    it('Homework-3: Verify user gets error for invalid credentials', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Enter invalid credentials (@#$%^& / abcd@1234)
         * 3. Verify error is displayed -> The email address or mobile number you entered isn't connected to an account.
         */

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com');

        // 2. Enter invalid credentials (@#$%^& / abcd@1234)
        await loginPage.enterLoginEmail('@#$%^&');
        await loginPage.enterLoginPassword('abcd@1234');
        await loginPage.clickLoginInButton();

        // 3. Verify error is displayed -> The email address or mobile number you entered isn't connected to an account.
        expect(await loginErrorPage.isLoginErrorDisplayed(), 'Login error message is NOT displayed').to.be.true;
        
    });

    it('Homework-4: Verify the Oculus page is launched in new window', async () => {
        /** Manual testing steps
         * 1. Launch facebook.com
         * 2. Click on Oculus
         * 3. Verify Support tab is displayed
         * 4. Verify the Oculus page is launched in new window
        */

        // Automation:
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com');

        // 2. Click on Oculus link
        await loginPage.clickOculusLink();
        await browser.pause(2000);

        await loginPage.switchToOculusHandle();
    
        await browser.pause(3000);

        // 3. Verify Support tab is displayed
        expect(await homePageOculus.isSupportOculusLinkDisplayed(), 'Support tab is NOT displayed').to.be.true;

        // 4. Verify the Oculus page is launched in new window
        expect(await homePageOculus.isOculusLaunchedInNewWindow(), 'Oculus page is launched in new window').to.equal(2);

    });


    it.only('Homework-4: Verify "Online Checkout" option is displayed at Meta Pay', async () => {
        
        /**
         * 1. Launch facebook.com
         * 2. Click on Instagram
         * 3. Click on Portal
         * 4. Click on Oculus
         * 5. Click on Meta Pay
         * 6. Close all windows except 'Meta Pay' window
         * 7. Verify 'Using Meta Pay' is displayed
         * 8. Move mouse on 'Using Meta Pay'
         * 9. Verify 'Online Checkout' option is displayed
        */

        // Automation:
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com');

        // 2. Click on Instagram
        await loginPage.clickInstagramLink();
        await browser.pause(1000);
        // 3. Click on Portal    
        await loginPage.clickPortalLink();
        await browser.pause(1000);
        // 4. Click on Oculus
        await loginPage.clickOculusLink();
        await browser.pause(1000);
        // 5. Click on Meta Pay
        await loginPage.clickMetaPayLink();
        await browser.pause(1000);

        

        // 6. Close all windows except 'Meta Pay' window
        await metaPay.closeWindowsExceptMetaPay();
        // 7. Switch to Meta pay window and verify 'Using Meta Pay' is displayed
        await metaPay.switchToMetaPay();

        expect(await metaPay.isUsingMetaPayDisplayed(), 'Using Meta Pay is NOT displayed').to.be.true;   
        await browser.pause(2000);

        // 8. Move mouse on 'Using Meta Pay'
        metaPay.moveMouseOnUsingMetaPay();
        // 9. Verify 'Online Checkout' option is displayed
        await browser.pause(2000);
        expect(await metaPay.isOnlineCheckoutDisplayed(), 'Online Checkout is NOT displayed').to.be.true;   

         
    });
});