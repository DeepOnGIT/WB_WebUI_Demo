const { expect } = require("chai")

describe("Validate behaviour of Click Page", () => {
    it("Verify whether button color is changed to RED when clicked", async () => {

        //Open URL
        browser.url('http://uitestingplayground.com/click')

        //Click button
        await $('//button[@id="badButton"]').click()

        //wait 5 secs
        await browser.pause(5000)

        //Store color in a const
        let color = await $('//button[@id="badButton"]').getCSSProperty('background-color')

        //print
        await console.log(color)

        // color.split()
        //Expect color rgb value to have 'rgb(255, 0, 0)' - red color code
        await expect (color).to.have.property('value').with.equals('rgb(255, 0, 0)')
    })
})