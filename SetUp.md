1. Create a new repo in github
2. Clone the new repo in local
3. Go in to the new repo in local
4. Create new branch
5. Checkout on the new-branch
6. Create node project
    Command: npm init –y
7. Install WebDriver-IO cli
    Command: npm install @wdio/cli
8. Set up wdio config file
    Command: npx wdio config
    Above command will ask few questions, ans them as below:
    ? Where is your automation backend located? -> On my local machine
    ? Which framework do you want to use? -> mocha
    ? Do you want to use a compiler? -> No!
    ? Where are your test specs located? -> (./test/specs/**/*.js)
    ? Do you want WebdriverIO to autogenerate some test files? (Y/n) -> n
    ? Which reporter do you want to use? -> spec
    ? Do you want to add a plugin to your test setup? -> wait-for
    ? Do you want to add a service to your test setup? -> chromedriver
    ? What is the base url? -> https://www.facebook.com
    ? Do you want me to run `npm install` -> Yes
9. Install chai
    Command: npm install chai
10. Install moment
    Command: npm install moment


Chropath Extension:
https://chrome.google.com/webstore/detail/chropath/ljngjbnaijcbncmcnjfhigebomdlkcjo