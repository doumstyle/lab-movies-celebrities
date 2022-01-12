const {model, Schema} = require('mongoose');

const celebritySchema = Schema({
    name: String,
    occupation: String,
    catchphrase: String
});

const celebrityModel = model('celebrities', celebritySchema);

module.exports = celebrityModel;
