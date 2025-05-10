const readline = require('readline');
const fs=require("node:fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("Regsiter Yourself")
const users=[]
rl.question(`What's your name?\n`,(name)=>{
  let user={};
  user.name=name
    rl.question(`What your age?\n`,(age)=>{
        user.age=age
        users.push(user)
        rl.close();
       // console.log(users); // output here
        // save the users in a file
        fs.writeFile("user.txt",JSON.stringify(user),(err)=>{
            if(err){
                console.error(err);
            }
        });

    })

});

