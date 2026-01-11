// private final By avatarWrapper = By.cssSelector(action");".orangehrm-edit-employee-image-wrapper");
// private  final By uploadBtn = By.cssSelector("button.employee-image--action");
// private final By fileInput = By.cssSelector("input[type='file']");

import { Page, Locator } from '@playwright/test'
import path from 'path';


export class MyinfoPage {
    readonly page:Page;

    readonly avatarWrappe: Locator;
    readonly uploadBtn: Locator;
    readonly fileInput: Locator;

    constructor (page: Page){
        this.page=page

        this.avatarWrappe = page.locator(".orangehrm-edit-employee-image-wrapper");
        this.uploadBtn = page.locator("button.employee-image--action");
        this.fileInput = page.locator("input[type='file']");
    }

    async uploadAvatar(): Promise<void>{
        // click vao avatar
        await this.avatarWrappe.waitFor({ state:'visible', timeout: 10000 })
        await this.avatarWrappe.click()
        await this.page.waitForTimeout(2000)

        // click vao cai nut upload
        await this.uploadBtn.waitFor({ state:'visible', timeout: 10000 })
        await this.uploadBtn.click()
        //await this.page.waitForTimeout(2000)
        await this.fileInput.waitFor({ state:'attached', timeout: 10000 })

        const filePath = path.resolve(process.cwd(), "data", "download.png")
        await this.fileInput.setInputFiles(filePath)
        
    }
}