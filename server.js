const express=require('express')
const path= require('path')
const socketio=require('socket.io')
const http=require('http')

const app=express();
const server=http.createServer(app)
const io=socketio(server)
app.use('/',express.static(path.join(__dirname,'frontend')))
io.on('connection',(socket)=>{
    console.log("new socket created"+socket.id)
    socket.emit('connected')
    socket.on('send_msg',(data)=>{console.log("recived maassage="+data.massage)
io.emit('rcv_msg',data)})
})
server.listen(2346,()=>console.log('website open on http://localhost:2346'))