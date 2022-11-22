/**
 * Automate below testcase:
 * 
 * Due date: Nov 18 (EOD)
 * 
 * TC-1:
 * Steps:
 * 1. Launch facebook.com
 * 2. Click Create New Account
 * 3. Verify female-gender button is not selected
 * 4. Verify male-gender button is not selected
 * 5. Verify custom-gender button is not selected
 * 6. If female gender is NOT selected, then click on female gender radio button
 * 7. Verify female-gender button is selected
 *
 * 
 * 
 * 
 * 
 */
 const { expect } = require("chai");

 describe('WebElements Test cases', () => {
    
    it.only('Verify default no gender button is selected on Sign up page', async() => {

        /* 
        Manual testing steps:     
        1. launch default website
        2. click on Create new account button
        3. verify that Sign up form doesn't have selected default gender 
        4. if not selected, click on Female gender
        5. verify that Female gender selected
        */
    
        // Automation steps:
        // 1. Launch facebook.com 
        await browser.url('/');
            
        // 2. click on Create new account button
        const createNewAccButton = await $('=Create new account');
        await createNewAccButton.click();
    
        await browser.pause(4000);

        // 3. find web elements   
        const genderFemale = await $('input[value="1"]');
        const genderMale = await $('input[value="2"]');
        const genderCustom = await $('input[value="-1"]')

        // 4. verify that Sign up form doesn't have selected FEMALE gender  
        const isFemaleGenderSelected = await genderFemale.isSelected();
        expect(isFemaleGenderSelected, 'Female gender IS selected').to.be.false;
            
        // 5. verify that Sign up form doesn't have selected MALE gender  
        const isMaleGenderSelected = await genderMale.isSelected();
        expect(isMaleGenderSelected, 'Male gender IS selected').to.be.false;

        // 6. verify that Sign up form doesn't have selected CUSTOM gender  
        const isCustomGenderSelected = await genderCustom.isSelected();
        expect(isCustomGenderSelected, 'Custom gender IS selected').to.be.false;

        // 7. select FEMALE gender and verify it
        if(!isFemaleGenderSelected) {
            await genderFemale.click();
            const isFemaleGenderSelected = await genderFemale.isSelected();
            expect(isFemaleGenderSelected, 'Female gender IS NOT selected').to.be.true;
            await browser.pause(1000);
        }
    })    

 });