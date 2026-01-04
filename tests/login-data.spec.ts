import { expect, test } from '@playwright/test'
import { LoginData, readFileFromCsv } from '../utils/csvReader'
import { LoginPage } from '../pages/LoginPage'

//doc file csv 
const testData: LoginData[]= readFileFromCsv()
console.log(`da load ${testData.length}dong du lieu tu file csv`) 


test.describe("Login Data from csv", () => {
    for(let data of testData) {
        test(`${data.description}`,async ({page})=>{
            const loginpage = new LoginPage(page)
            await loginpage.login(data.username, data.password)
            const isSuccess = await loginpage.isLoginSuccessfull()
            if(data.expected_result ==="Success"){
                expect(isSuccess).toBeTruthy()
            }else{
                expect(isSuccess).toBeFalsy()
            }
        })
    }
})