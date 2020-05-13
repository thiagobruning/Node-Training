const ICrud = require('./interfaces/interfaceCrud');

// estratégia postgres implementando a interface crud
class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('Item salvo no postgres');
    }
}

module.exports = Postgres