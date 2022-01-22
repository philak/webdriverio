const dataValue = require("../vData/dataValue");

describe('Navigation menu', ()=> {

    it('Check the link on home page', async () => {
        const element = '//*[@id = "primary-menu"]//li[@id]';
        await browser.url('/');
       const navlinks = await $$(element);
       const actuallinks =[];
       var num = 0;
       for(const link of navlinks){
        
         //  actuallinks.push(await link.getText());
           await expect(dataValue.linkPage[num]).toEqual(await link.getText());
           num = num + 1;
       }
      // await expect(dataValue.linkPage).toEqual(actuallinks);
    
    });

});