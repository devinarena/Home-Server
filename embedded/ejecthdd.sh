#!/bin/bash
########################################################################################################################
#
#   File: ejecthdd.sh
#   Author: Devin Arena
#   Since: 4/17/2022
#   Decription: Ejects and powers off the external HDD.
#
########################################################################################################################

umount /mnt/hddfs
eject /dev/sda
udisksctl power-off -b /dev/sda
