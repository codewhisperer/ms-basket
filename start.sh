#!/bin/bash

# Increase file descriptor limit on OSX.
ulimit -n 2560

# install dependencies
npm i

# set path for binaries of node modules
PATH=node_modules/.bin:$PATH
export PATH

# compile front end code
webpack --config webpack.config.js app/main.js build/app.js -d

# start web server
http-server .
