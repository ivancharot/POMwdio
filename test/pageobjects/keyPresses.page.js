
const Page = require('./page');

class KeyPressesPage extends Page {

    get inputKeys(){
        return $('//*[@id="target"]')
    }

    get resultField(){
        return $('//*[@id="result"]')
    }

    async sendKeysToInput(key){
        await this.inputKeys.click()
        await browser.keys(key)
        return await this.resultField.getText();
    }

    open() {
        return super.open('key_presses')
    }
}

module.exports = new KeyPressesPage();