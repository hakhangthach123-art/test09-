import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'


test.describe("Home Page tests", ()=>{
    test.beforeEach(async ({page}) =>{
        const loginpage = new LoginPage(page)
        const Homepage = new HomePage(page)

        await loginpage.login("Admin","admin123")

        await page.waitForURL("**/dashboard**",{timeout:10000})
        // doi den khi meniitems xuat hien
        await Homepage.sidebarMenuNames.first().waitFor({timeout:10000})
    })

    test("verifly cac menu co day du khong ", async ({page})=>{
        const homePage= new HomePage(page)
        const menuItems = await homePage.getsidebarMenuItems()
        // kiem tra
        // case 1: menuItems > 0
        expect(menuItems.length).toBeGreaterThan(0)
        // Case 2: manuitems co chua cac gia tri mong muon 
        // kiem tra xem menu admin co ton tai trong menuitems khong 
        expect (menuItems).toContain("Admin")

        // case 3: kiem tra menitems
    })
              
    
}) 