export class HomePage{

    /**
     * 
     * @param{import('@playwright/test').Page}page
     */

    constructor(page)
    {
        this.page=page;
        this.logo=page.getByAltText("Kerala Property");
        this.kptextfiled=page.locator(".sub-header");
        this.useranmefield=page.locator(".fw-bold");
        this.myaccbutton=page.getByRole("link",{name:"My Account"});
    }


    async clickMyAccButton()
    {
        await this.myaccbutton.click();
    }


    async clickLogo()
    {
        await this.logo.click();
    }

}