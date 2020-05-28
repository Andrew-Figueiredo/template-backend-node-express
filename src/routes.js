const express = require('express');

const routes = express.Router();

routes.post('/', (request, response) => {
    return response.json({ 
        evento: 'Semana e tals',
        aluno: 'Andrew Galvao'
     });
});


module.exports = routes;