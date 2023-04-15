const BaseURL = require("./BaseURL");

const HIDE_BTN = '//button[@onclick="HideButtons()"]' // Find Hide button by xpath

class VisibilityPage extends BaseURL {

    //Overwriting open with subpath /ajax
    openURL(){
        return super.open('visibility')
    }

    //Hide button
    get hideButton(){
        return $(HIDE_BTN)
    }

    waitForHideButton(){
        $(HIDE_BTN).waitForClickable()
    }
}

module.exports = new VisibilityPage();