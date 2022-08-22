var Sequelize = require('sequelize');
var tedious = require('tedious');


var sequelize = new Sequelize('partyApp', 'rails', 'WvopaSwyqzr3oppC', {
    host: '54.206.78.215',
    dialect: 'mssql',
    dialectModule: tedious,

});

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;