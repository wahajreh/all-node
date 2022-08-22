var WiFiControl = require('wifi-control');

WiFiControl.init({
    debug: true
});

for (var k = 0; k < 5000000000000000000000000000; k++) {



    var digits = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let OTP = '';
    for (let i = 0; i < 8; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    if (OTP.includes('wahaj')) {

        console.log(OTP)
    }
}

var _ap = {
    ssid: "Shakeel",
    password: "mypassword"
};

// var _ap = {
//     ssid: "Wahaj-net",
//     password: "adminwahaj"
// };



var results = WiFiControl.connectToAP(_ap, function (err, response) {
    if (err) console.log("err", err);
    if (response.success) {
        console.log(response.success);

    }
});