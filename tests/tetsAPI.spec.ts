
import {test,expect} from '@playwright/test'

test.describe("API test - expect", ()=>{
    test("API GET list movie", async({page})=>{
        const response = page.request.get("https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        {
            headers:{
                TokenCybersoft:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUZXN0aW5nIDA5IiwiSGV0SGFuU3RyaW5nIjoiMTcvMDYvMjAyNiIsIkhldEhhblRpbWUiOiIxNzgxNjU0NDAwMDAwIiwibmJmIjoxNzU3NzgyODAwLCJleHAiOjE3ODE4MDIwMDB9.-_5VIe7kzZRPNtHEjW0NXKsmWqPh8yyd-pUQ9bQfMrM"
            }
        })
        const responseBody =(await response).json()
        console.log(responseBody)
        expect(responseBody).toHaveProperty("statusCode")
        expect(responseBody).toHaveProperty("massage")
        expect(responseBody).toHaveProperty("content")
        expect(responseBody).toHaveProperty("daleTime")
    
    })
})