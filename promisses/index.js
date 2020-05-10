/*
    obter usuario
    obter telefone usuario
    obter endereço usuario
*/

// converting callback function to Promisse automatically
const util = require('util');
const getAddressAsync = util.promisify(getAddress);

function getUser() {

    return new Promise(function resolvePromisse(resolve, reject){
        setTimeout(function () {
            return resolve({
                id: 1,
                name: 'Thiago',
                dateBirth: new Date()
            })
        }, 1000);
    });
}

function getNumber(idUser) {

    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function () {
            return resolve({
                number: '984847704',
                ddd: 41,
            })
        }), 2000;
    });
}

function getAddress(idUser, callback) {

    return callback(null, {
        rua: 'Getulio Vargas',
        numero: 69
    });
}

const userPromisse = getUser();

userPromisse.then(function (user){ // if success
    return getNumber(user.id)
        .then(function resolveNumber(result){
            return {
                user: {
                    name: user.name,
                    id: user.id 
                },
                number: result
            }
        })
        .then(function (result1){
            const address = getAddressAsync(result1.user.id);
            return address.then(function resolveAdress(result2){
                return {
                    user: result1.user.name,
                    number: result1.number,
                    address: result2
                } 
            })
        })
        .then(function (result){
            console.log('result', result);
        });
})
.catch(function (error) { // if error
    console.error('Ops!', error);
});
