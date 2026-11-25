import{test,expect} from '../Fixtures/test-fixture';

test.describe("addproptest",()=>{

    test.beforeEach('page setup',async({page,addprop})=>{
         await page.goto("https://keralaproperty.in/member/myhome/");
         await addprop.clickAddPropButton();
    })

    
  
    test("validate text",async({addprop})=>{
        await expect(addprop.addproptextfield).toHaveText("Add Property");
    })

    test("set values",async({addprop})=>{
        await addprop.selectDD();
        await addprop.setPropLabelValues("house");
    })

})