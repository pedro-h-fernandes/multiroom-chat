/* importar as configurações do servidor */
const app = require('./config/server');

/* parametrizar porta de escuta */
const server = app.listen(80, function(){
    console.log('Servidor online');
})

const io = require('socket.io')(server);