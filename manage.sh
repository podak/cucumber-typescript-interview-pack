#!/bin/bash

set -e

setup () {
    rm -Rf node_modules/
    docker-compose run --rm project npm i
}

execute () {
    docker-compose run --rm project npm start
}

"$@"