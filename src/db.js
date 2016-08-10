/**
 * Created by yoyo on 16-8-10.
 */
let mongoose = require('mongoose');

let db = {
    connect:function(){
        mongoose.connect('mongodb://localhost/yoyo-mongoose-test');
    },
    close:function(){
        mongoose.connection.close();
    }
};

module.exports = db;