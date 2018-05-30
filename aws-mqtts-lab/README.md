# how to run
1. be sure you have successfully run the other labs at least including the Lab2( see Finished_Lab2_read_sensor.js ), then login your AWS account and go to the new device configuration page: 

  ![alt text](UI/aws_iot_go_to_new_device_config.png?raw=true "Title")

2. init a new device following the AWS web page tutorial

  ![alt text](UI/aws_iot_init_new_device.png?raw=true "Title")

3. download the connection kit packages, which is an archive(zip) including several key/cert files, then unzip the files to working dir.

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

5. install the aws-iot-device-sdk

  ```shell
  sudo npm install -g aws-iot-device-sdk
  ```

6. run the "aws_mqtts_lab.js" via below shell command

  ```shell
  sudo node aws_mqtts_lab.js
  ```
