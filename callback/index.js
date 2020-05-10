/*
    obter usuario
    obter telefone usuario
    obter endereço usuario
*/

function getUser(callback)
{
    setTimeout(function (){
        return callback(null,{
            id: 1,
            name: 'Thiago',
            dateBirth: new Date()
        })
    }, 1000);
}

function getNumber(idUser, callback)
{
    setTimeout(function (){
        return callback(null,{
            number: '984847704',
            ddd: 41,
        })
    }), 2000;
}

function getAddress(idUser, callback) 
{
    return callback(null, {
        rua: 'Getulio Vargas',
        numero: 69
    });
}

getUser(function resolveUser(error, user) {
    // null || "" || 0 
    if(error) {
        console.error("deu ruim em usuario");
        return;
    }
    getNumber(user.id,function resolveNumber(error1, number){
        if (error1) {
            console.error("deu ruim em telefone");
            return;
        }
        getAddress(user.id, function resolveAddress(error2, address){
            if (error2) {
                console.error("deu ruim em endereço");
                return;
            }
            console.log(`
                Nome: ${user.name},
                Endereço: ${address.rua},
                Telefone: ${number.number}
            `);
        });
    });
});

