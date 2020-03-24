const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//listagem das ongs
routes.get('/ongs', OngController.index);

// Cadastro da ong
routes.post('/ongs', OngController.create);

//Listagem de ong especifica
routes.get('/profile', ProfileController.index);

// Listagem de Incidents
routes.get('/incidents', IncidentController.index);

// Cadastro de Incidents
routes.post('/incidents', IncidentController.create);

// Delete de Incidents
routes.delete('/incidents/:id', IncidentController.delete)
module.exports = routes;