const express = require('express'); // Essa variavel contem todas as funcionalidades importadas do express
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //Caso o projeto seja posto em produção (Online) dentro do cors() vamos colocar Origin: 'http://meuapp.com' <- exemplo
app.use(express.json());
app.use(routes);

app.listen(3333);
