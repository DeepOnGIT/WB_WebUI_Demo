const { default: AllureReporter } = require('@wdio/allure-reporter')
const ProgressBar = require('../pageobjects/ProgressBar.POM')

describe('Validate Progress page', () => {
    it('Verify whether stop button is clicked when bar reaches 75% exact', async () => {

        //Open URL
        await ProgressBar.openURL()

        //Wait for element to be visible - assertion to check page launch
        await ProgressBar.waitForButtonToBeDisplayed()
        AllureReporter.addStep('URL opened successfully')

        //Storing percentage value befpre clicking Start
        const beforeValue = await ProgressBar.percentageBar.getText()
        AllureReporter.addStep(`Progress bar percentage before clicking start ${beforeValue}`)

        //Click start button
        await ProgressBar.startBtn.click()
        AllureReporter.addStep('Clicked on Start Button')

        //Logic to click stop when progress reaches 74
        try {
            await ProgressBar.percentageBar.waitUntil(async function () {
                //waiting until bar value reaches 74 (to click button 1 percent before))
                //Bar value is dyanamic. May or may not click exactly at 74
                return (await ProgressBar.percentageBar.getAttribute('aria-valuenow')) === "74" 
                // if(await this.getText() === '74%'){ return true }
            },
                {
                    timeout: 80000, //100 secs timeout as it is taking long sometimes
                    timeoutMsg: '[ERR] TIMEOUT'
                }
            )

            //Click stop button
            await ProgressBar.stopBtn.click()
            AllureReporter.addStep('Stop button is clicked')
            
            //Pause for a while
            await browser.pause(5000)
            //Store after value
            const afterValue = await ProgressBar.percentageBar.getText();

        }

        catch {
            await console.log('[ERR] Unable find the progress bar value')
        }
    })
})