
const dataValue = require("../vData/dataValue");
import callerPage from '../pageObject/homePage';
import contactPage from '../pageObject/contactPage';

describe('Home', ()=> {


    before( async () => {

    })
    
    beforeEach( async () => {
        await callerPage.open();
    })
it('Open URL & Assert title', async () => {
  //  await callerPage.open();
     expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');

});

it('Open About URL & Assert Url', async () => {
    await browser.url('https://practice.automationbro.com/about/');
     expect(browser).toHaveUrl('https://practice.automationbro.com/about/');

});

it('Click About URL & Assert Url', async () => {
   // await browser.url('/');
//await callerPage.open();
    await $('//*[@id="menu-item-491"]/a').click();
     expect(browser).toHaveUrl('https://practice.automationbro.com/about/');

});
it('open url  & Assert get hearder text', async () => {
   // await callerPage.open();
    const getText = await $('//*[@class="elementor-widget-container"]/h1').getText();
     expect(getText ).toEqual('Think different. Make different.');

});

it('fill and submit', async () => {

    //  await callerPage.open();
      await callerPage.clickContact();
     // await _Page_Of._contactPage.fillAndSubmitContact();
     // await _Page_Of._contactPage.verifySubmitPage();
     await contactPage.fillAndSubmitContact();
     await contactPage.verifySubmitPage();
    });
});