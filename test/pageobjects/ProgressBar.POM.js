const BaseURL = require('./BaseURL');
const START_BTN = '//*[@id="startButton"]' //found element by direct xPath
const STOP_BTN = '//h4[2]//following::button[@onclick="Stop()"]' //element found using custom xpath by onClick
const BAR_PERC = '//div[@id="progressBar"]' //element found using custom xpath by following child elements

class ProgressBar extends BaseURL {
    
    //Overwriting open with subpath /progressbar
    openURL () {
        return super.open('progressbar');
    }

    //Start button 
    get startBtn () {
        return $(START_BTN);
    }

    //Stop button
    get stopBtn () {
        return $(STOP_BTN);
    }

    //Percentage Bar
    get percentageBar () {
        return $(BAR_PERC);
    }

    //wait until any of the element is displayed
    waitForButtonToBeDisplayed () {
        $(START_BTN).waitForDisplayed()
    }

}

module.exports = new ProgressBar();
