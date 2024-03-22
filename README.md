# Multiroom Chat em Node.js

Este é um projeto de aplicativo de chat multiroom desenvolvido em Node.js. O aplicativo permite que os usuários se conectem a várias salas de chat e conversem em tempo real.

## Funcionalidades

- **Salas de Chat Múltiplas:** Os usuários podem criar ou entrar em várias salas de chat.
- **Mensagens em Tempo Real:** As mensagens são entregues em tempo real, usando WebSockets para uma experiência de chat instantânea.
- **Interface Simples:** Interface de usuário limpa e intuitiva para uma experiência de chat fácil de usar.
- **Customizável:** O código é facilmente extensível e personalizável para atender às necessidades específicas do projeto.

## Tecnologias Utilizadas

- **Node.js:** Plataforma de tempo de execução JavaScript usada para construir o servidor.
- **Express.js:** Framework web para Node.js usado para criar APIs RESTful, roteamento e renderização de páginas.
- **Express Validator:** Middleware para validação de dados em requisições Express.js.
- **Body Parser:** Middleware para análise do corpo das requisições em aplicativos Express.js.
- **Consign:** Módulo para autoload de scripts, modelos, visões, etc. em aplicativos Express.js.
- **EJS:** Engine de visualização para renderizar páginas HTML com JavaScript embutido.
- **Nodemon:** Utilitário que monitora alterações nos arquivos do aplicativo e reinicia automaticamente o servidor.


## Instalação

1. Clone o repositório


2. Navegue até o diretório do projeto


3. Instale as dependências: npm i


4. Configure o banco de dados MySQL:
   - Crie um banco de dados MySQL.
   - Edite o arquivo `config/dbConnection.js` com suas credenciais do MySQL.

5. Execute as migrações do banco de dados

6. Inicie o servidor: nodemon app.js

7. Acesse o aplicativo em seu navegador: http://localhost:3000




