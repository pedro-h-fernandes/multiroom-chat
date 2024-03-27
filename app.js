/* importar as configurações do servidor */
const app = require('./config/server');

/* parametrizar porta de escuta */
const server = app.listen(80, function(){
    console.log('Servidor online');
})

const io = require('socket.io')(server);

//criar a conexao por websocket

io.on('connection', function(socket){
    console.log('Usuario conectou');

    socket.on('disconnect', function(){
        console.log('Usuario desconectou');
    });

    // socket.on('msgParaServidor', function(data){
    //     socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});

    //     socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});

    //     if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
    //         socket.emit('participantesParaCliente', {apelido: data.apelido});
    //         socket.broadcast.emit('participantesParaCliente', {apelido: data.apelido});
    //     }
    // });
});