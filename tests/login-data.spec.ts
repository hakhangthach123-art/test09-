import { test } from '@playwright/test'
import { LoginData, readFileFromCsv } from '../utils/csvReader'
import { LoginPage } from '../pages/LoginPage'
test.describe("Login Data from csv", () => {
    let testData: LoginData[] = []
    test.beforeAll(async () => {
        testData = await readFileFromCsv()

        console.log(` da load ${testData.length} dong du lieu tu file csv `)

    })
    test("Test Data", async ({ page }) => {
        for (let data of testData) {
            const loginpage = new LoginPage(page)
            await loginpage.login(data.username, data.password)
            if(data.expected_result === 'success'){
                await loginpage.isLoginSuccessfull()
            }
            else{
                await loginpage.isLoginSuccessfull()=== false
            }
        }
    })
})