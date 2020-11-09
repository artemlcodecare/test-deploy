#!/usr/bin/env bash
cat /tmp/https.conf > /etc/nginx/conf.d/https.conf
/sbin/service nginx reload