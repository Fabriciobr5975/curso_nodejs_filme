import { salvarFilme, consultarFilmePorNome } from '../../Repository/filmeRepository.js'
import { validarNovoFilme, validarFilmeIgual } from '../../validation/filme/filmeValidation.js';

export default async function salvarFilmeService(filmeObj) {
    // Validação de campos obrigatórios
    validarNovoFilme(filmeObj);

    // Busca filmes com o mesmo nome
    // Valida se existe filme com o mesmo nome
    let registros = await consultarFilmePorNome(filmeObj.nome);
    validarFilmeIgual(registros);

    // Lógica de negócio
    let id = await salvarFilme(filmeObj);

    return id;
}
