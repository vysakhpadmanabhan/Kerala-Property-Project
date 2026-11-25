import{test as setup,expect} from "@playwright/test";
const authFile="playwright/auth/auth.json";

setup("authenticate",async({page})=>{
    await page.goto("https://keralaproperty.in/member/login/");
    await page.locator("#ulogin").fill("142dujjd754sms6546xjb@yahoo.com");
    await page.locator("#upass").fill("XuRkNsp44qD@HJK");
    await page.locator("#sub_logbtn").click();
    await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/");

    await page.context().storageState({path:authFile});
})