
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