const Sequelize = require('sequelize')
const db = require('../../db/db.config')

module.exports = db.define('WtoDos', {
    title: {
        type: Sequelize.STRING
    },
    eventId: {
        type: Sequelize.INTEGER
    },
    isDone: {
        type: Sequelize.BOOLEAN
    },
    isDeleted: {
        type: Sequelize.BOOLEAN
    }
})