# boggle-game
A simple implementation of Boggle game using React and Rails

# Table of content
- [Getting Started](#getting-started)
- [Setup Boggle game instance](#setup-boggle-game-instance)
  - [Setup your local instance](#setup-your-local-instance)
    - [Docker](#bring-the-boggle-game-instance-with-docer)
    - [Manual Install](#bring-the-boggle-game-instance)
- [Running Tests](#testing)
  - [Backend](#test-back-end)
  - [Frontend](#test-front-end)
  - [End-to-End](#end-to-end-test)



# Getting Started
The instruction below will get you a instance of the project up and running on you local machine.

You can visit the working app at [https://simple-boggle-game.herokuapp.com/](https://simple-boggle-game.herokuapp.com/)

# Setup Boggle game instance

## Setup your local environment

### Using Docker

#### Prerequisites

Boggle game setup for docker requires the following:

- Docker
- Docker Compose

#### Install Docker CE

Installation is straight forward, but vaires by OS.

Detail instructions for each OS can be found [here](https://docs.docker.com/install/).

#### Install Docker Compose
Installation is straight forward, but vaires by OS.

Detail instructions for each OS can be found [here](https://docs.docker.com/compose/install/).

### Bring the Boggle game instance with Docker

- Kick off docker-compose:
- `docker-compose up`
- Vist [http://localhost:3000](http://localhost:3000)

## Using manual installation

### Prerequisites

Boggle game will require following dependencies:

- Ruby on Rails
- NPM
- Heroku (Optional)

#### Install Ruby on Rails

Follow the steps found [here](https://www.ruby-lang.org/en/documentation/installation/)

or better use manager like [rbenv](https://github.com/rbenv/rbenv#readme) or or [RVM](https://rvm.io/rvm/install)

#### Install NPM

Follow the steps found [here](https://nodejs.org/en/download/)

#### Install Heroku (Optional)

Follow the steps found [here](https://devcenter.heroku.com/articles/heroku-cli)

### Bring the Boggle game instance

- Install rails backend dependencies
    - `bundle install`
- Install react frontend dependencies
    - `cd client`
    - `npm install`
- Bring up the instance:
    - `rake start`
- (**OR**)Bring up the instance individually
    - `rails s -p 3001` # Starts backend
    - `cd client && npm start` # Starts fronend
- Vist [http://localhost:3000](http://localhost:3000)

# Testing
Boggle game includes multiple test cases for both back-end and frontend

## Test back-end:

### Using `docker-compose`

- `cd boggle-game`
- `docker-compose run web rails test`

### Using `docker`

- `docker exec boggle_web rails test`

### Using `rails`

- `cd boggle-game # root of project`
- `rails test`

## Test front-end

### Using `docker-compose`

- `cd boggle-game`
- `docker-compose run web bash -c "cd client && npm test"`

### Using `docker`

- `docker exec boggle_web bash -c "cd client && npm test"`

### Using `npm`

- `cd boggle-game/client # OR cd client from root folder`
- `npm test`

## End to End Test

### Using `docker-compose`

- `cd boggle-game`
- `docker-compose run web bash -c "cd client && CI=true npm test"`

### Using `docker`

- `docker exec boogle_web bash -c "cd client && CI=true npm test"`

### Using `npm`

- `cd boggle-game/client # OR cd client from root folder`
- `npm test:e2e`

# Author

- Sajal N. Shrestha

