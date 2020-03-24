const express = require("express");

const routes = express.Router();

routes.post('/ongs', (request, response) =>{

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Maicon Flor Santos'
    });
    
});


module.exports = routes;