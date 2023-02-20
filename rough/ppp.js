const http=require('http')

http.createServer((req,res)=>{
    res.end("http method called successfully!")
}).listen(5000);