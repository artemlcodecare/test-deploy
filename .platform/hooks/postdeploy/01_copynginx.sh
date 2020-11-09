#!/usr/bin/env bash
sudo cat /tmp/https.conf > /etc/nginx/conf.d/https.conf
sudo /sbin/service nginx reload