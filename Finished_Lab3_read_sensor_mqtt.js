//Topic range: Room100~Room119 Room200~Room219 Room300~Room319
const TOPIC_UP2_SENSOR_DATA = 'Building01/Sensors/Room200';

var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

mraa.addSubplatform(mraa.GROVEPI,"0");

//add your code here
var sensor1 = require('jsupm_th02');
var th02 = new sensor1.TH02();

function read_sensor()
{
    //get sensor data
    var temp = th02.getTemperature();
    var humi = th02.getHumidity();
    var timestamp = Math.floor(new Date()/1000);
    return {'temperature':temp,'humidity':humi,'timestamp':timestamp};
}


var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');
//var client = mqtt.connect('tcp://localhost:1883');

client.on('connect',function(){
    //subscribe to the topic
    console.log('connect');
    client.subscribe(TOPIC_UP2_SENSOR_DATA);
})

var j=0;
client.on('message',function(topic,message){
    //receive a messge
    console.log(topic);
    //message is Buffer
    j+=1;
    var obj = JSON.parse(message);
    console.log('receive: '+ j + ' times :' + message.toString());
})

var i=0
function periodicActivity() {
    //read sensor
    var sensor_value = read_sensor();
    i+=1;
    console.log('send packet number: '+i);
    sensor_value.number = i;
    //publish message 
    var mqtt_msg = JSON.stringify(sensor_value);
    client.publish(TOPIC_UP2_SENSOR_DATA,mqtt_msg);
};


setInterval(periodicActivity, 1000); //call the periodicActivity function every second
