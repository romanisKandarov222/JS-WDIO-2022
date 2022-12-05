const Commands = require('../Commands');
const Dates = require('../../../Class5/Utils/Dates');
const { particularDateFormat } = require('../../Utils/Dates');


class CreateNewAccount {
    
    commands = new Commands();
    date = new Dates();

    createNewAccLocator = '//a[text()="Create New Account" or text()="Create new account"]';  

    dayDropDown = '#day';
    dayLocator = '//select[@id="day"]//option[@selected="1"]';

    monthDropDown = '#month';
    monthLocator = '//select[@id="month"]//option[@selected="1"]';

    yearDropDown = '#year';
    yearLocator = '//select[@id="year"]//option[@selected="1"]';


    async clickCreateAccButton() {
        await this.commands.clickWebElement(this.createNewAccLocator);
        
    }

    async compareDates() {

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
        return actualDate == currentDate ? true : false;
        
    }

    async getDefaultSelectedDate() {
        return this.commands.getTextOfWebElement(this.dayLocator);
    }

    async getDefaultSelectedMonth() {
        return this.commands.getTextOfWebElement(this.monthLocator);
    }

    async getDefaultSelectedYear() {
        return this.commands.getTextOfWebElement(this.yearLocator);
    }
    
}

module.exports = CreateNewAccount;