const Commands = require('../Commands');

class Frontpage {

    commands = new Commands();

    locationInputLocator = '//input[@type="text"]';
    searchButtonLocator = '//img[@alt="Search Button"]';
    feelsLikeTempLocator = '.feels-like-text';
    lowTempLocator = '.low-temp-text';
    highTempLocator = '.high-temp-text';


async enterParticularLocation(location) {
    await this.commands.typeInWebElement(this.locationInputLocator, location);
}

async clickOnSearchButton() {
    await this.commands.clickWebElement(this.searchButtonLocator);
}

async compareResults() {
    const feelsLikeTemp = await this.commands.getTextOfWebElement(this.feelsLikeTempLocator);
    const feelsVal = feelsLikeTemp.substring(0, feelsLikeTemp.length-1);

    const tempLow = await this.commands.getTextOfWebElement(this.lowTempLocator);
    const lowVal = tempLow.substring(0, tempLow.length-1);

    const tempHigh = await this.commands.getTextOfWebElement(this.highTempLocator);
    const highVal = tempHigh.substring(0, tempHigh.length-1);

    if (feelsVal > lowVal && feelsVal < highVal) {
        console.log(`\n=======================`)
        console.log(`feelsLikeTemp = ${feelsVal} is between tempLow = ${lowVal} and tempHigh = ${highVal}`);
        console.log(`=======================\n`)
    } else {
        console.log(`\n=======================`)
        console.log(`feelsLikeTemp = ${feelsVal} IS NOT between tempLow = ${lowVal} and tempHigh = ${highVal}`)
        console.log(`=======================\n`)
    }
}

}
module.exports = Frontpage;
