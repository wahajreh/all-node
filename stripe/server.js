const { getAllUser } = require('./helper/user.helper')


try {
    getAllUser().catch((ch) => {
        console.log(ch)
    })
        .then((th) => {
            console.log(th)
        })
} catch (ex) {
    console.log(ex)
}

