const express  = require('express');
const { celebrate, Segments, Joi} = require ('celebrate');

const OngController = require('./controllers/OngConntroller');
const IncController = require('./controllers/IncController');
const ProffilerController = require('./controllers/ProfilerController');
const SessionsController = require('./controllers/SessionController');

const routes = express.Router();

//Checar si ONGS existe
routes.post('/login', SessionsController.indexOng);
//Listar ONGS que estao cadastrados do Banco
routes.get('/ongs', OngController.index);


//Cadastrar ongs no banco de dados
//routes.post('/ongs', celebrate({
//    [Segments.BODY]: Joi
//}), OngController.create);
routes.post('/ongs', OngController.create);
//Listar Incidents que estao cadastrados do Banco
routes.get('/incidents', IncController.index);
//Listar Incidents que estao cadastrados do Banco dauma intidade
routes.get('/incidentsProf', ProffilerController.listOfOng);
//Cadastrar Incidents no banco de dados
routes.post('/incidents', IncController.create);
//Deletar Incidents no banco de dados
routes.delete('/incidents/:id', IncController.delete);

//Exportar as rotas do arqui (deixar visivel pros outros)
module.exports = routes;