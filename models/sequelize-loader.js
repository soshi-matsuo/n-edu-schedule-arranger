const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'postgres://postgres:postgres@localhost/schedule_arranger',
    {
        operatorAliases: false
    }
);

module.exports = {
    database: sequelize,
    Sequelize: Sequelize
};
