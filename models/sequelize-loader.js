const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'postgres://postgres:postgres@db/schedule_arranger',
    // postgres://<user>:<password>@<hostname>/<database>
    {
        operatorAliases: false
    }
);

module.exports = {
    database: sequelize,
    Sequelize: Sequelize
};
