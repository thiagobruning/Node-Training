const { readFile } = require('fs')
const { promisify } = require('util');

const readFileAsync = promisify(readFile)

class Database {

    constructor () {
        this.NOME_ARQUIVO = "heroes.json"
    }

    async ObterDadosArquivo()
    {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    escreverArquivo()
    {

    }

    async listar(id)
    {
        const dados = await this.ObterDadosArquivo()

        // se passou iD, traz quem tiver o id. Se não passou return true e traz todos
        const dadosFiltrados =  dados.filter(item => (id ? (item.id === id) : true))
         
        return dadosFiltrados
    }

}

module.exports = new Database()