/**
 * Created by yoyo on 16-8-10.
 */
let db = require('./db');
let People = require('./model');

let yoyo = new People({
    name:'yoyo',
    age:20,
    description:'love nature'
});

db.connect();
yoyo.save(function(err){
    if(err) throw err;
    console.log('hahhahahahhaahhaha----------ok!');
    db.close();
//  在里面关闭：当里面有连接的时候，如果不关闭后果很可怕。
});



