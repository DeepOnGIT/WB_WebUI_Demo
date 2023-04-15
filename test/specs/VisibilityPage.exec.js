const { default: AllureReporter } = require("@wdio/allure-reporter")
const VisibilityPage = require("../pageobjects/VisibilityPage.POM")

describe("Validate Visibility Page", () => {
    it("Validate hide button behaviour when clicked", async () => {

        //open url
        VisibilityPage.openURL()

        //wait for hide button to be clickable
        await VisibilityPage.waitForHideButton()
        AllureReporter.addStep('URL opened successfully')

        //Click on Hide button
        await VisibilityPage.hideButton.click()
        AllureReporter.addStep('hide button is clicked')

        // Wait five seconds until button is changed
        await browser.pause(5000)

        await expect(VisibilityPage.hideButton).toHaveText('Unhide')

        //store button text
        const buttonText = await $('//button[text()="Hide"]').getText()

        // //Logic to prove the change
        // if (buttonText === "Unhide") {
        //     console.log(`Button is changed to ${buttonText}`)
        //     AllureReporter.addStep(`Button value is "${buttonText}" as expected`)
        // }
        // else {
        //     console.log("Button is not changed.")
        // }

        AllureReporter.addStep(`button value is ${buttonText}`)
    })
})