<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Index
- [Description](#-description)
- [Routes](#-routes)
- [Developer](#-developer)
- [Insomnia](#-insomnia)

# Description 📋
  
  Delivery Api build with the framework  <a href="https://nestjs.com/">NESTJS</a>, with the objective of applying knowledge obtained through the tutorial offered by <a href="https://www.freecodecamp.org/learn">FREECODECAMP</a> , using the <a href="https://www.prisma.io/">PRISMA</a>.



# Routes 🛣️

### CLIENT 
- `POST client` : Register a new client
- `GET  client/deliveries` : List all clients orders

### DELIVERYMAN 
- `POST deliveryman` : Register a new deliveryman
- `GET  client/deliveries` : List all deliveries made by delivery man


### AUTH 
- `POST authenticate/client` : Sign In client
- `POST authenticate/deliveryman` : Sign In deliveryman

### DELIVERY 
- `POST delivery` : Register a new delivery
- `POST delivery/updateDeliveryman/:id` : Update delivery
- `POST delivery/updateEndDate/:id` : Finalize delivery
- `GET  delivery` : List all deliveries

# Developer 💻

### ⚠️ Config Database ⚠️
Create your database with name deliveries. Rename .example.env to .env, then configure with the necessary data.

```bash 
# Clone the repository
$ git clone https://github.com/FelipecgPereira/api-deliveries-nest.git

# Enter directory
$ cd api-deliveries-nest

# Install dependencies use case Yarn
$ yarn

# Install dependencies use case npm
$ npm install

# Run the migrations
$ prisma migrate dev

# Run project
$ yarn start:dev

```

# Insomnia

<a href="https://insomnia.rest/download">Insomnia</a>

It import Insomnia_deliveries to test routes

Developed 🚀 by Felipe Pereira