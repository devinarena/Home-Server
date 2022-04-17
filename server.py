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

HDD_PATH = "/mnt/hddfs"

start_time = time.time()

def main() -> None:
    """
    Main function for the server.
    """
    print(f"\nServer started at: {time.ctime()}")
    health_check()


def health_check() -> None:
    """
    Prints out server status.
    """
    while True:
        print(f"[{time.ctime()}] server is healthy, runtime: {datetime.timedelta(seconds=(time.time() - start_time))}.")
        total, used, free = shutil.disk_usage(HDD_PATH)
        print(f"[{time.ctime()}] HDD storage: {used} bytes / {total} bytes ({used/total*100:.2f}% used, {free} bytes free).")
        time.sleep(5)


if __name__ == "__main__":
    main()
