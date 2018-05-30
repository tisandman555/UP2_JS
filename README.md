# UP2_JS
NodeJS samples for UP2 hands-on lab

# how to run aws_mqtts_lab.js
1. be sure you have successfully run the other labs at least including the lab Finished_Lab2_read_sensor.js

2. in your aws account, init a new device flowing the aws web page tutorial

  ![alt text](UI/aws_iot_init_new_device.png?raw=true "Title")

3. download the connection kit packages, which includes several key/cert files

  ![alt text](UI/aws_iot_connection_kit.png?raw=true "Title")

4. Edit aws_mqtts_lab.js to match your own UP2 board and aws account settings, following below comments

  ```java
  const my_topic = 'com/intel/fpei/up2-01'; // the topic you want to publish to aws
  const interval = 2000; // interval between each publish

  const device = deviceModule({
     keyPath: 'UP2-Fanjiang-P_Plus.private.key', // replace with your own key
     certPath: 'UP2-Fanjiang-P_Plus.cert.pem', // replace with your own cert
     caPath: 'root-CA.crt', // replace with your own root ca
     clientId: 'fpei', // make your self id
     region: 'us-west-2', // change to your own if it's different
     baseReconnectTimeMs: 4000, 
     keepalive: 300,
     protocol: 'mqtts', 
     port: 8883,
     host: 'a1lbizsabp5xcz.iot.us-west-2.amazonaws.com', // reppace with your own
     debug: true // 'true' to view debug information
  });
  ```
