
const Page = require('../pageobjects/page');

class DropdownPage extends Page {

    get dropdown() {
        return $('*//select[@id="dropdown"]')
    }

    get dropItems() {
        return $$("*//select[@id='dropdown']/*")
    }

    async dropItemsList() {
        const items =  await this.dropItems.map(el => el.getText())
        const itemSelected = await this.dropItems.map(el => el.getAttribute('selected')).map(el => !!el)
        const itemDisabled = await this.dropItems.map(el => el.getAttribute('disabled')).map(el => !!el)
        const itemValue = await this.dropItems.map(el => el.getAttribute('value'))
        return await items.reduce((arrayOfItems, item, index) => {
            return [...arrayOfItems, {'name': item, 
                                'selected': itemSelected[index],
                                'disabled': itemDisabled[index],
                                'value': itemValue[index]}]
        },[])
    }


    open(){
        return super.open('dropdown');
    }

}

module.exports = new DropdownPage();