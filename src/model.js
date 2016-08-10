/**
 * Created by yoyo on 16-8-10.
 */
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let peopleSchema = new Schema({
    name: String,
    age: String,
    description: String
});

let People = mongoose.model('People', peopleSchema);
module.exports = People;