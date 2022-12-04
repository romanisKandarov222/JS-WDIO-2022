const { expect } = require("chai");
const moment = require("moment");

describe('Practice - 2', () => {
    
    it('Verify the past dates are disabled in Calendar', async () => {
        /**
         * 1. Launch hotels.com
         * 2. Verify past dates are disabled in calendar
         */
        await browser.url('https://www.hotels.com');

        await $('#date_form_field-btn').click();
        await browser.pause(1000);

        // 2. Verify past dates are disabled in calendar
        /**
         * 1. find the locator for allDates in current-month
         * 2. using moment: find current-date
         * 3. loop from date-1 to date-current
         *      verify past-dates are disabled
         */
        const dates = await $$('//button[starts-with(@aria-label, "Dec")]');    // [we1, we2, we3, ...]

        console.log(dates);

        const currentDate = moment().date();
        
        let allPastDatesDisabled = true;
        for (let i=1 ; i <= currentDate ; i++) {
            // expect(await dates[i-1].getAttribute('disabled'), '').to.equal('true');  <- not recommended to use expect in loop
            if (await dates[i-1].getAttribute('disabled') !== 'true') {
                allPastDatesDisabled = false;
                break;
            }
        }
        expect(allPastDatesDisabled, 'All past dates are not disabled').to.be.true;



        let disabledDateCounter = 0;
        for (const dateElement of dates) {
            if (await dateElement.getAttribute('disabled') === 'true') {
                disabledDateCounter++;
            }
        }
        expect(disabledDateCounter, 'All past dates are not disabled').to.equal(currentDate-1);



        const allPastDates = await $$('//button[starts-with(@aria-label, "Dec") and @disabled]');   // [we1, we2]
        expect(allPastDates.length, '').to.equal(currentDate-1);
        
    });


    it('Verify user is able to list their property', async () => {

        /**
         * 1. Launch hotels.com
         * 2. Click on 'List your Property'
         * 3. Complete the flow
         */
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com');

        // 2. Click on 'List your Property'
        await $('div=List your property').click();
        await browser.pause(2000);

        // 3. Complete the flow
        /**
         * all handles [h1, h2]
         * current handle [h]
         * switch on window (which is not equal to h)
         * 
         */
        const allHandles = await browser.getWindowHandles();
        const homePageHandle = await browser.getWindowHandle();
        for (const handle of allHandles) {
            if (handle !== homePageHandle) {
                await browser.switchToWindow(handle);
                break;
            }
        }

        await $('p=Lodging').click();

        await browser.pause(7000);

        
    });

    it('Verify there are 12-data-points with 2-hours gap', () => {
        /**
         * 1. Launch darksky.net
         * 2. Verify there are 12-data-points with 2-hours gap on timeline
         */
    });

    it('Verify sort-function work as expected', () => {
        /**
         * 1. Launch amazon.com
         * 2. Enter 'iphone' in search
         * 3. sort result by Price:Low to High
         * 4. Verify all results are displayed in increasing order
         */
    });


});