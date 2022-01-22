const POM = require('../vData/dataValue');
class contactPage{




    get nameEmailPhone(){
        return $$('//*[@class="evf-frontend-row"]//input');
    }
    get txtAreaMessage(){
        return $('//*[@class="evf-frontend-row"]//textarea');
    }
    get clkSubmit(){
        return $('//*[@name="everest_forms[submit]"]');
    }


    async fillAndSubmitContact2 (listValue){

        const navlinks = await this.nameEmailPhone;
        var num = 0;
        var count;
        for(const link of navlinks){ 
     
        await link.addValue(listValue[num]);
            num = num + 1;
            count = num;
        }
        await this.txtAreaMessage.addValue(listValue[count]);
        await this.clkSubmit.click();
     }
async fillAndSubmitContact (){
       const inputFieldElements = '//*[@class="evf-frontend-row"]//input';
       const inputMessageElements = '//*[@class="evf-frontend-row"]//textarea';
       const navlinks = await $$(inputFieldElements);
       var num = 0;
       var count;
       for(const link of navlinks){ 
    
       await link.addValue(POM.contactinputs[num]);
           num = num + 1;
           count = num;
       }
       await $(inputMessageElements).addValue(POM.contactinputs[count]);
       await $("//*[@name='everest_forms[submit]']").click();
    }

    async verifySubmitPage(){
        const submitNotitication = $('//*[@class="everest-forms"]/div');
        await expect('Thanks for contacting us! We will be in touch with you shortly').toEqual(await submitNotitication.getText());
    }
    async verifySubmitPage3(){
        const submitNotitication = $('//*[@class="everest-forms"]/div');
        await expect('Thanks for contacting us! We will be in touch with you shortly yo').toEqual(await submitNotitication.getText());
    }
}
module.exports = new contactPage(); 