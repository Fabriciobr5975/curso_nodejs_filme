import salvarFilmeService from '../service/filme/salvarFilmeService.js'
import consultarFilmesService from '../service/filme/consultarFilmesService.js';
import consultarFilmePorIdService from '../service/filme/consultarFilmePorIdService.js';
import alterarFilmeService from '../service/filme/alterarFilmeService.js';
import deletarFilmeService from '../service/filme/deletarFilmeService.js';
import alterarCapaFilmeService from '../service/filme/alterarCapaFilmeService.js';

import multer from 'multer';

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

endpoints.put('/filme/:id', async (req, resp) => {
    try {
        // Entrada
        let filmeObj = req.body;
        let id = req.params.id;

        // Processamento
        await alterarFilmeService(filmeObj, id);

        // Saída
        resp.status(204).send();
    } catch {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

endpoints.delete('/filme/:id', async(req, resp) => {
    try {
        // Entrada
        let id = req.params.id;

        // Processamento
        await deletarFilmeService(id);

        resp.status(204).send();
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err)); 
    }
});

let uploadCapa = multer({dest: './storage/capa'});

endpoints.put('/filme/:id/imagem', uploadCapa.single('imagem'), async(req, resp) => {
    try {
        // Entrada
        let id = req.params.id;
        let caminhoImagem = req.file.path;

        // Processamento
        await alterarCapaFilmeService(id, caminhoImagem);

        // Saída
        resp.status(204).send();
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err)); 
    }
});

export default endpoints;