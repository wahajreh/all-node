var Intruder = require('intruder');

var intruder = Intruder();

intruder.crack('AS86', function (err, key) {
    if (err) throw new Error(err);
    console.log(key);
});