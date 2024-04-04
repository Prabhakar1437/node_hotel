//console.log('Server file is running');
// function add(a, b){
//     return a+b;
// }
// var result = add(2,5);
// console.log(result);

// function callback(){
//     console.log('now adding is successful complete');
// }
// const add = function(a,b,callback){
//     var result = a+b;
//     console.log('result: '+result);
//     callback();
// }
// add(3,100989893,callback);

//JSON:-
//[1.]
// const jsonString = '{"name":"John","age":38,"city":"New York"}';
// const jsonObject= JSON.parse(jsonString);
// console.log(jsonObject.name);
//[2.]
// const objectToConvert ={
//     name:"Vats",
//     age:23
// };
// const json = JSON.stringify(objectToConvert);
// console.log(json);
// console.log(typeof json);


//[3.]Express
const express = require('express')
const app = express();
require('dotenv').config();

const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT ||3000;

app.get('/', function (req, res) {
  res.send('Welcome to my hotel')
})

//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//use the routers

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);



app.listen(PORT, ()=> {
    console.log('listening on port 3000');
})  


