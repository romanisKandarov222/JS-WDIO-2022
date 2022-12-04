const { expect } = require("chai");

describe('Practice', () => {
    it('Verify Church chair options count', () => {
        /**
         * 1. Launch https://www.classroomessentialsonline.com/
         * 2. Verify there are 7 option under church chairs
         */

        // 2. Verify there are 7 option under church chairs
        /**
         * 1. move mouse on 'Church Chairs'
         * 2. get locator for all Church chairs options
         * 3. find webElements ($$) using above locator [we1, we2, we3, ...]
         * 4. array.length === 7
         */
    });

    it('Verify Church chair options', async () => {
        /**
         * 1. Launch https://www.classroomessentialsonline.com/
         * 2. Verify the options under church chairs are displayed as below:
         *      18.5-in. Church Chairs
         *      20.5-in. Church Chairs
         *      21-in. Church Chairs 
         *      Economy Church Chairs
         *      Concealed Back Church Chairs
         *      Wood Frame Church Chairs
         *      Fabric and Frame Swatches
         */
        await browser.url('https://www.classroomessentialsonline.com');

        // 2. Verify there options under church chairs are:
        /**
         * 1. move mouse on 'Church Chairs' (partial link text)
         * 2. get locator for all Church chairs options
         * 3. find webElements ($$) using above locator [we1, we2, we3, ...]
         * 4. use loop to verify the text of webElement
         *      
         */

        const expectedOptions = ['18.5-in. Church Chairs', '20.5-in. Church Chairs']
        const actualOptions = [];

        await $('a[href=/church-chairs/]').moveTo();
        await browser.pause(1000);

        const churchChairOptions = await $$('//a[@href="/church-chairs/"]/following-sibling::*//a');

        for (const option of churchChairOptions) {
            actualOptions.push(await option.getText());
        }
        expect(actualOptions, '').to.deepEqual(expectedOptions);


        let allMatched = true;
        for (let i=0 ; i < expectedOptions.length ; i++) {
            const text = churchChairOptions[i].getText();
            // verifying (using expect) text === expectedOptions[i];
            // expect(text, '').to.equal(expectedOptions[i]);   <-- not recommended to use expect in loop
            if (text !== expectedOptions[i]) {
                allMatched = false;
                break;
            }
        }
        expect(allMatched, '').to.be.true;

    });

});