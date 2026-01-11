import {Page, Locator} from '@playwright/test'
import { highLightAndScreenshot } from '../utils/screenshot';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly homeTitle: Locator

    constructor(page: Page) {
        this.page = page;

        this.usernameInput= page.locator('input[name="username"]')
        this.passwordInput= page.locator('input[name="password"]')
        this.loginButton=page.locator('button[type="submit"]')            
    }

    async login(username: string, password:string): Promise<void>{
        //B1: navigate vao web page login
        await this.page.waitForTimeout(3000)
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //B2: fill username vao input
        await this.usernameInput.fill(username)
        await highLightAndScreenshot(this.page, this.usernameInput, 'logintest', 'fill_username')
        //B3: fill password vao input
        await this.passwordInput.fill(password)
        await highLightAndScreenshot(this.page, this.passwordInput, 'logintest', 'fill_password')
        //B4: enter nut login
        await highLightAndScreenshot(this.page, this.loginButton, 'logintest', 'click_login_btn')
        await this.loginButton.click()
        
    }

    async isLoginSuccessfull (): Promise<boolean> {
        // case 1: test url co chu dashboard
        let url = this.page.url();
        return url.includes("dashboard")

         
    }
}