const BaseURL = require("./BaseURL")

class Shadowdom extends BaseURL{

    openURL(){
        return super.open('shadowdom')
    }
}

module.exports = new Shadowdom();