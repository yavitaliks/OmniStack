const connections = require('../database/connection');

module.exports = {

    //Listagem dos todos Incidents do cadastradas
    async index (request, response){
        
        //Fazer paginçao dos registros
        const {page = 1} = request.query;
        
        //retornar quantidade de registros na tabela
        const [total] = await connections('incidents').count();
        console.log(total);
        response.header('X-Total-Count', total['count(*)']);


        const incidents = await connections('incidents')
        //trazendo dados da ONG
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1)*5)
        .select(['incidents.*', 'ongs.nome', 'ongs.cidade', 'ongs.whatsapp', 'ongs.email']);
        return response.json(incidents);
    },

    //Cadastro da nova ONG
    async create(request, response){   
        const {title, descriptions, value} = request.body;
        //Buscar ID no Heder (cabesalho)
        const ong_id = request.headers.authorization;
        const result = await connections('incidents').insert({
            title,
            descriptions,
            value,
            ong_id
        })
         const id = result[0];
         return  response.json({id});
    },

    //Deletar Incidents
    async delete(request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        //Buscar id da onge no registro do incidente para segurança
        const incidents = await connections('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if(incidents){
            if(incidents.ong_id !== ong_id){
                return response.status(401).json({error: 'Operaçao na permetida'});
            }
            await connections('incidents').where('id', id).delete();
            return response.status(204).send();  
        }
        return response.status(700).json({error: 'REGISTRO NAO EXISTE'});
    }
};