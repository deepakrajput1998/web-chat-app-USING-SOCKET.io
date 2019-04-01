let socket=io();
socket.on('connected',()=>{
    console.log("conected"+socket.id)

})

$(function(){
    let msglist=$('#msg_list')
    let sendbtn=$('#msg_btn')
    let msgbox=$('#msg_box');

    sendbtn.click(function(){
        let msg=msgbox.val()
        socket.emit('send_msg',{massage:msg})
    })
    socket.on('rcv_msg',function(data){
        msglist.append( $("<li>"+ data.massage +"</li>"))
    })
})