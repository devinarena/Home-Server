#!/bin/bash
########################################################################################################################
#
#   File: startup.sh
#   Author: Devin Arena
#   Since: 4/17/2022
#   Decription: Handles startup for my server on raspiam. Sets up the network and mounts the HDD for external file storage.
#
########################################################################################################################

# remove instance logs ()
sudo rm /home/pi/logs/startup.log

# setup network
sudo wpa_supplicant -B -D "nl80211" -i "wlan0" -c /etc/wpa_supplicant/wpa_supplicant.conf &>> /home/pi/logs/startup.log

# mount hdd for storage
sudo mount /dev/sda3 /mnt/hddfs &>> /home/pi/logs/startup.log

# start the python server
sudo python3 -u /home/pi/server.py &>> /home/pi/logs/server.log &
