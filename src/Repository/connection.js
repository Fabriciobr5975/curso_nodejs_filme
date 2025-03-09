import mysql from 'mysql2/promise'

let conexao = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_MYSQL_PWD,
    database: process.env.MYSQL_DB
});

console.log("--> Conexão com BD realizada");

export default conexao;