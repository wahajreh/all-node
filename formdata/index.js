const axios = require("axios")
const fs = require('fs')
const { FormData } = require("formdata-node")
const { encrypt, decrypt } = require('./encrpt')



var main = async () => {
    var Fd = await readFile('./images/_2022_03_10_13-00-45-0076_1646899245.257092.PNG')

    var filePath = './images/_2022_03_10_13-00-45-0076_1646899245.257092.PNG'

    // console.log(Fd)

    var formData = new FormData();
    formData.append('NRICattachment', Fd.data1.buffer, Fd.data.filePath);
    formData.append('dfdf', Fd.data1);
    var data = {
        abc: "ali", kcb: "pot"
    }
    var strdata = JSON.stringify(data)
    var enc = encrypt(strdata)
    const headers = {
        'Content-Type': 'application/json',
        'token': JSON.stringify(enc)
    }
    console.log(headers)
    axios.post("http://localhost:8088/Users/createUser", data, { headers: headers }).then(function (response) {
        console.log('data', response.data)
    }).catch(function (error) {
        console.log('error', error)
    })
}


for (var index = 0; index < 2; index++) {


}
main()
async function readFile(filePath) {
    try {
        const data = await fs.ReadStream(filePath);
        const data1 = await fs.readFileSync(filePath);
        // console.log(data.toString());
        return { data, data1 }
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}