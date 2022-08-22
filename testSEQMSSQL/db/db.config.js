// require('dotenv').config()
const Sequelize = require('sequelize')
const tedious = require('tedious');
const dbdata = require('../config/config.json')
const colors = require('colors');
const console = require("console-emoji-log");


const sequelize = new Sequelize('partyApp', 'rails', 'WvopaSwyqzr3oppC', {
    host: '54.206.78.215',
    dialect: 'mssql',
    dialectModule: tedious,

})

sequelize
    .authenticate()
    .then(() => {
        console.success(colors.green(`DB -> Connection has been established successfully.`))
    })
    .catch(err => {
        console.log(err);
        console.error(colors.red('DB -> Unable to connect to the database:' + err));
    });

// var sequelize = new Sequelize('partyApp', 'rails', 'WvopaSwyqzr3oppC', {
//     host: '54.206.78.215',
//     dialect: 'mssql',
//     dialectModule: tedious,

// });




module.exports = sequelize