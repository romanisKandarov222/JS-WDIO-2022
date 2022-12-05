const {expect} = require("chai");
const AmazonHomePage = require("../../POM/Amazon/AmazonHomePage");


const amazon = new AmazonHomePage();

describe('Lab practice: Amazon', async () => {

    it('Verify sort-function work as expected', async () => {
        
        /** Manual testing steps:
         * 1. Launch amazon.com
         * 2. Enter 'iphone' in search
         * 3. Sort result by Price: Low to High
         * 4. Verify all results are displayed in increasing order
         */

        //Automation:
        //1. Launch amazon.com
        await browser.url("https://amazon.com")

        //2. Find searchbar webElement and type in "iphone" request
        await amazon.searchItem('iphone');
        await browser.pause(2000);
        await amazon.clickSearchButton();
        await browser.pause(2000);

        //3. Sort result by Price: Low to High
        await amazon.clickSortButton();
        await amazon.selectLowToHighPrice();
        await browser.pause(2000);

        //4. Verify all results are displayed in increasing order
        expect(await amazon.isResultInIncreasingOrder(), 'Verify all results are displayed in increasing order').to.be.true;
        






    });



});