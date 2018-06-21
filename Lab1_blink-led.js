
var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

mraa.addSubplatform(mraa.GROVEPI,"0");

// remove this log and add your code here
console.log("function not implemented, please finish the coding first!\nYou can run Finished_Lab1_blink-led.js instead to view the expected output.")

function periodicActivity() {

}

setInterval(periodicActivity, 1000); //call the periodicActivity function every second
