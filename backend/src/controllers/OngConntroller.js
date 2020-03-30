const connections = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    //Listagem dos ongs do cadastradas
    async index (request, response){
        //Fazer paginçao dos registros
        const {page = 1} = request.query;

        const ongs = await connections('ongs')
        .limit(5)
        .offset((page - 1)*5)
        .select('*');
        return response.json(ongs);
    },

    //Cadastro da nova ONG
    async create(request, response){   
        const {nome, email, whatsapp, cidade, uf} = request.body;
        //Gerar ID aleatorio usando biblioteca cripto
        const id = crypto.randomBytes(4).toString('HEX');
        //console.log({id, nome, email, whatsapp, cidade, uf});

        await connections('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf
        })
         return response.json({id});
    }
};