const { default: AllureReporter } = require('@wdio/allure-reporter')
const Shadowdom = require('../pageobjects/Shadowdom.POM')
const Key = require('webdriverio')

describe("Validate Shadow DOM page", () => {
    it("Verify whether copy button is copying the exact input value", async () => {

        //open URL
        await Shadowdom.openURL()

        //wait until element is displayed - assertion to validate whether page is loaded or not
        await $('//guid-generator').shadow$('#buttonGenerate').waitForClickable()
        AllureReporter.addStep('URL Opened Successfully')

        //Click Generate button
        await $('//guid-generator').shadow$('#buttonGenerate').click()
        AllureReporter.addStep('Value generated in input field onclicking generate button')

        //wait for 2 secs
        await browser.pause(2000)

        //get value from the input box
        const generatedValue = await $('//guid-generator').shadow$('#editField').getValue()
        AllureReporter.addStep(`Generated value is ${generatedValue}`)
        //Value Stored

        //Click Copy Button
        await $('//guid-generator').shadow$('#buttonCopy').click()
        AllureReporter.addStep('Copy Button is clicked')
        //Expecting that input value is copied 

        await $('//guid-generator').shadow$('#editField').clearValue() //Clear value to paste new one

        await $('//guid-generator').shadow$('#editField').click() //Click input field to enable

        try {
            //Send keys to browser to do a CTRL+V
            await browser.action('key')
                .down(Key.Ctrl).down(v)
                .pause(10)
                .up(Key.Ctrl).up
                .perform()
                AllureReporter.addStep('Copied value has been pasted')
        }
        catch{
            console.log('Unable to paste the value')
            AllureReporter.addStep('Value not pasted')
        }

        //get the pasted value
        const pastedValue = await $('//guid-generator').shadow$('#editField').getValue()

        //Validate the copy pasted text now
        await expect(pastedValue).toHaveText(generatedValue)
        AllureReporter.addStep(`Value copied - ${pastedValue}. Value pasted - ${generatedValue}`)
    })
})