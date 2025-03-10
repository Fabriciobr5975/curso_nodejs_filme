import salvarFilmeService from '../service/filme/salvarFilmeService.js'
import consultarFilmesService from '../service/filme/consultarFilmesService.js';
import consultarFilmePorIdService from '../service/filme/consultarFilmePorIdService.js';

import { Router } from 'express';

const endpoints = Router();

endpoints.post('/filme', async (req, resp) => {
    try {
        // Leitura
        let filmeObj = req.body;

        // Processamento
        let id = await salvarFilmeService(filmeObj);

        // Saída
        resp.send({
            id: id
        })
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/filme', async (req, resp) => {
    try {
        // Leitura
        let nome = req.query.nome;

        // Processamento
        let registros = await consultarFilmesService(nome);

        // Saída
        resp.send(registros);

    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err));
    }
});

endpoints.get('/filme/:id', async (req, resp) => {
    try {
        // Entrada
        let id = req.params.id;

        // Processamento
        let filme = await consultarFilmePorIdService(id);

        // Saída
        resp.send(filme);   
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err));
    }
});

export default endpoints;