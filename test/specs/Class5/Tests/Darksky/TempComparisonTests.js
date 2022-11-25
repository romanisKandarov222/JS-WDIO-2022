const Frontpage = require('../../POM/Darksky/Frontpage')

describe('Temp Comparison Test Suite', () => {
    
    it.only('Homework-3: Verify "feel-like-temp" is between low and high temp values', async () => {
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

});