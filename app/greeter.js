/**
 * Created by admin on 2017/2/9.
 */
var config = require("./config.json")
module.exports = function(){
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
}