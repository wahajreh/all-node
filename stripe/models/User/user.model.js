const { Sequelize, DataTypes } = require('sequelize')
const db = require('../../db/db.config')

module.exports = db.define('userRegisteration', {
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    emailAddress: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    postalCode: { type: DataTypes.STRING },
    mobileNo: { type: DataTypes.STRING },
    imageUrl: { type: DataTypes.STRING },
    subscriptionPlan: { type: DataTypes.STRING },
    referralCode: { type: DataTypes.STRING },
    otpNumber: { type: DataTypes.STRING },
    userType: { type: DataTypes.STRING },
    playerId: { type: DataTypes.STRING },
    deviceType: { type: DataTypes.STRING },
    deviceId: { type: DataTypes.STRING },
    socialType: { type: DataTypes.STRING },
    socialId: { type: DataTypes.STRING },
    isActivate: { type: DataTypes.BOOLEAN },
    isVerify: { type: DataTypes.BOOLEAN },
    isFreeSubscription: { type: DataTypes.BOOLEAN },
    isExpire: { type: DataTypes.BOOLEAN },
    isDeleted: { type: DataTypes.BOOLEAN },
    // userBusinessIsActive:  {type:DataTypes.STRING},
    // userBusinessIsAdded:  {type:DataTypes.STRING}
}, {
    freezeTableName: true
    // , tableName: 'userRegisteration',
    // timestamps: false,
})