const dataValue = require("../vData/dataValue");
import callerPage from '../pageObject/homePage';
import contactPage from '../pageObject/contactPage';
const _Page_Of = require("../callerFunc/pageOf")


describe('contact nav page', ()=> {

  it('fill and submit', async () => {
      await callerPage.open();
      await callerPage.clickContact();
      await contactPage.fillAndSubmitContact();
      await contactPage.verifySubmitPage();
  });

  it('fill and submit2', async () => {

      await _Page_Of._homePage.default.clickContact();
      await _Page_Of._contactPage.fillAndSubmitContact();
      await _Page_Of._contactPage.verifySubmitPage();
  });

  it('fill and submit3', async () => {

    await _Page_Of._homePage.default.clickContact();
    await _Page_Of._contactPage.fillAndSubmitContact2(dataValue.contactinputs);
    await _Page_Of._contactPage.verifySubmitPage3();
});
});