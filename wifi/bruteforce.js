
let Bruteforcer = require('bruteforcer');

let bf = new Bruteforcer({
    chars: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    min: 1,
    max: 14,
    cbk: (str, caseIdx, caseNum) => {
        console.log(str);

        if ('wahaj' == str) {
            console.log('We got it!');
            return true;
        }
        else {
            return false;
        }
    }
});

bf.start();