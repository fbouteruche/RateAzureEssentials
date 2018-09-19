#!/bin/bash
#Same for Front and middle
apt-get update -y
apt-get upgrade -y 
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs 
git clone https://github.com/fbouteruche/RateAzureEssentials.git