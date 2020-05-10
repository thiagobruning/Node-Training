/*
    obter usuario
    obter telefone usuario
    obter endereço usuario
*/

// converting callback function to Promisse automatically
const util = require('util');
const getAddressAsync = util.promisify(getAddress);

function getUser() {

    return new Promise(function resolvePromisse(resolve, reject) {
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

main()

// async function -> returns promisse
async function main() 
{
    try {
        const user = await getUser();
        // const number = await getNumber(user.id);
        // const address = await getAddressAsync(user.id);

        const result = await Promise.all([ // more fast
            getNumber(user.id),
            getAddressAsync(user.id)
        ]);

        const number = result[0];
        const address = result[1];

        console.log(`
            name: ${user.name},
            number: ${number.number},
            address: ${address.rua} 
        `);
    }
    catch(error) {
        console.error('So bad!', error);
    }
}
