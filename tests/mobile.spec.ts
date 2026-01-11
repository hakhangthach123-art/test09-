import {test,  expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
// describe tao cum test case 
test.describe("Mobile Login Tests",() => {
    test("Test login thanh cong", async({page}) =>{
        await page.setViewportSize({ width: 375, height: 667});
        const loginpage = new LoginPage (page)
        await loginpage.login('Admin', 'admin123')
        await loginpage.isLoginSuccessfull()
    })

    test("Test login that bai", async({page}) => {
        await page.setViewportSize({ width: 375, height: 667});
        const loginpage = new LoginPage (page)
        await loginpage.login('wronguser', 'wrongpass')
        await loginpage.isLoginSuccessfull() == false
    })

    
})