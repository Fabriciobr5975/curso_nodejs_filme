import { alterarFilme } from "../../Repository/filmeRepository.js";
import { validarCamposObrigatoriosFilme } from "../../validation/filme/filmeValidation.js";

export default function alterarFilmeService(filmeObj, id) {
    validarCamposObrigatoriosFilme(filmeObj);
    let linhasAfetadas = alterarFilme(filmeObj, id);

    if(linhasAfetadas === 0) {
        throw new Error("Nenhum filme foi alterado");
    }
}