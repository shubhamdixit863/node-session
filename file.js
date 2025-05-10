const fs=require("fs");
const fspromise=require("fs/promises");
const os =require("os");

// fs.readFile("user.txt", "utf8", (err, data) => {
//     console.log(data)
// })

// fs.WriteFile()
// fs.unlink("user.txt", (err)=>{
//     console.log(err)
// })

// const dta=fs.readFileSync("user.txt", "utf8")
//
//
// console.log("hiii",dta);
//
// fspromise.readFile("user.txt", "utf8").then((data)=>{
//     console.log("PRomise data",data)
// })

// fs.appendFile("data.tx","helo there"+os.EOL, (err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// });