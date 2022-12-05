const Commands = require('../Commands');

class LoginPage {

    commands = new Commands();

    // Locators for web-Elements on the LoginPage (variables)
    loginEmailLocator = '#email';
    loginPassLocator = '#pass';
    loginButtonLocator = '<button>';
    oculusLocator = '=Oculus';
    instagramLocator = '=Instagram';
    portalLocator = '=Portal';
    metaPayLocator = '=Meta Pay';

    // functions to interact with the web-Elements on the LoginPage
    async enterLoginEmail(userEmail) {
        await this.commands.typeInWebElement(this.loginEmailLocator, userEmail);
    }

    async enterLoginPassword(userPwd) {
        await this.commands.typeInWebElement(this.loginPassLocator, userPwd);
    }

    async clickLoginInButton() {
        await this.commands.clickWebElement(this.loginButtonLocator);
    }

    async clickOculusLink() {
        await this.commands.clickWebElement(this.oculusLocator);
    }

    async clickPortalLink() {
        await this.commands.clickWebElement(this.portalLocator);
    }

    async clickInstagramLink() {
        await this.commands.clickWebElement(this.instagramLocator);
    }

    async clickMetaPayLink() {
        await this.commands.clickWebElement(this.metaPayLocator);
    }

    async switchToOculusHandle() {
        const originHandle = await browser.getWindowHandle();
        const allHandles = await browser.getWindowHandles();
        
        for (const handle of allHandles) {
            if(handle !== originHandle) {
                browser.switchToWindow(handle);
                break;
            }
        } 
    }

}
module.exports = LoginPage;