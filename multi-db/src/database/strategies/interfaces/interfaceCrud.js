// classe que irá informar um erro caso não implemente um método
class NotImplementedException extends Error {
    constructor() {
        super("Not Implemented Exception")
    }
}

// interface a ser implementada
class ICrud {

    create(item) {
        throw new NotImplementedException();
    }

    read(query) {
        throw new NotImplementedException();
    }

    update(id, item) {
        throw new NotImplementedException();
    }

    delete(id) {
        throw new NotImplementedException();
    }
}

module.exports = ICrud