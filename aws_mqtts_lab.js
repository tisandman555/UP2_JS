// source file created by fanjiang.pei@intel

//node.js deps

//npm deps

//app deps
const deviceModule = require('/usr/local/lib/node_modules/aws-iot-device-sdk/device');
const read_sensor = require('./Finished_Lab2_read_sensor');

// node device-example.js --host-name=a1lbizsabp5xcz.iot.us-west-2.amazonaws.com --private-key=UP2-Fanjiang-P_Plus.private.key --client-certificate=UP2-Fanjiang-P_Plus.cert.pem --ca-certificate=root-CA.crt

//begin module
const my_topic = 'com/intel/fpei/up2-01';
const interval = 2000; // 2000ms

const device = deviceModule({
   keyPath: 'UP2-Fanjiang-P_Plus.private.key',
   certPath: 'UP2-Fanjiang-P_Plus.cert.pem',
   caPath: 'root-CA.crt',
   clientId: 'fpei',
   region: 'us-west-2',
   baseReconnectTimeMs: 4000,
   keepalive: 300,
   protocol: 'mqtts',
   port: 8883,
   host: 'a1lbizsabp5xcz.iot.us-west-2.amazonaws.com',
   debug: true
});

// publish sensor data every $interval.
var timeout = setInterval(function() {
   device.publish(my_topic, JSON.stringify(
      read_sensor() ));
}, interval);

device.on('connect', function() {
      console.log('connect');
   });  
device.on('close', function() {
      console.log('close');
   });
device.on('reconnect', function() {
      console.log('reconnect');
   });
device.on('offline', function() {
      console.log('offline');
   });
device.on('error', function(error) {
      console.log('error', error);
   });
device.on('message', function(topic, payload) {
      console.log('message', topic, payload.toString());
   });
