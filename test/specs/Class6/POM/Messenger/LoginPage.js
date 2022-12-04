const Commands = require('../Commands');

class LoginPage {
    commands = new Commands();

    messengerLinkLocator = '//a[@title="Check out Messenger."]';
    keepMeSignInLocator = '//label[contains(text(), "Keep me")]';
    messengerLogInLocator = '//button[@name="login"]';
    

async clickMessengerLink() {
    await this.commands.clickWebElement(this.messengerLinkLocator);
}

async checkKeepMeSignInIsSelected() {
    return await $(this.keepMeSignInLocator).isSelected();
}

async clickMessengerLoginButton() {
    await this.commands.clickWebElement(this.messengerLogInLocator);
}

async clickKeepMeSignInCheckbox() {
    await this.commands.clickWebElement(this.keepMeSignInLocator);
}

}

module.exports = LoginPage;