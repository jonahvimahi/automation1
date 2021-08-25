import { beforeAll, afterAll, test } from "@jest/globals"
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
beforeAll(async () => {
    await driver.get( 'http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can add a movie', async () => {
    let addMovieBar = await driver.findElement(By.xpath('//form/input'))
    await addMovieBar.sendKeys("Avengers\n")
    await driver.sleep(3000)
    let crossOff = await driver.findElement(By.xpath('//li/span'))
    await crossOff.click()
    await driver.sleep(3000)
    let deleteBtn = await driver.findElement(By.xpath('//li/button'))
    
    await deleteBtn.click()
    await driver.sleep(3000)
})