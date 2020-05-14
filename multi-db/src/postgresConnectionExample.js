// npm i sequelize
// npm i pg-hstore pg

const Sequelize = require('sequelize');
const driver = new Sequelize(
    'database',
    'user',
    'secretpassword', {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorAliases: false
    }
);

main = async ()  => {
    const Herois = driver.define('herois', {
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

    const result = await Herois.findAll({ raw: true, attributes: ['nome'] });
    console.log(result)
}

main()