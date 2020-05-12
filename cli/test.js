const { deepEqual, ok } = require('assert')
const database = require('./database')

const DEFAULT_HERO = {
    id: 1,
    name: 'Flash',
    power: 'Speed'
}

describe('Suite de manipulação de Herois', () => {
    it('Pesquisar herois utilizando arquivos', async () =>{
        const expected = DEFAULT_HERO
        
        // entre colchetes trás apenas a primeira posição
        const [resultado] = await database.listar(expected.id) 
        deepEqual(resultado, expected)
    })
    
    it('Deve cadastrar um heroi usando arquivos', async () => {
        const expected = DEFAULT_HERO
        const resultado = await database.cadastrar(DEFAULT_HERO)
        const actual = await database.listar(DEFAULT_HERO.id)
        deepEqual(actual, expected)
    })
})