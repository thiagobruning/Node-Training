const ICrud = require('./interfaces/interfaceCrud');
const Sequelize = require('sequelize');

// estratégia postgres implementando a interface crud
class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null
        this._herois = null
    }

    create = async (item) => {
        const { dataValues } = await this._herois.create(item)
        return dataValues
    }

    read = async (item = {})  => this._herois.findAll({where: item, raw: true});
    

    isConnected = async () =>{
        try {
            await this._driver.authenticate();
            return true;
        }
        catch(error) {
            console.error('Ops!', error);
        }
    }

    async defineModel()
    {
        this._herois = this._driver.define('herois', {
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

        await this._herois.sync();
    }

    // underline na frente = funcão privada
    connect = async () =>
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
        await this.defineModel()
    }
}

module.exports = Postgres