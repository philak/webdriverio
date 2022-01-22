

class homePage {

    async clickContact(){
     await $("//*[@class='menu']//li[@id='menu-item-493']").click();
    }

   async open(){
        await browser.url('/');
        await browser.maximizeWindow();
      
    }

}
export default new homePage(); 