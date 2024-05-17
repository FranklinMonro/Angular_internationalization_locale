#!/bin/bash

###########################################################################

# Install Api Dependecies
cd Api/
npm install

# Install Web Dependecies
cd Web/
npm install

# Run Api
cd Api/
npm run update dev # Update packages and run dev enviroment
# OR
npm run dev # Only runs dev enviroment

# Run Web
cd Web/
npm run update dev # Update packages and run dev enviroment
# OR
npm run dev # Only runs dev enviroment

###########################################################################

# Install PG Globally
npm install pg -g

# Install Sequelize-auto Globally
npm install sequelize-auto -g

# Install HTTP-server Globally
npm i http-server -g

###########################################################################

# Manually create DB
docker exec -it angular_internationalization_locale_devcontainer-db-1 bash
psql -U postgres -f ./docker-entrypoint-initdb.d/create_db.sql

###########################################################################

# Create Sequelize tables with Sequelize-auto
cd Api/
sequelize-auto -h db -d postgres -u postgres -x postgres --dialect postgres -o "./models-auto" -l ts

###########################################################################

# Create i18n xlf files
cd Web/
ng extract-i18n --output-path src/locale

# Build localize file
ng build --localize

# Run HTTP-Server
http-server --port 4200