#!/bin/bash
########################################################################################################################
#
#   File: install_rest.sh
#   Author: Devin Arena
#   Since: 4/17/2022
#   Decription: Extract and install the REST API from an archive.
#
########################################################################################################################

sudo mkdir /home/pi/rest_api >> /home/pi/logs/software.log 2>&1
sudo tar -zxvf ./rest_archive.tar.gz -C /home/pi/rest_api >> /home/pi/logs/software.log 2>&1
sudo rm ./rest_archive.tar.gz >> /home/pi/logs/software.log 2>&1
echo "Rest API installed." >> /home/pi/logs/software.log 2>&1