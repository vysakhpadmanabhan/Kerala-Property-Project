import{test,expect} from '../Fixtures/test-fixture';

test.describe("hometest",()=>{

    test.beforeEach('page setup',async({page})=>{
         await page.goto("https://keralaproperty.in/member/myhome/");
    })

    test("verify logo is visible",async({HomePage})=>{
        await expect(HomePage.logo).toBeVisible();
    })

    test("click logo",async({HomePage,page})=>{
        await HomePage.clickLogo();
        await expect(page).toHaveURL("https://keralaproperty.in/");
    })

    test('text verification',async({HomePage})=>{
        await expect(HomePage.kptextfiled).toHaveText("My Properties");
    })

    test('verify username',async({HomePage})=>{
        await expect(HomePage.useranmefield).toHaveText("123@#$%*&");
    })

    test('verify my account text',async({HomePage})=>{
        await expect(HomePage.myaccbutton).toHaveText("My Account");
    })

    test('click my account',async({HomePage})=>{
        await HomePage.clickMyAccButton();
    })

})