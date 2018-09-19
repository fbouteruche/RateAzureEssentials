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
if [ -d "RateAzureEssentials" ]; then
  rm -rf RateAzureEssentials
fi
git clone https://github.com/fbouteruche/RateAzureEssentials.git
cd RateAzureEssentials/web
npm install
npm run serve & echo "web server started"