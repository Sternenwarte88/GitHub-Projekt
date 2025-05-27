#!/bin/bash
DOCKER_PATH="../docker"
BACKEND_PATH="../app/backend"

VERSION=$(node -p "require('${BACKEND_PATH}/package.json').version")

echo VERSION=$VERSION > "${DOCKER_PATH}/.env"

docker compose -f ../docker/docker-compose.yaml build 
docker push -a wusabinga/projekt-backend 
docker push -a wusabinga/projekt-mysql 
