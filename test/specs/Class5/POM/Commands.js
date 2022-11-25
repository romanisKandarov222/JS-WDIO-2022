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



}
module.exports = Commands;