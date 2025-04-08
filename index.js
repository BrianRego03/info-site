const {createServer} = require("node:http");
const fs=require("node:fs");

const portName=8080;
const server=createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile('index.html','utf-8',(err,data)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"});
                res.end("Server error")
            }
            else {
                res.writeHead(200,{"content-type":"text/html"});
                res.end(data);
            }
        });
    }
    else if(req.url==="/about"){
        fs.readFile('about.html','utf-8',(err,data)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"});
                res.end("Server error");
            }
            else{
                res.writeHead(200,{"content-type":"text/html"});
                res.end(data);
            }
        });
    }
    else if(req.url==="/contact-me"){
        fs.readFile('contact-me.html','utf-8',(err,data)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"});
                res.end("Server error");
            }
            else{
                res.writeHead(200,{"content-type":"text/html"});
                res.end(data);
            }
        })
    }
    else {
        fs.readFile("404.html","utf-8",(err, data)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"});
                res.end("Server error");
            }
            else{
                res.writeHead(200,{"content-type":"text/html"});
                res.end(data);
            }
        })
    }

})
server.listen(portName,()=>{
    console.log(`Server running at localhost:${portName}`);
})