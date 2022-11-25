const Commands = require('../Commands');
const Dates = require('../../../Class5/Utils/Dates');
const { particularDateFormat } = require('../../Utils/Dates');


class CreateNewAccount {
    
    commands = new Commands();
    date = new Dates();

    createNewAccLocator = '=Create new account';  

    dayDropDown = '//select[@aria-label="Day"]';
    dayLocator = '//select[@aria-label="Day"]//option[@selected="1"]';

    monthDropDown = '#month';
    monthLocator = '//select[@aria-label="Month"]//option[@selected="1"]';

    yearDropDown = '#year';
    yearLocator = '//select[@aria-label="Year"]//option[@selected="1"]';


    async clickCreateAccButton() {
        await this.commands.clickWebElement(this.createNewAccLocator);
        
    }

    async compareDates() {

        //const monthCurrent = await this.commands.findWebElement(this.monthDropDown);
        await this.commands.findWebElement(this.monthDropDown);
        var month = '';
        if(this.monthDropDown) {
            const currentMonth = await this.commands.findWebElement(this.monthLocator);
            month = await currentMonth.getText();
        }

        await this.commands.findWebElement(this.dayDropDown);
        var day = '';
        if(this.dayDropDown) {
            const currentDay = await this.commands.findWebElement(this.dayLocator);
            day = await currentDay.getText();
        }

        await this.commands.findWebElement(this.yearDropDown);
        var year = '';
        if(this.yearDropDown) {
            const currentYear = await this.commands.findWebElement(this.yearLocator);
            year = await currentYear.getText();
        }
        
        var actualDate = month + ' ' + day + ' ' + year;
        var currentDate = particularDateFormat();
        if(actualDate == currentDate) {
            console.log(`${actualDate}`);
            console.log(`${currentDate}`);
            return true;
        } else {
            return false;
        }
    }
    
}

module.exports = CreateNewAccount;