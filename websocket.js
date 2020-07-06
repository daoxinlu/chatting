// var app = require('express')

// var server = require('http').Server(app);

var WebSocket = require('ws');

var wss = new WebSocket.Server({port:8080});

wss.on('connection',function connection(ws){
    console.log('server:receive connection.');
    ws.on('message',function incoming(message){
        console.log('server:received:%s',message);
    });
    ws.send('world')
})

// wss.on('message',function receive(ms){
//     console.log(ms);
//     ws.send('ms')
// })
// server.get('/',function(req,res){
//     res.sendfile(__dirname+'/index.html');

// })

// server.listen(3000)
