/**
 * Created by yoyo on 16-8-10.
 */
let db = require('./db');
db.connect();
let people = require('./model');

people.remove({name:'yoyo'},function(err,person){
    if(err) throw err;
    console.log('dddddddddddddddddddddddddddd----person');
});



