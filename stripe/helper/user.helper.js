const user = require('../models/User/user.model')
const sequelize = require('../db/db.config')


// let UserReq = require('../../JsonModel/UserReq')

module.exports = {
    verifyuser: async (n) => {
        try {

            const data = await user.findOne({ where: { emailAddress: n } })
                .then((result) => {

                    if (result != undefined) {
                        const error = setNewError(req, 500, 'Email Already Exists')
                        res.status(error.status).json(error);
                        const stringData = JSON.stringify(result)
                        const jsonData = JSON.parse(stringData)

                        return result
                    }
                    else {
                        return result;
                    }

                }).catch((err) => {
                    return err;
                });

            const stringData = JSON.stringify(data)
            const jsonData = JSON.parse(stringData)

            return jsonData

        } catch (e) { return e; }
    },
    getAllUser: async () => {
        try {
            const data = await user.findAll()
            const stringData = JSON.stringify(data)
            const jsonData = JSON.parse(stringData)
            return jsonData
        } catch (ex) {
            console.log(ex)
        }
    },

    // UpdateUser: async (firstName
    //     , lastName
    //     , emailAddress
    //     , password
    //     , address
    //     , city
    //     , state
    //     , postalCode
    //     , mobileNo
    //     , imageUrl
    //     , subscriptionPlan
    //     , referralCode
    //     , userType
    //     , playerId
    //     , deviceType
    //     , deviceId
    //     , socialType
    //     , socialId
    //     , otpNumber
    //     , isActivate
    //     , isVerify
    //     , isFreeSubscription
    //     , isExpire
    //     , isDeleted)
    UpdateUser: async (data) => {
        try {
            //             const [results, metadata] = await sequelize.query(`UPDATE [dbo].[userRegisteration]
            //             SET [firstName] ='${firstName}'
            // ,[isDeleted] =${isDeleted} where emailAddress='${emailAddress}'
            //             `).catch((e) => { console.log(e) }).then((e) => { console.log(e) });
            console.log(data)

            var uUser = await user.update(data, { where: { emailAddress: data.emailAddress } }).catch((e) => { console.log(e) })
                .then((e) => {
                    // if (e > 0) {
                    //     console.log('then', e)

                    //     return e;

                    // }

                    // else {
                    //     console.log('no data FoundS', e)
                    //     const error = setNewError(req, 500, 'No Data Found')
                    //     res.status(response.status).json(response)
                    // }
                    return e ? undefined : null;


                });

            console.log("data", uUser)

            return uUser ? undefined : null;


        } catch (e) {
            console.log("catch", e)
        }
    },
    createUser: async (firstName
        , lastName
        , emailAddress
        , password
        , address
        , city
        , state
        , postalCode
        , mobileNo
        , imageUrl
        , subscriptionPlan
        , referralCode
        , userType
        , playerId
        , deviceType
        , deviceId
        , socialType
        , socialId
        , otpNumber
        , isActivate
        , isVerify
        , isFreeSubscription
        , isExpire
        , isDeleted) => {

        try {


            const data = await user.create({
                firstName
                , lastName
                , emailAddress
                , password
                , address
                , city
                , state
                , postalCode
                , mobileNo
                , imageUrl
                , subscriptionPlan
                , referralCode
                , otpNumber
                , userType
                , playerId
                , deviceType
                , deviceId
                , socialType
                , socialId
                , isActivate
                , isVerify
                , isFreeSubscription
                , isExpire
                , isDeleted
            }
            ).then((result) => {
                const stringData = JSON.stringify(result)
                const jsonData = JSON.parse(stringData)

                return jsonData
            }).catch((err) => {
                console.log(err)
            });
            const stringData = JSON.stringify(data)
            const jsonData = JSON.parse(stringData)

            return jsonData
        } catch (e) {
            console.log(e)
        }
    },
    verifyOTP: async (id, otp) => {
        try {
            var re;
            var OtpUser = await user.findOne({ where: { id: id, otpNumber: otp } })
                .catch((e) => { console.log(e) })
                .then((e) => {
                    console.log(e)
                    if (e == null) {
                        re = false;
                        return re;
                    }
                    if (e.dataValues.id == id) {
                        // console.log(e.dataValues.id)
                        re = true;
                        return true;
                    }
                    else { return false; }
                });
            // console.log(OtpUser)
            return re;
        } catch (e) { return e; }
    }
    ,
    deleteuser: async (token) => {
        return await user.destroy({ where: { column_1: token } })
    },
    verifyUserByID: async (id) => {
        try {
            var empty = {}
            var check;
            const data = await user.findOne({ where: { id: id } })
                .then((result) => {
                    // console.log(result)
                    if (result != null) {

                        check = true;

                        return check
                    }
                    else {
                        check = false;
                        return check;
                    }
                    console.log(check)
                }).catch((err) => {
                    return err;
                });

            return check;

        } catch (e) { return e; }
    }
}