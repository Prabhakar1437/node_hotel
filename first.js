const fs = require('fs');
//Blocking , synchronous way
/*

const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn);
const textOut = `This is what we know about the avacado : ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log('File written !');
//Non- -blocking,asynchronus way
*/
 fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
    console.log(data1);
    const url = `./txt/${data1}`+".txt";
    console.log(url);
    fs.readFile(url,'utf-8',(err,data2)=>{
   
        console.log(data2);
        }); 
}); 
    

//console.log('will read file !');