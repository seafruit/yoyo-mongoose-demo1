/**
 * Created by yoyo on 16-8-10.
 */
let db = require('./db');
db.connect();
let people = require('./model');

people.find({name:'yoyo'},function(err,person){
    if(err) throw err;
    console.log('qqqqqqqqqqqqqqqqqqqqqqqq----person');
    console.log(person);
});

