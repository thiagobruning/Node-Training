// classe que irá informar um erro caso não implemente um método
class NotImplementedException extends Error {
    constructor() {
        super("Not Implemented Exception")
    }
}

// estratégia mongodb implementando a interface crud
class MongoDB  extends ICrud {
    constructor() {
        super()
    }

    create(item)
    {
        console.log('Item salvo no mongodb');
    }
}

// estratégia postgres implementando a interface crud
class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item)
    {
        console.log('Item salvo no postgres');   
    }
}

// classe abstrata que implementará os métodos independente da estratégia
class ContextStrategy {
    constructor(strategy) {
        this._database = strategy
    }

    create(item) {
        return this._database.create(item)
    }

    read(item) {
        return this._database.read(item)
    }

    update(id, item) {
        return this._database.update(id, item)
    }

    delete(id) {
        return this._database.delete(id)
    }
}

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()