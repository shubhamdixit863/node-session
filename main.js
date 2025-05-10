//const add =require("./module")
//let data=add(1,2);

//console.log(data);

console.log("main module");

// global objects in node js
//console.log(Object.getOwnPropertyNames(global))

// file reading
// io operation
//  -- asynchrnously handle
setTimeout(()=>{
    console.log("hii there from settimeout");

    for (i=0;i<100000;i++){
        console.log("hiii there from settimeout loop");
    }

},10000)

console.log("main module 2");
for (i=0;i<100;i++){
    console.log("hiii there");
}
i=20;
while (i>10){
    console.log("hiii there");
    i--
}