import {test,expect} from '@playwright/test'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'url'
import path from 'node:path'
import { highLightAndScreenshot } from '../utils/screenshot'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test.describe("Test getByRoloe voi HTM local",()=>{
    test.beforeEach(async({page}) =>{
        const htmlPath = join(__dirname, "..", "public","index.html")
        const htmlContent = readFileSync(htmlPath, "utf-8")
        await page.setContent(htmlContent, {waitUntil: 'domcontentloaded'})
    })

    test("Test button", async ({page})=>{
        // <button type="submit" class="btn-primary" aria-label="Submit form button">
        //             Submit
        //         </button>
        const submitBtn = page.getByRole('button', {name:'Submit'})
        await expect(submitBtn).toBeVisible()

        const cancelBtn = page.getByRole('button', {name:'Cancel'})
        await expect(cancelBtn).toBeVisible()

        const deleteBtn = page.getByRole('button', {name:'Delete'})
        await expect(deleteBtn).toBeVisible()

        await page.waitForTimeout(2000)

    })

    test(" Test input", async ({page})=>{
        const usernameInput = page.getByRole("textbox", {name:"username"})
        await expect(usernameInput).toBeVisible()

        await page.waitForTimeout(2000)
    })

    test ("dropdown select", async ({page})=>{
        const countrySelect = page.getByRole("combobox", {name: "country"})
        await highLightAndScreenshot (page, countrySelect, "getByRole", "countrySelect")
        await expect(countrySelect).toBeVisible()
        await countrySelect.selectOption({label:"Vietnam"})
        await expect (countrySelect).toHaveValue("vn")
        await page.waitForTimeout(2000)
        
    })

    test("Test checkbox", async({page})=>{
        const agreeCheckbox = page.getByRole("checkbox", {name:"agree"})
        await expect(agreeCheckbox).toBeVisible()
        await agreeCheckbox.check()
        await expect(agreeCheckbox).toBeChecked()
        await page.waitForTimeout(2000)
    })

    test ("Test radio", async({page})=>{
        const maleRadio = page.getByRole("radio",{name: "male"}).first()
        await expect(maleRadio).toBeVisible()
        maleRadio.check()
        await expect(maleRadio).toBeChecked()

    })

    test ("Test Table", async ({page})=>{
        const table = page.getByRole("table")
        await expect(table).toBeVisible()
        const johnRow = table.getByRole("cell",{name: "John Doe"})
        await expect(johnRow).toBeVisible()
        const rows = table.getByRole("row")
        let countRow =await rows.count()
        await expect(countRow).toBe(4)       
    })

    test ("Test link",async ({page})=>{
        const navigation = page.getByRole("navigation")
        await expect(navigation).toBeVisible()

        const homeLink = navigation.getByRole("link", {name: "Home"})
        console.log(navigation.getByRole("link"))
        await expect(homeLink).toBeVisible()
    })
})