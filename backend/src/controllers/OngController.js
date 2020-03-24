const crypto = require('crypto'); //lib do node para cryptografia porem podemos utilizar uma funcionalidade para gerarmos um ID
const connection = require('../database/connection'); // Importa o arquivo que criamos para conexão com o nosso BD


module.exports = {

    async index (request, response){
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response){ // Como só podemos prosseguir após o insert, tornamos essa tabela async e pedimos para o node AWAIT no insert
        const {name, email, whatsapp, city, uf} = request.body; // Em vez de armazenar tudo em uma unica variavel escolhemos por dividir para que o usuario não coloque algo a mais

        const id = crypto.randomBytes(4).toString('HEX'); // irá gerar um ID em string hex

        await connection('ongs').insert({ //await vai fazer o node só seguir após a insersao da tabela
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({id}); //só devolvemos o ID porque é o que a ong utilizará para conectar a nossa base tipo um CPF
    }
};