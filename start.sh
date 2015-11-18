#!/bin/bash

# install dependencies
npm i

# set path for binaries of node modules
PATH=node_modules/.bin:$PATH
export PATH

# start web server
http-server .
