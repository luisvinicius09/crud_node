const mongoose = require('mongoose');

mongoose.connect('url', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("Database connected!"));
mongoose.Promise = global.Promise;

module.exports = mongoose;
