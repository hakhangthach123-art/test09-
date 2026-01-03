import {Page, Locator} from '@playwright/test'

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
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //B2: fill username vao input
        await this.usernameInput.fill(username)
        //B3: fill password vao input
        await this.passwordInput.fill(password)
        //B4: enter nut login
        await this.loginButton.click()
    }

    async isLoginSuccessfull (): Promise<boolean> {
        // case 1: test url co chu dashboard
        let url = this.page.url();
        return url.includes("dashboard")

         
    }
}