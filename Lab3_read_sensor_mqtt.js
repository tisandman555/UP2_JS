//Topic range: Room100~Room119 Room200~Room219 Room300~Room319
const TOPIC_UP2_SENSOR_DATA = 'Building01/Sensors/Room200';

var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

mraa.addSubplatform(mraa.GROVEPI,"0");

// remove this log and add your code here
console.log("function not implemented, please finish the coding first!\nYou can run Finished_Lab3_read_sensor_mqtt.js instead to view the expected output.")

function read_sensor()
{
	//get sensor data

}

client.on('connect',function(){
	//subscribe to the topic 

})

var j=0;
client.on('message',function(topic,message){
	//receive a messge
})

var i=0
function periodicActivity() {
	//read sensor 
	
	//publish message 

};


setInterval(periodicActivity, 1000); //call the periodicActivity function every second
