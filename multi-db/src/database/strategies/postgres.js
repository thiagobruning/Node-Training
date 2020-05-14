const ICrud = require('./interfaces/interfaceCrud');
const Sequelize = require('sequelize');

// estratégia postgres implementando a interface crud
class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null
        this._herois = null
        this._connect()
    }
    
    create(item) 
    {
        console.log('Item salvo no postgres');
    }

    isConnected = async () =>{
        try {
            await this._driver.authenticate();
            return true;
        }
        catch(error) {
            console.error('Ops!', error);
        }
    }

    defineModel()
    {
        this._herois = driver.define('herois', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true,
            },

            nome: {
                type: Sequelize.STRING,
                required: true,
            },

            poder: {
                type: Sequelize.STRING,
                required: true,
            }
        }, {
            tableName: 'table',
            freezeTableName: false,
            timestamps: false
        });

        await Herois.sync();
    }

    // underline na frente = funcão privada
    _connect()
    {
        this._driver = new Sequelize(
            'database',
            'user',
            'secretpassword',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorAliases: false
            }
        );
    }
}

module.exports = Postgres