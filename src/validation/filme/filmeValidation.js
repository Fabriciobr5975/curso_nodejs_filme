
export function validarNovoFilme(filmeObj) {
    if (!filmeObj.nome)
        throw new Error("Nome do filme obrigatário");

    if (!filmeObj.sinopse)
        throw new Error("Sinopse do filme obrigatário");

    if (!filmeObj.avaliacao)
        throw new Error("Avaliação do filme obrigatário");

    if (isNaN(filmeObj.avaliacao))
        throw new Error("Avaliação do filme inválida");

    if (!filmeObj.lancamento)
        throw new Error("Lançamento do filme obrigatário");

    if (filmeObj.disponivel == undefined)
        throw new Error("Disponível do filme obrigatário");

}

export function validarFilmeUnico(registros) {
    if(registros.length === 0) {
        throw new Error('Filme não encontrado');
    }
}

export function validarFilmeIgual(registros) {
    if(registros.length > 0) {
        throw new Error('Já existe filme cadastrado com esse nome');
    }
}