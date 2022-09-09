
const Page = require('./page');

class CheckBoxesPage extends Page{

    get checkboxes (){
        return $$('//*[@id="checkboxes"]/input')
    }

    get checkBoxContainer (){
        return $('//*[@id="checkboxes"]')
    }
    // get checkboxesNames (){
    //     return $$('//*[@id="checkboxes"]/input/following-sibling::text()')
    // }

    async ifChecked() {
        return await this.checkboxes.map(el => el = el.getAttribute('checked')).map(el=>!!el)
    }

    async boxNames() {
        const text = await this.checkBoxContainer.getText();
        return await text.split(/(?<=^checkbox\s\d+)\s*/gm)
    }
    // names() {
    //     return this.checkboxesNames
    // }
    
    async checkBoxCollection() {
        const checkBoxes = await this.boxNames();
        const boxState = await this.ifChecked();
        return checkBoxes.reduce((obj, el, i) => {
            return {...obj, [el]:boxState[i]}
        },{})
    }

    open () {
        return super.open('checkboxes')}

}

module.exports = new CheckBoxesPage();