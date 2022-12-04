const { expect } = require("chai");

describe('Multiple WebElements Tests', () => {

    /**
     * to find a webElement
     * function: $
     * return: webElement
     * 
     * to find multiple webElements
     * function: $$
     * return: an array of webElement [we1, we2, we3, we4, ...]
     */
    

    it('Verify there are 46 links on facebook login page', async () => {
       /**
        * 1. Launch facebook.com
        * 2. Verify there are 46 links on login page
        */
       // 1. Launch facebook.com
       await browser.url('https://www.facebook.com');

        // 2. Verify there are 46 links on login page
        /*
            need to find ALL a-tag, using tagName locator-strategy
            const webElement = await $('<tagName>');
        */
        const allLinks = await $$('<a>');

        expect(allLinks.length, 'total links are not 46').to.equal(46);

    });

    it('Get all temp values from timeline', async () => {
        
        await browser.url('https://www.darksky.net');

        const allTempElements = await $$('//span[starts-with(@class, "hour")]//span');

        const allTempValues = [];

        for (const tempElement of allTempElements) {
            allTempValues.push(await tempElement.getText());
        }
        console.log(`\n allTempValues -> ${allTempValues} \n`);

    });

    /**
     * Pick value from auto-suggestion
     */
    it('Pick value from auto-suggestion', async () => {

        /**
         * 1. Launch hotels.com
         * 2. Type 'nEw' in destination
         * 3. Select Manhattan from auto-suggestions
         */

        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com');

        // 2. Type 'nEw' in destination
        await $('//button[@aria-label="Going to"]').click();
        await $('#destination_form_field').setValue('nEw');

        await browser.pause(2000);

        /**
         * 1. Analyze in DOM if the auto-suggestions data is present as text-value or some-attribute's value
         * 2. Create a locator to get all auto-suggestions-elements
         * 3. use $$(findElements-function) to get all auto-suggestion-elements in an array
         * 4. use loop (for-of)
         *      pick an auto-suggestion-element from array
         *      apply getText or getAttribute (depends on step-1) on the auto-suggestion-element
         *      if (above-value is equals to the value-user-wants-to-click)
         *          click the auto-suggestion-element
         *          break;
         */

        const allSuggestions = await $$('//div[@class="truncate"]//strong');    // [we1, we2, we3, we4, ...]

        for (const suggestion of allSuggestions) {
            const webText = await suggestion.getText();
            if (webText.toLowerCase().localeCompare('Manhattan'.toLowerCase()) === 0) {
                await suggestion.click();
                break;
            }
        }

        await browser.pause(7000);

    });


    it('Select dates from Calendar', async () => {
        /**
         * 1. Launch hotels.com
         * 2. Select Dec-5 as Check-in
         * 3. Select Dec-12 as Check-out
         * 4. Click Done button
         */
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com'); 

        await $('#date_form_field-btn').click();

        await browser.pause(2000);

        const allDates = await $$('//button[starts-with(@aria-label, "Dec")]'); // [we1, we2, we3, we4, ...]
        
        for (const dateElement of allDates) {
            const dataDayValue = await dateElement.getAttribute('data-day');
            if (dataDayValue.localeCompare('5') === 0) {
                await dateElement.click();
                break;
            }
        }

        for (const dateElement of allDates) {
            const dataDayValue = await dateElement.getAttribute('data-day');
            if (dataDayValue.localeCompare('12') === 0) {
                await dateElement.click();
                break;
            }
        }

        await browser.pause(5000);

        await $('//button[text()="Done" and @data-stid]').click();

        await browser.pause(7000);

    });

    // 8:20pm



});