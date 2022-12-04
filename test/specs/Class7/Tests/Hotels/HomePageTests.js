const HomePage = require('../../POM/Hotels/HomePage');

describe('Hotels HomePage Tests', () => {
    
    const homePage = new HomePage();

    it('Pick value from auto-suggestion', async () => {

        // const homePage = new HomePage();
        /**
         * 1. Launch hotels.com
         * 2. Type 'nEw' in destination
         * 3. Select Manhattan from auto-suggestions
         */

        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com');

        // 2. Type 'nEw' in destination
        // await $('//button[@aria-label="Going to"]').click();
        // await $('#destination_form_field').setValue('nEw');
        await homePage.enterDestination('nEw');

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

        // const allSuggestions = await $$('//div[@class="truncate"]//strong');    // [we1, we2, we3, we4, ...]

        // for (const suggestion of allSuggestions) {
        //     const webText = await suggestion.getText();
        //     if (webText.toLowerCase().localeCompare('Manhattan'.toLowerCase()) === 0) {
        //         await suggestion.click();
        //         break;
        //     }
        // }

        await homePage.selectFromSuggestedDestinations('Manhattan')

        await browser.pause(7000);

    });
    

    it('Select dates from Calendar', async () => {

        // const homePage = new HomePage();
        /**
         * 1. Launch hotels.com
         * 2. Select Dec-5 as Check-in
         * 3. Select Dec-12 as Check-out
         * 4. Click Done button
         */
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com'); 

        await homePage.openCalendar();

        await browser.pause(2000);

        await homePage.selectCheckInDate('December 5 2022');

        await homePage.selectCheckOutDate('December 15 2022');

        await browser.pause(5000);

        await homePage.clickDoneOnCalendar();

        await browser.pause(7000);

    });


    it.only('Select dates from any Calendar', async () => {

        // const homePage = new HomePage();
        /**
         * 1. Launch hotels.com
         * 2. Select Dec-5 as Check-in
         * 3. Select Dec-12 as Check-out
         * 4. Click Done button
         */
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com'); 

        await homePage.openCalendar();

        await browser.pause(2000);

        await homePage.selectCheckInDate('May 25 2023');

        await homePage.selectCheckOutDate('June 5 2023');

        await browser.pause(7000);

        await homePage.clickDoneOnCalendar();

        await browser.pause(7000);

        /**
         * 1. Launch hotels.com
         * 2. Select May 25 2023 as Check-in
         * 3. Select June 5 2023 as Check-out
         * 4. Click Done button
         */

        /**
         * create locator to get Both heading
         * $$
         * loop
         *      check if any heading is equals to interestedHeading
         * 
         * 
         * 
         * create locator to get first heading
         * $
         * click > to get interestedHeading in left side calendar
         * 
         * 
         */
    });

});