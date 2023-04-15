const BaseURL = require('./BaseURL'); 
const BTN = '//button[@id="ajaxButton"]' //Button to be clicked
const DISPLAY_MSG_2 = '//p[@class="bg-success"][2]' //second display message onclicking above button
const MSG_DIV = '//div[@id="content"]' //div that contains message
const DISPLAY_MSGS = '//p[@class="bg-success"]'

class AjaxPage extends BaseURL {
    
    //Overwriting open with subpath /ajax
    openURL(){
        return super.open('ajax')
    }

    //Button Triggering AJAX Request - button
    get triggerBTN(){
        return $(BTN);
    }

    get secondDisplayMessage(){
        return $(DISPLAY_MSG_2)
    }

    get displayMessages(){
        return $$(DISPLAY_MSGS)
    }

    get messageDiv(){
        return $(MSG_DIV)
    }

    waitForTriggerBtn(){
        $(BTN).waitForDisplayed()
    }

    waitForDisplayMsg(){
        $(DISPLAY_MSG_2).waitForDisplayed({timeout: 30000})
    }
}

module.exports = new AjaxPage();
