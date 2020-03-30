const connections = require('../database/connection');

module.exports = {
    async indexOng (request, response){
        const {id} = request.body;
        const resultado = await connections('ongs').where('id',id).select('nome').first();

        if(resultado){
            return response.json(resultado);
        }else{
            return response.status(400).json({error: 'Resultado nao Existe'});
        }
    }
}