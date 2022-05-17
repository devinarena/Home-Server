sudo chmod 777 -R /home/pi/rest_api
cd /home/pi/rest_api
npm i >> /home/pi/logs/software.log 2>&1
npm start >> /home/pi/logs/software.log & 2>&1
echo "Rest API started."