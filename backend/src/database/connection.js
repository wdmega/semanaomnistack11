const knex = require('knex');
const configuration = require('../../knexfile'); // importa as configurações do arquivo knexfile.js na pasta raiz (backend)

const connection = knex(configuration.development);

module.exports = connection;