import{test as base,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { AddPropertyPage } from '../pages/AddPropertyPage';

export const test=base.extend({

    login:async({page},use)=>{

        await use(new LoginPage(page));
    },

    HomePage: async({page},use)=>{
        const home=new HomePage(page);
        await use(home);
    },

    addprop:async({page},use)=>{

        await use(new AddPropertyPage(page));
    }

})
export{expect};