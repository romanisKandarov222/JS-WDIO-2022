/**  
mocha framework -> helps to write testCases
code block:
    describe-block
        block which represents test-suite for a feature

    it-block
        block which represents a testCase

WebDriver global variable:
    browser
*/

const { expect } = require("chai");


describe('Sample TestCase', () => {

    it('TestCase-1', () => {

        const res = 2 + 2;
        //verify res is equal 4
        expect(res, '').to.equal(4);

    });

    //function 'it.only' is using when we want to execute one particular testCase

    it('Launch facebook.com', async () => {

        //to launch a webpage
        await browser.url('https://www.facebook.com');

        //to pause the execution of testCase/code use 'pause' function
        //input in miliSeconds
        browser.pause(2000);

    });

    it('Verify facebook url', async () => {

        /* 
        1. Launch chrome browser
        2. Launch 'http://www.facebook.com'
        */
        await browser.url('/');
        
        /* 
        3. Verify the url is 'http://www.facebook.com'

        To get the current-url on the web page  
        function: getUrl()
        return-type: String
        */
       const currentUrl = await browser.getUrl();
       const expectedUrl = 'https://www.facebook.com/';
       expect(currentUrl, 'facebook.com does not to go expected url').to.equal(expectedUrl);
    
    });

    it('Verify facebook title', async () => {

        /* 
        1. Launch chrome browser
        2. Launch 'http://www.facebook.com'
        */
        await browser.url('/');
        
        /*
        3. Verify the title is 'Facebook - log in or sign up'

        To get the current title on the web page  
        function: getTitle()
        return-type: String
        */
       const currentUrl = await browser.getTitle();
       const expectedUrl = 'Facebook - log in or sign up';
       expect(currentUrl, 'facebook.com does not have expected title').to.equal(expectedUrl);
    
    });

    it('Misc functions from browser', async () => {

        await browser.url('/');

        /* 
        to get the windowHandle stored in browser-object
        function: getWindowHandle()
        return-type: string
        */

        //get Window Handle (particular ID for particular window in browser)
        const windowHandle = await browser.getWindowHandle();
        console.log(`\n windowHandle -> ${windowHandle}\n`);

        await browser.pause(5000);

        //to go back in browser -> back()
        await browser.back();
        await browser.pause(3000);

        //to go forward in browser -> forward()
        await browser.forward();
        await browser.pause(3000);

        //refresh() -> refresh page
        await browser.refresh();
        await browser.pause(3000);

        /* 
        ways to refresh page:
            1. back() -> forward()
            2. get current-url (getUrl()) & launch it 
        */
        const currUrl = await browser.getUrl();
        await browser.url(currUrl);

        await browser.pause(3000);




    });

    it('Verify facebook title starts with "Facebook"', async () => {

        /* 
        1. Launch chrome browser
        2. Launch 'http://www.facebook.com'
        */
        await browser.url('/');
        
        /*
        3. Verify the title starts with "Facebook"
        */

       const currentTitle = await browser.getTitle();
       const expectedStartsWith = 'Facebook';
       const isTitleStartsAsExpected = currentTitle.toLowerCase().startsWith(expectedStartsWith.toLowerCase());
       expect(isTitleStartsAsExpected, 'Facebook title does not start with "Facebook"').to.be.true;
    
    });


})