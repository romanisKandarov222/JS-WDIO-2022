const Frontpage = require('../../POM/Darksky/Frontpage')
const { expect } = require("chai");

describe('Darksky Tests', () => {
    
    it('Homework-3: Verify "feel-like-temp" is between low and high temp values', async () => {
        const frontpage = new Frontpage();
        
        /* Manual testing steps:
        1. Launch https://darksky.net
        2. Enter required location (Los Angeles)
        3. Verify feels-like-temp is between low and high values
        */

        // Automation
        // 1. Launch https://darksky.net
        await browser.url('https://darksky.net');

        // 2. Enter required location (Los Angeles)
        await frontpage.enterParticularLocation('Los Angeles');
        await frontpage.clickOnSearchButton();

        // 3. Compare values, if feelLikeTemp is between low & high temp -> execute if-block, otherwise else-block 
        await frontpage.compareResults();
    
    });


    it.only('Lab Practice: Verify there are 12-data-points with 2-hours gap', async () => {
        const frontpage = new Frontpage();
        
        /* Manual testing steps:
        1. Launch https://darksky.net
        2. Verify there are 12-data-points with 2-hours gap on timeline
        */

        // Automation
        // 1. Launch https://darksky.net
        await browser.url('https://darksky.net');

        await browser.pause(2000);
        // 2. Find required webElements and verify there are 12-data-points with 2-hours gap on timeline
        expect(await frontpage.timeLineLength(), 'There are NOT 12-data-points with 2-hours gap on timeline').to.equal(12);
    
    });

});