const ICrud = require('./interfaces/interfaceCrud');

// estratégia mongodb implementando a interface crud
class MongoDB extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('Item salvo no mongodb');
    }
}

module.exports = MongoDB