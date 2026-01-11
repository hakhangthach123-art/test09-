//B1: hinglight element tren trang web

//B2: chup man hinh va luu vao file
// nhan cac tham so
// param1: page -> object page cua playwright
// param2: locator -> object locator cua playwright
// param3: testName -> de dat folder luu hinh co highlight
// parem4: stepname  
import {Page, Locator} from '@playwright/test'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'url'
import path from 'node:path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function highLightAndScreenshot (
    page: Page,
    locator: Locator,
    testName: String,
    stepName: String,

): Promise<void>{
    const folderName = testName.toLowerCase()

    const screenshotDir = join(__dirname, "..", "screenshot", folderName)
    
    mkdirSync(screenshotDir, {recursive: true})
    await locator.evaluate((el)=>{
        (el as HTMLElement).style.border = "4px solid red";
        (el as HTMLElement).style.backgroundColor = "yallow";
    })

    await page.waitForTimeout(2000)

    const filePath = join(screenshotDir, `${stepName}.png`)
    await page.screenshot({path: filePath})
}
