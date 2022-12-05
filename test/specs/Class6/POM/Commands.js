class Commands {

/**
 * 
    setValue
    getText
    cilck
    $
    getAttribute
    isDisplayed
    isEnabled
    isSelected
    selectByVisibleText
    selectByAttribute
    selectByIndex

 */

    /**
     * Generic function to find webElement
     * input: string(locator)
     */
    async findWebElement(locator) {
        return await $(locator);
    }

     /**
     * Generic function to find webElements
     * input: string(locator)
     */
      async findAllWebElements(locator) {
        return await $$(locator);
    }

    /**
     * Generic function to enter data in a WebElement
     * name: typeInWebElement
     * input: string(dataToEnter), string(locator)
     */
    async typeInWebElement(locator, dataToEnter) {
        /*
            1. find the webElement
            2. if found, type in it
            3. otherwise, wait for 1-second then start from step-1

            do above flow for 30-seconds
        */
        await $(locator).setValue(dataToEnter);
    }

    /**
     * Generic function to click a WebElement
     * name: clickWebElement
     * input: string(locator)
     */
    async clickWebElement(locator) {
        /*
            1. find the webElement
            2. if found, click it
            3. otherwise, wait for 1-second then start from step-1

            do above flow for 30-seconds
        */
        await $(locator).click();
    }

    /**
     * Generic function to get Text of a WebElement
     * name: getTextOfWebElement
     * input: string(locator)
     */
    async getTextOfWebElement(locator) {
        /*
            1. find the webElement
            2. if found, return Text
            3. otherwise, wait for 1-second then start from step-1

            do above flow for 30-seconds
        */
        return await $(locator).getText();
    }

    /**
     * Generic function to get Attribute value of a WebElement
     * name: getAttributeWebElement
     * input: string(locator), string(attrName)
     */
    async getAttributeWebElement(locator, attrName) {
        /*
            1. find the webElement
            2. if found, return attribute value
            3. otherwise, wait for 1-second then start from step-1

            do above flow for 30-seconds
        */
        return await $(locator).getAttribute(attrName);
    }

    async isWebElementSelected(locator) {
        return await $(locator).isSelected();
    }

    async isWebElementDisplayed(locator) {
        return await $(locator).isDisplayed();
    }

    /**
     * Generic function to select data in dropdown (using visible text)
     * name: selectDataInDropdown
     * input: string(locator dropdown), string(valueWantToSelect)
     */

     async selectDataInDropdown(locator, dataToSelect) {
        const dropdown = await $(locator);
        dropdown.selectByVisibleText(dataToSelect);
    }

    /**
     * Generic function to move mouse on any web-Element
     * name: moveMouseOn
     * input: locator
     */
    async moveMouse(locator) {
        await $(locator).moveTo();
    }

    /**
     * Generic function to get window handle
     * name: getHandle
     */

    async getHandle() {
        return await browser.getWindowHandle();
    }

    /**
     * Generic function to get ALL window handles
     * name: getHandles
     */

     async getHandles() {
        return await browser.getWindowHandles();
    }

    /**
     * Generic function to switch to a new handle
     * name: switchToWindowHandle
     * input: newHandle
     */

     async switchToWindowHandle(newHandle) {
        return await browser.switchToWindow(newHandle);
    }


}
module.exports = Commands;