![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## API Project

### Author: Becca Lee, Heather Cherewaty, Jared Pattison

### Links and Resources
[![Build Status](https://www.travis-ci.com/hcherewaty/API-Server.svg?branch=master)](https://www.travis-ci.com/hcherewaty/API-Server)

* [repo](https://github.com/hcherewaty/API-Server)
* [travis](https://www.travis-ci.com/hcherewaty/API-Server)
* [heroku](https://api-server-hbj.herokuapp.com/)


#### Documentation
* [swagger](https://api-server-hbj.herokuapp.com/docs/config/swagger.json) 
* [jsdoc](https://api-server-hbj.herokuapp.com/docs/) 

### Modules
#### `index.js`

### Setup
#### `.env` requirements
* `PORT` - Defined in ENV.
* `MONGODB_URI` - Defined in ENV.

#### Running the app
* `npm start`
* Endpoint (get): `/api/v1/teams`
  * Returns stored teams.
* Endpoint(get): `/api/v1/players`
  * Returns stored players.
* Endpoint (post): `/api/v1/teams`
  * Returns created team.
* Endpoint(post): `/api/v1/players`
  * Returns created player.
* Endpoint (get): `/api/v1/teams/id`
  * Returns team by id.
* Endpoint(get): `/api/v1/players/id`
  * Returns player by id.
* Endpoint (put): `/api/v1/teams/id`
  * Updates team by id.
* Endpoint(put): `/api/v1/players/id`
  * Updates player by id.
* Endpoint (delete): `/api/v1/teams/id`
  * Deletes team by id.
* Endpoint (delete): `/api/v1/players/id`
  * Deletes player by id.
* Endpoint: `/signup`
  * Returns new signed up user.
* Endpoint: `/signin`
  * Returns signed in user by id.
* Endpoint: `/newrole`
  * Returns a newly assigned role.
* Endpoint: `/key`
  * Returns a generated key.

  
#### Tests
* npm test (runs unit tests)
* npm run lint (runs linter tests)
* When `handleGetAll` is called on `teams` or `players`, we expect all `teams` and `players` to show, respectively..
* When `handlePost` is called, we expect a new `team` or `player` to be created.
* When `handleGetOne` is called, we expect the respective `team` or `player` to be called by id. 
* When `handlePut` is called, we expect the respective `team` or `player` to be updated by id.
* When `handleDelete` is called, we expect the respective `team` or `player` to be deleted by id.
* When `/signup` is hit, we expect a new `user` to be created when required files are provided.
* When `/signin` is hit, we expect a new `user` to be signed in when required credentials are provided.
* When `/newrole` is hit, we expect a new `role` to be created when required files are provided.
* When `/key` is hit, we expect a new `key` to be created when required files are provided.            
