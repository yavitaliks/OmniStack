const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json()); //App consegue interpretar parametros do formato JSON
app.use(routes); // trazer rotas
app.listen(3333);

