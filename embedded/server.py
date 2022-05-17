######################################################
#
#   File: server.py
#   Author: Devin Arena
#   Date: 4/17/2022
#   Description:
#       The central server on the raspberry pi.
#
######################################################

import time
import datetime
import shutil
import os

import subprocess
import threading

HDD_PATH = "/mnt/hddfs"
LOG_PATH = "~/logs/server.log"

start_time = time.time()


def main() -> None:
    """
    Main function for the server.
    """
    print(f"\nServer started at: {time.ctime()}")
    health_check_t = threading.Thread(target=health_check)
    health_check_t.start()
    system_status_t = threading.Thread(target=system_status)
    system_status_t.start()


def health_check() -> None:
    """
    Prints out server status.
    """
    while True:
        with open(LOG_PATH, "a") as f:
            f.write(
                f"[{time.ctime()}] server is healthy, runtime: {datetime.timedelta(seconds=(time.time() - start_time))}.\n")
            total, used, free = shutil.disk_usage(HDD_PATH)
            f.write(
                f"[{time.ctime()}] HDD storage: {used} bytes / {total} bytes ({used/total*100:.2f}% used, {free} bytes free).\n")
            
        # Check if server log needs to be refreshed
        if os.stat("logs/server.log").st_size > 1000000:
            shutil.copyfile("logs/server.log", "logs/server.log." +
                            str(datetime.datetime.now().strftime("%Y-%m-%d-%H-%M-%S")))
            with open("logs/server.log", "w") as f:
                f.write("")
        time.sleep(10)


def system_status() -> None:
    """
    Prints out system status.
    """
    while True:
        print(
            f"[{time.ctime()}] System status: server is running.")
        ps_df = subprocess.Popen("df", stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        ps_grep = subprocess.Popen(["grep", HDD_PATH], stdin=ps_df.stdout, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        ps_df.stdout.close()
        output = ps_grep.communicate()[0]
        if not output:
            print(
                f"[{time.ctime()}] System status: HDD is not setup for network storage.")
        else:
            print(
                f"[{time.ctime()}] HDD online: {output.decode('utf-8')}")
        time.sleep(300)


if __name__ == "__main__":
    main()
