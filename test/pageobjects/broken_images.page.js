const Page = require('./page');

class BrokenImagesPage extends Page {

    get images() {
        return $$('.//*[@class="example"]/img')
    }

    get srcs() {
        return this.images.map(el => el.getAttribute('src'))
    }

    async checkImages(srcArray){
        await browser.setupInterceptor();
        for (const src of srcArray){
            await browser.url(`https://the-internet.herokuapp.com/${src}`)
            console.log(await browser.getUrl())
        }
        // const urls = srcArray.map(el => el = `https://the-internet.herokuapp.com/${el}`)
        // console.log(urls)
        // // return await srcArray.map(src => {
        // //     browser.url(`https://the-internet.herokuapp.com/${src}`)
        // //     return $('h1').then(res => !!res)
        // // }) 
        // //`https://the-internet.herokuapp.com/${src}`))
    }

    open(){
        return super.open('');
    }
}

module.exports = new BrokenImagesPage();