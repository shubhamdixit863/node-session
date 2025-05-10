// readble stream
// writable 
// duplex (readable and writable both)
// transform
const http=require("http");
const fs=require("fs");


const server=http.createServer((req,res)=>{
    const readStream=fs.createReadStream('largeFile.txt');
    res.writeHead(200,{'content-type':"text/plain"})

    readStream.pipe(res)
    




}).listen(3000,()=>{
    console.log("server started")
})



// const writeStream=fs.createWriteStream('output.txt')
// readStream.pipe(writeStream)
// readStream.on("data",(chunk)=>{
//     console.log(chunk.toString(),chunk.length)
// })

// readStream.on("end",()=>{
//     console.log("file reading finished")
// })

//  yes "this is line" | head -n 100000000000  > largeFile.txt