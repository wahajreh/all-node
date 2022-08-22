const router = require('express').Router()
const multer = require('multer')
const upload = multer()

const { sendEmail, sendTemplateEmail } = require('../AWS-ses_email')

// sendEmail('wahajreh96@gmail.com', 'wahaj')
//     .catch((ch) => {
//         console.log('catch\n', ch)
//     })
//     .then((th) => {
//         console.log(th)
//     })


router.post('/multer', upload.single('avatar'), async (req, res) => {
    console.log(req.file)
})

router.use('/contestverify', async (req, res) => {

    try {
        var data = await sendEmail('basheerster@gmail.com', 'wahaj')
        res.send(data);
    } catch (error) {
        res.json({
            Status: 500,
            header: 'Error',
            message: 'Internal Server Error. ' + error.message
        });
    }

})

module.exports = router