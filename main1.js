// const person = {
//     name : "John Doe",
//     age : 30,
//     isStudent:false,
//     hobbies:["reading","swimming","painting"]
// };
// console.log(person.age);

// function add(a,b){
//     return a +b;
// }
// var add = function(a,b){
//     return a+b;
// }
//var add = (a,b)=>{return a+b}
// var add = (a,b)=>a+b;
// var result = add(299,7);
// console.log(result);


// (function(){
//     console.log('Vats');
// })();
/*
function callback(){
    console.log('Vats is calling a callback function');
}
const add = function(a,b,callback){
    var result = a +b;
    console.log('result: '+result);
    callback();
}
add(3,5,callback);
*/
// const add = function(a,b,callback){
//     var result = a +b;
//     console.log('result: '+result);
//     callback();
// }
// add(2,3,function(){
//     console.log('add completed');
// });
// add(2,3,()=>console.log('add completed'));
// var fs = require('fs');
// var os = require('os');
// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi'+user.username +'!',()=>{
//     console.log('file is created');
// });

//  var _ = require('lodash');
// const notes = require('./notes.js');
// var age= notes.age;
// var result = notes.addNumber(age+18,10);
// console.log(age);
// console.log(result);
// var data = ["person","person",1,2,1,2,'name','age','2'];
// var filter = _.uniq(data);
// console.log(filter);


