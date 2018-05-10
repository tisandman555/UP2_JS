var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');
//var client = mqtt.connect('mqtt://q.emqtt.');
//var client = mqtt.connect('tcp://iot.eclipse.org:1883');
//var client = mqtt.connect('mqtt://iot.eclipse.org');
//var client = mqtt.connect('tcp://q.emqtt.com:1883');

var dbid = '';
var name = 'model133';
client.on('connect',function(){
    console.log('test');
    client.publish('user98/control/data',JSON.stringify({'dbid':dbid,'name':name}));
})

client.on('message',function(topic,message){
	//message is Buffer
	console.log(message.toString());
//	client.end()
})

// var i=0
// function periodicActivity(){
// 	i+=1;
// 	console.log('number: ',i)
// 	client.publish('presence','hello mqtt '+i)
// }

// setInterval(periodicActivity, 1000);

