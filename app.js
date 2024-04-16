/* importar as configurações do servidor */
const app = require('./config/server');

/* parametrizar porta de escuta */
const server = app.listen(3000, function(){
    console.log('Servidor online');
})

const io = require('socket.io')(server);

app.set('io', io); // cria variavel global io pora ser acessada em qualquer lugar do projeto

//criar a conexao por websocket

io.on('connection', function(socket){
    console.log('Usuario conectou');

    socket.on('disconnect', function(){
        console.log('Usuario desconectou');
    });

    socket.on('msgParaServidor', function(data){
        socket.emit('msgParaCliente', {apelido: data.apelido, msg: data.msg});  //envia a msg pro cliente que enviou a msg

        socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, msg: data.msg}); // envia para todos os usuarios do chat

    //     if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
    //         socket.emit('participantesParaCliente', {apelido: data.apelido});
    //         socket.broadcast.emit('participantesParaCliente', {apelido: data.apelido});
    //     }
    });
});