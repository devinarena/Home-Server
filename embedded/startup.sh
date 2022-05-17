#!/bin/bash
########################################################################################################################
#
#   File: startup.sh
#   Author: Devin Arena
#   Since: 4/17/2022
#   Decription: Handles startup for my server on raspian. Sets up the network and mounts the HDD for external file storage.
#
########################################################################################################################

# remove instance logs ()
sudo chmod 777 -R /home/pi/logs
sudo rm /home/pi/logs/startup.log

# setup network
sudo wpa_supplicant -B -D "nl80211" -i "wlan0" -c /etc/wpa_supplicant/wpa_supplicant.conf >>/home/pi/logs/startup.log 2>&1

# mount hdd for storage
sudo mount /dev/sda3 /mnt/hddfs >> /home/pi/logs/startup.log 2>&1

# start the python server (outputs to own log)
sudo python3 -u /home/pi/server.py &

# start the rest API
sudo sh /home/pi/start_rest.sh >> /home/pi/logs/startup.log 2>&1 &
