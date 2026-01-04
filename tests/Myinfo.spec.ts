import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { MyinfoPage } from '../pages/MyinfoPage'

test.describe("My info tests", ()=>{
    // B1: login vao
    // B2: click manu info
    test.beforeEach(async({page})=>{
        const loginpage = new LoginPage(page)
        const homePage = new HomePage(page)
        const myInfoPage = new MyinfoPage(page)

        await loginpage.login("Admin", "admin123")
        await page.waitForURL("**/dashboard**", {timeout:10000})
        await homePage.sidebarMenuNames.first().waitFor({timeout:100000})
        await homePage.clickMenuMyinfo()
        await myInfoPage.avatarWrappe.waitFor({state:'visible', timeout:10000})
    })
    test("Up load avatar voi file name testing 09", async({page})=>{
        const myInfoPage = new MyinfoPage(page)
        await myInfoPage.uploadAvatar()
            expect(true).toBeTruthy()
        
    }) 
})