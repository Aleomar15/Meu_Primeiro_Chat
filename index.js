const express = require("express");
var app = express();
var http = require("http").createServer(app);//fazer que ele rode no servidor nativo do node
var io = require("socket.io")(http);


io.on("connection",(socket)=>{
    socket.on("disconnect",()=>{
        console.log("X deconected: " + socket.id);
    });
    socket.on("msg", (data)=>{
       io.emit("showmsg",data);
       console.log(data);
    });
});

app.set("view engine","ejs");

app.get("/", (req,res)=>{
    res.render("index");
});



http.listen(8080,()=>{//deve usar o servidor base do node
    console.log("APP RODANDO!");
});
