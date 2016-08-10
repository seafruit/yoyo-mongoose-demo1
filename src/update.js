/**
 * Created by yoyo on 16-8-10.
 */
let db = require('./db');
db.connect();
let people = require('./model');

people.update({name:'yoyo',age:80},function(err,person){
    if(err) throw err;
    console.log('upuupupupupuupupupupupupupupuup----person');
});




