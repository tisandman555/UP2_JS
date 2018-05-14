const MQTT_SERVER_ADDRESS = 'mqtt://test.mosquitto.org';
const TOPIC_UP2_SENSOR_DATA = 'user98/sensors/data';
const TOPIC_UP2_CONTROL_DATA = 'user98/control/data';

var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

mraa.addSubplatform(mraa.GROVEPI,"0");


// Load lcd module on I2C
var LCD = require('jsupm_jhd1313m1');

// Initialize Jhd1313m1 at 0x62 (RGB_ADDRESS) and 0x3E (LCD_ADDRESS) 
var myLcd = new LCD.Jhd1313m1 (0, 0x3E, 0x62);

myLcd.setCursor(0,0);
// RGB Blue
myLcd.setColor(53, 39, 249);
// RGB Red
//myLcd.setColor(255, 0, 0);
myLcd.setCursor(0,0);
myLcd.write('Wait for        ');
myLcd.setCursor(1,0);
myLcd.write('selecting...    ');


var sensor1 = require('jsupm_th02');
var th02 = new sensor1.TH02();

var dbid='';

function read_sensor()
{
	temp = th02.getTemperature();
    humi = th02.getHumidity();
    var timestamp = Math.floor(new Date()/1000);
    var color = timestamp*5%100;
    var color1 = Math.floor(Math.random()*100);
	return {'dbid':dbid,'color':color,'color1':color1,'number':0,'temperature':temp,'humidity':humi,'timestamp':timestamp};
}


var mqtt = require('mqtt');
var client = mqtt.connect(MQTT_SERVER_ADDRESS);

client.on('connect',function(){
    console.log('connect');
    client.subscribe(TOPIC_UP2_CONTROL_DATA)
})

var j=0;
client.on('message',function(topic,message){
    console.log(topic);
    if(topic=='user98/sensors/data')
    {
        //message is Buffer
        j+=1;
        var obj = JSON.parse(message);
		console.log('receive: '+ j + 'times :' + message.toString());
    }
    if(topic=='user98/control/data')
    {
        var obj = JSON.parse(message);
         console.log('control/data: '+ String(message));
         dbid = String(obj['dbid']);
         name = String(obj['name']);
         if(dbid=='')
         {
            myLcd.setCursor(0,0);
            myLcd.write('Wait for        ');
            myLcd.setCursor(1,0);
            myLcd.write('selecting...    ');
         }
         else
         {
            myLcd.setCursor(0,0);
            myLcd.write(dbid+'                ');
            myLcd.setCursor(1,0);
            myLcd.write(name+'                ');
         }
    }
})

var i=0
function periodicActivity() {
	var sensor_value = read_sensor();
	i+=1;
    console.log('send packet number: ',i);

    sensor_value.number = i;
    var mqtt_msg = JSON.stringify(sensor_value);
    console.log(mqtt_msg);
    client.publish(TOPIC_UP2_SENSOR_DATA,mqtt_msg);
    //client.publish('user98/control/data',mqtt_msg1);
};


setInterval(periodicActivity, 1000); //call the periodicActivity function every second
