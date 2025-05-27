# ⛔ Veraltet – ersetzt durch docker-compose.yml
# Nur für manuelle Einzeltests oder Notfälle gedacht.


#!/bin/bash

docker build -f ../docker/dockerfile-mysql ../app/ 
docker build -f ../docker/dockerfile-backend ../app