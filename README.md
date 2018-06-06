# UP2_JS
NodeJS samples for UP2 hands-on lab

使用前请先安装配置好UP2的nodejs和python MRAA/UPM库, 步骤如下:

安装UP2的nodejs,python MRAA和UPM库
 
sudo apt update

sudo apt install nodejs npm

sudo apt install libmraa1 libmraa-dev libmraa-java python-mraa python3-mraa node-mraa mraa-tools node-upm node-mraa python-upm python3-upm

sudo apt install mosquitto (安装本地mosquitto服务，这样可以把mqtt broker地址指向localhost)

sudo apt install nodejs-legacy (这句可要可不要，ubuntu默认nodejs命令是’nodejs’， 如果习惯用’node’命令则安装这个包’

mkdir work

cd work/

安装nodejs mqtt库

sudo npm install -g --save mqtt

将以下这句加到/etc/environment和/home/upsquared/.bashrc里面

export NODE_PATH="/usr/local/lib/node_modules"


安装python2,python3的mqtt库

sudo apt install python3-pip

pip install paho-mqtt

pip3 install paho-mqtt


