/* importar as configurações do servidor */
const app = require('./config/server');

/* parametrizar porta de escuta */
app.listen(80, function(){
    console.log('Servidor online');
})