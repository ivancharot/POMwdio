const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const KeyPressesPage = require('../pageobjects/keyPresses.page');
const BasicAuthPage = require('../pageobjects/basic_auth.page');
const CheckBoxesPage = require('../pageobjects/checkboxes.page');
const DropdownPage = require('../pageobjects/dropdown.page');

describe('Dropdown test', () => {
    it('', async () => {
        await DropdownPage.open();
        console.log(await DropdownPage.dropItemsList());
        await DropdownPage.dropItems[1].click()
        console.log(await DropdownPage.dropItemsList());
        await DropdownPage.dropItems[2].click()
        console.log(await DropdownPage.dropItemsList());
        await DropdownPage.dropItems[0].click()
        console.log(await DropdownPage.dropItemsList());
    })
})


// //default sample code

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });

// //key presses. need to add (its)

// describe('If pressed letters match with output', () => {
//     it('entered letters should match', async () => {
//         await KeyPressesPage.open();
//         const result = await KeyPressesPage.sendKeysToInput('\uE004');
//         await expect(result).toEqual('You entered: TAB')
//     })
// })

// //add more (its)

// describe('Auth with username & password', () => {
//     it('auth with valid username and pass', async () => {
//         await BasicAuthPage.opening('admin', 'admin');
//         const message = await BasicAuthPage.grats();
//         await expect(message).toEqual(
//             'Congratulations! You must have the proper credentials.')
        
//     })

//     it('auth with invalid username and valid pass', async () => {
//         await BasicAuthPage.opening('invalid', 'admin');
//         await expect(await BasicAuthPage.congratulations.isExisting()).toEqual(false)
//     })
// })


// //almost complited. need to add assertions

// describe('Checkbox test', () =>{
//     it('just for fun with checkboxes', async () => {
//         await CheckBoxesPage.open();
//         await browser.pause(200);
//         console.log(await CheckBoxesPage.checkBoxCollection());
//         await CheckBoxesPage.checkboxes[0].click();
//         await browser.pause(200);
//         console.log(await CheckBoxesPage.checkBoxCollection());
//         await CheckBoxesPage.checkboxes[1].click();
//         await browser.pause(200);
//         console.log(await CheckBoxesPage.checkBoxCollection());
//     })
// })