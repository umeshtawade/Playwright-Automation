const {test, expect} = require('@playwright/test')

const {LoginPage}= require ('../POM_Pages/LoginPage')

test ('Login Test', async({page})=>
        {
            const name ="misr82hn02"
            const pwd= "misr82hn02"

            const lp =new LoginPage(page)

            await lp.navigateTo();
            await lp.login(name, pwd)

        }
    )