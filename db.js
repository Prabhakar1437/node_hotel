const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels'
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db =mongoose.connection;
// Define event listners for database connection
db.on('connected',() =>{
    console.log('Connected to MongoDB server');

});
db.on('error',(err) =>{
    console.error(' MongoDB connection error:',err);

});
db.on('disconnected',() =>{
    console.log(' MongoDB disconnected');

});
module.exports = db;