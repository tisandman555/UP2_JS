
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');
//var client = mqtt.connect('tcp://localhost:1883');

client.on('connect',function(){
	client.subscribe('presence')
})

client.on('message',function(topic,message){
	//message is Buffer
	console.log(message.toString());
})

var i=0
function periodicActivity(){
	i+=1;
	console.log('number: ',i)
	client.publish('presence','hello mqtt '+i)
}

setInterval(periodicActivity, 1000);

