var app = require('http').createServer();
var io=require('socket.io')(app);
var port = 8082;

io.on('connect',function(socket){
    console.log('连接成功')
    socket.on('sendmessage',function(data){
        console.log(data)
        io.sockets.emit('receiveMessage',data);
        io.onerror = function(err){
            console.log(err)
        }
    })
})

app.listen(port);
