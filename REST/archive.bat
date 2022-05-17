@echo off
tar --exclude="./node_modules" --exclude="./archive.bat" --exclude="./*.sh" -czvf rest_archive.tar.gz .