import { describe } from "node:test";
import{test,expect} from '../Fixtures/test-fixture';

test.describe("login",()=>{

test.beforeEach("url loading",async({page})=>{
    await page.goto(process.env.BASEURL);
})


test("invalid login",async({login,page})=>{
    await login.setValues("vijay@gmail.com","Vijay123");
    await login.clickLoginButton();
    await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/");
})

test("verify logo is visible",async({login})=>{
    await expect(login.logo).toBeVisible();

})

test("click logo",async({login,page})=>{
     await login.clickLogo();
    await expect(page).toHaveURL("https://keralaproperty.in/");
})

})