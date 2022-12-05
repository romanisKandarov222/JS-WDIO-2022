const Commands = require('../Commands');

class MetaPayHomePage {

commands = new Commands();

usingMetaPayLocator = '(//a[text()="Using Meta Pay"])[1]';
onlineCheckoutLocator = '//a[text()="Online Checkout"]';


async moveMouseOnUsingMetaPay() {
    await this.commands.moveMouse(this.usingMetaPayLocator);
}

async isUsingMetaPayDisplayed() {
    return await $(this.usingMetaPayLocator).isDisplayed()
}

async isOnlineCheckoutDisplayed() {
    return await $(this.onlineCheckoutLocator).isDisplayed()
}

async closeWindowsExceptMetaPay(){
    const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const title = await browser.getTitle();
        if (!title.startsWith('Meta Pay')) {
            await browser.closeWindow();
        }
    }
}

async switchToMetaPay(){
    const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const title = await browser.getTitle();
        if (title.startsWith('Meta Pay:')) {
            await browser.switchToWindow(handle);
            break;
        }
    }
}


}

module.exports = MetaPayHomePage;