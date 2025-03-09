import conexao from './connection.js';

export async function salvarFilme(filme){
    let comando = `
        insert into tb_filme (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
	        values(?, ?, ?, ?, ?)
    `

    let resposta = await conexao.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
    let info = resposta[0];

    let idFilme = info.insertId;
    return idFilme;
}
