import salvarFilmeService from '../service/filme/salvarFilmeService.js'

import { Router } from 'express';

const endpoints = Router();

endpoints.post('/filme', async (req, resp) => {
    try {
        let filmeObj = req.body;
       
        let id = await salvarFilmeService(filmeObj);

        resp.send({
            id: id
        })
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

export default endpoints;