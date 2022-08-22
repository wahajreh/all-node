const Enumerable = require('linq')
let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    }];

var a = Enumerable.from(cars).select();

console.log(a.asEnumerable().where(e => e.color == "purple").select().count())




