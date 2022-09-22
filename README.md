<div id="top"></div>


<br />
<div align="center">
  <a style="text-decoration: none;" href="https://blaze.com/r/KOGDR9">
    <img src="./assets/blaze.png" alt="Logo" width="auto" height="80">
  </a>

  <h2 align="center">Blaze Double</h2>
</div>




## 🤖 Bot Blaze
 
A [Blaze][blaze] apostas é um cassino online que recentemente se tornou popular nas redes sociais. 

Esse bot tem como objetivo enviar mensagem em grupo/canal no telegram, indicando uma possível cor para apostar.

* __O bot não faz a coleta da útima cor que saiu na blaze, isso você vai ter que fazer.__
* __Para fazer alguma alteração no padrão desse Bot, acesse esse arquivo `MetricDouble.ts`.__
 
  Caminho:
  ```
  ./src/helpers/botMetrics/MetricDouble.ts
  ```
* __Esse bot foi desenvolvido com o padrão de cores 🔴🔴🔴⚫, ao cadastrar seu bot , precisa informar o padrão, ou seja, a quantidade de vezes que precisa repetir uma cor para poder enviar o sinal no canal.__


<p align="right"><a href="#top">top</a></p>




## ✨ Instalação

_Para executar o bot, precisa seguir os passos a seguir._
* __Presumo que já tenha [NodeJs][nodejs] instalado.__

1. Clone o repositório
   ```sh
   git clone https://github.com/jocimarjsc/blazebot
   ```
2. Instalar as dependências
   ```sh
   npm install
   ```

3. Coloque os valores das variavés de ambiente no arquivo `.env`
   ```js
   PORT = 3000 //não alterar essa porta
   
   TOKEN_TELEGRAM = your bot token
   
   CHANNEL_NAME = your ID channel

   BOT_NAME = bot name

   DATABASE_URL="mysql://userDatabase:password@localhost:port/nameDatabase"
   ```

<p align="right"><a href="#top">top</a></p>




### 🗃️ Banco de dados

Para esse projeto é necessário ter um banco de dados, optei por usar o [MySql][mysql].

1. Instale o [MySql][mysql] via docker: https://hub.docker.com/_/mysql

2. Crie um banco de dados com o seguinte nome `tips_blaze`
   docker run --name mk-phpmyadmin -v phpmyadmin-volume:/etc/phpmyadmin/config.user.inc.php --link mk-mysql:db -p 82:80 -d phpmyadmin/phpmyadmin

<p align="right"><a href="#top">top</a></p>




## 📝 Como Usar

1. Deve-se executar

   ```
   npx prisma migrate dev --name add_tables
   ```
   ```

2. Executar como desenvolvimento
   ```
   npm run dev
   ```
   __Se tudo ocorreu bem, deve ver no console as seguintes messagens:__
   ```
   🤖 Bot On! 🟢
   ✅ Server is running!

3. Executar o script de envio de sinais para o bot: node run testBlazeAPI.js
   ```

<p align="right"><a href="#top">top</a></p>

[blaze]: https://blaze.com/r/KOGDR9
[mysql]: https://dev.mysql.com/downloads/installer/
[nodejs]: https://nodejs.org/en/


Prerequisitos: 
1- bashLinux: https://www.gnu.org/software/bash/
2- docker(container) : https://www.docker.com/
3- node: https://nodejs.org/en/download/
