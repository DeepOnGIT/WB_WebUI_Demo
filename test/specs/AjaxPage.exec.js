const { default: AllureReporter } = require("@wdio/allure-reporter");
const AjaxPagePOM = require("../pageobjects/AjaxPage.POM");

describe("Validate Ajax Page", () => {
    it("Verify whether message is displayed only once after two clicks", async () => {

        //Open URl
        await AjaxPagePOM.openURL()

        //Wait for element to be visible - assertion to check page launch
        await AjaxPagePOM.waitForTriggerBtn()
        await AllureReporter.addStep('URL opened successfully')

        //Double Click Trigger button
        await AjaxPagePOM.triggerBTN.doubleClick()
        await AllureReporter.addStep('Trigger button double clicked successfully')

        //wait for browser to generate message
        //Takes 15.5 seconds per click to retrieve message 
        //waits for 35 seconds as it is a double click
        await browser.pause(35000)

        //Get count of messages <p> elements
        const count = await AjaxPagePOM.displayMessages.length

        //Logic to validate number of messages displayed
        if(count == 1){
            await console.log("[ERR] PASSED: Only 1 Ajax message is printed")
            await AllureReporter.addStep('[PASSED] Only 1 message on double clicking button')
        }
        else{
            await console.log(`[ERR] FAILED: More than one Ajax message is found. Count - ${count}`)
            await AllureReporter.addStep(`[FAILED] More than one message found. Number of message - ${count}`)
        }

    })
})