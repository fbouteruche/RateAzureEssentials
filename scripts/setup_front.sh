#!/bin/bash
#Same for Front and middle
apt-get update -y
apt-get upgrade -y 
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs 
mkdir /app
cd /app
git clone https://github.com/fbouteruche/RateAzureEssentials.git
cd RateAzureEssentials/web
npm install
npm run server & echo "web server started"