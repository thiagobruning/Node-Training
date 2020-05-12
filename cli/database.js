const { readFile, writeFile } = require('fs')
const { promisify } = require('util');

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {

    constructor () {
        this.NOME_ARQUIVO = "heroes.json"
    }

    async ObterDadosArquivo()
    {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    async escreverArquivo(dados)
    {
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async cadastrar(heroi)
    {
        const dados = await this.ObterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now();

        // concatenando o id com o objeto de heroi vindo de fora
        const heroiComId = {
            id, 
            ...heroi
        }

        /*
        * concatenando o conteudo que ja tinha no arquivo, com o novo heroi,
        * assim gerando um novo array
        */
        const novoArray = [
            ...dados, 
            heroiComId
        ]

        const resultado = await this.escreverArquivo(novoArray)
        return resultado
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