
class HomePage {
    
    supportLinkLocator = '//span[text()="Support"]';

    async isSupportOculusLinkDisplayed() {
        return await $(this.supportLinkLocator).isDisplayed();
    }

    async isOculusLaunchedInNewWindow() {
        const allHandles = await browser.getWindowHandles();
        return allHandles.length;
    }

}

module.exports = HomePage;