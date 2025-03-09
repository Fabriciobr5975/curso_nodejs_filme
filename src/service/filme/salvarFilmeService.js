import { salvarFilme } from '../../Repository/filmeRepository.js'
import { validarNovoFilme } from '../../validation/filme/filmeValidation.js';

export default async function salvarFilmeService(filmeObj) {
    validarNovoFilme(filmeObj);

    let id = await salvarFilme(filmeObj);

    return id;
}
