const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:doidera_223@users.h7o9q.mongodb.net/users?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("Database connected!"));
mongoose.Promise = global.Promise;

module.exports = mongoose;