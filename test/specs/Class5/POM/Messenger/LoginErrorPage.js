const Commands = require('../Commands');

class LoginErrorPage {
    commands = new Commands();

    errorMsgLocator = '//a[contains(text(), "Find your")]';
    continueButtonLocator = '//button[text() = "Continue"]';
    errorPageKeepMeSignInLocator = '//input[@type="checkbox"]';


async isMessengerLoginErrorDisplayed() {
    return await $(this.errorMsgLocator).isDisplayed();
}

async continueButtonIsEnabled() {
    return await $(this.continueButtonLocator).isEnabled();
}

async isKeepMeSignInSelected() {
    return await $(this.errorPageKeepMeSignInLocator).isSelected();
}

}

module.exports = LoginErrorPage;