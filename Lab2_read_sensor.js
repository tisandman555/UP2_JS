
var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

mraa.addSubplatform(mraa.GROVEPI,"0");

//add your code here

function read_sensor()
{
	//get sensor data

}
function periodicActivity() {
	//read sensor
	
};

setInterval(periodicActivity, 1000); //call the periodicActivity function every second
