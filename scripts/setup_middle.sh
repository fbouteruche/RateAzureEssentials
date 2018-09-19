#!/bin/bash
#Same for Front and middle
apt-get update -y
apt-get upgrade -y 
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs 
sudo apt-get install -y npm
npm install -g typescript
mkdir /app
cd /app
git clone https://github.com/fbouteruche/RateAzureEssentials.git
cd RateAzureEssentials/api
export MONGODB_URI='mongodb://10.100.3.5:27017' 
npm install
npm run serve & echo "api server started"