const Page = require('./page');

class BasicAuthPage extends Page {

    get congratulations() {
        return $('//p[contains(text(),"Congratulations!")]')
    };

    async grats() {
        return await this.congratulations.getText();
    }

    opening(user, pass) {
         return browser.url(`https://${user}:${pass}@the-internet.herokuapp.com/basic_auth`);
    }
}

module.exports = new BasicAuthPage();