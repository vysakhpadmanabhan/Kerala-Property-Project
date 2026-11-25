export class AddPropertyPage{

    /**
     * 
     * @param{import('@playwright/test').Page}page
     */

    constructor(page)
    {
        this.page=page;
        this.addpropbutton=page.getByRole("link",{name:" Add Property"});
        this.addproptextfield=page.locator(".sub-header ");
        this.propfordd=page.locator("#proptype");
        this.proplabelfield=page.locator("#proplabel");

    }


    async clickAddPropButton()
    {
        await this.addpropbutton.click();
        
    }


    async selectDD()
    {
        await this.propfordd.selectOption({label:'Rental'});
    }


    async setPropLabelValues(prolebel)
    {
        await this.proplabelfield.fill(prolebel);
    }

}