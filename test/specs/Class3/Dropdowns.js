const { expect } = require("chai");
const { it } = require("mocha");


/* 
There are 2 kinds of dropdowns:
____________________________________________________________________________________________________
    1. with <select> tag
        - option-tags in select-tag are present index-wise 
        - option-tags have value-attribute
        - option-tags have text-value (displayed on Webpage)

    Steps to interact with <select>-tag dropdown:
        1) find the dropdown webElement (or select-tag)
        2) use appropriate function in order to select specific value in dropdown:
        
        - selectByVisibleText() <- return type string
        - selectByAttribute() <- return type string
        - selectByIndex() <- return type number
          
____________________________________________________________________________________________________
    2. with any other tag

*/


describe('Dropdown test', () => {

    it('Select date of birth as 10 Oct 2010', async() => {

    // Manual testing steps:    
            /* 
            1. Launch default website
            2. Click on Create new account button
            3. Verify 10 Oct 2010 is selected from dropdown menu
            */    

    // Automation steps:
            // 1. Launch facebook.com 
            await browser.url('/');
    
            // 2. click on log in button
            const createNewAccountButton = await $('=Create new account');
            createNewAccountButton.click();
    
            await browser.pause(5000);   
            
            // 3. Select 10 in day dropdown
            const dayDropDown = await $('#day');
            await dayDropDown.selectByAttribute('value', '10');

            // 4. Select Oct in month dropdown
            const monthDropDown = await $('#month');
            await monthDropDown.selectByVisibleText('Oct');

            // 5. Select 2010 in year dropdown
            const yearDropDown = await $('#year');
            await yearDropDown.selectByIndex(12);

            await browser.pause(5000);

    })

});