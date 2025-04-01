# GULP - Studies

## Vamos iniciar um novo projeto no terminal
Mas antes precisamos instalar o ```gulp globalmente```
```
npm install --global gulp-cli
```
Após isso iniciamos nosso projeto com o ```node```
```
npm init
```
E vai Dando ```enter``` em todas as perguntas que aparecem.  
Após isso, instalamos o ```gulp localmente```
```
npm install --save-dev gulp
```
Após isso, vamos até o arquivo ```package.json``` e acrescentamos o ```gulp no script```
```
  "scripts": {
    "gulp": "gulp",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
## Após isso criamos o arquivo ```gulpfile.js``` e adiconamos a pasta ```node_modules``` no ```gitignore```

AO USAR O GULP PERCEBE-SE QUE A AUTOMAÇÃO DE TAREFAS FICA MAIS FÁCIL. 
Básicamente o Gulp trabalha com callbacks e na nossa função precisamos adicionar.
## PARA RODAR OU EXECUTAR UMA tarefa NO TERMINAL USAMOS:

```
node nomeDoArquivo
```
Aqui usamos ```node .\sum.js``` É o nome do arquivo

## Exportar arquivo

```
module.exports = somar;
```

## Exportando e executando arquivo gulp

Aqui vamos exportar a funcao: ```export default funcaoPadrao;``` ou ```exports.default = funcaoPadrao;``` Essa função esta no arquivo ```gulpfile.js```

No terminal executamos:
```
npm run gulp 
```

## Function com gulp
```
function funcaoPadrao(callback) {
  console.log('Função padrão executada via gulp');
  callback();
}

function dizOi(callback) {
  console.log('Oi Gulp!');
  dizTchau(); // Chama a função dizTchau
  callback();
}

function dizTchau() {
  console.log('Tchau Gulp!');
}

// export default funcaoPadrao;
exports.default = funcaoPadrao; // Exporta a função padrão para ser usada em outros arquivos
exports.dizOi = dizOi; // Exporta a função dizOi para ser usada em outros arquivos
```

Para executar/rodar a ```function dizOi``` precisamos ```npm run gulp dizOi``` nesse caso apenas a ```function dizOi``` será chamada

## Trabalhando com Gulp em serie
Código do arquivo
```
const gulp = require('gulp');

function funcaoPadrao(callback) {
  console.log('Função padrão executada via gulp');
  callback();
}

function dizOi(callback) {
  console.log('Oi Gulp!');
  dizTchau(); // Chama a função dizTchau
  callback();
}

function dizTchau() {
  console.log('Tchau Gulp!');
}

// export default funcaoPadrao;
exports.default = gulp.series(funcaoPadrao, dizOi); // Exporta a função padrão para ser usada em outros arquivos
exports.dizOi = dizOi; // Exporta a função dizOi para ser usada em outros arquivos
```

Saída no terminal
```
PS C:\Users\Franklin Lorran\Downloads\FrontEnd M16\gulp> npm run gulp

> frontend-m16@1.0.0 gulp
> gulp

[15:44:15] Using gulpfile ~\Downloads\FrontEnd M16\gulp\gulpfile.js
[15:44:15] Starting 'default'...
[15:44:15] Starting 'funcaoPadrao'...
Função padrão executada via gulp
[15:44:15] Finished 'funcaoPadrao' after 1.17 ms
[15:44:15] Starting 'dizOi'...
Oi Gulp!
Tchau Gulp!
[15:44:15] Finished 'dizOi' after 1.22 ms
[15:44:15] Finished 'default' after 5.26 ms
```

## Series e Parallel são 2 formas de executar funções, em serie, uma função vai ser executada após a outra terminar. Já e, Parallel ou em paralelo, elas serão executas e finalizadas ao mesmo tempo.

Aqui temos as funções sendo executasdas em parallel.
```
const gulp = require('gulp');

function funcaoPadrao(callback) {
  setTimeout(() => {
    console.log('Função padrão executada via gulp com setTimeout');
    callback();
  }, 2000);
  // console.log('Função padrão executada via gulp');
}

function dizOi(callback) {
  setTimeout(() => {
    console.log('Oi Gulp!');
    dizTchau(); // Chama a função dizTchau
    callback();
  }, 1000);
}

function dizTchau() {
  console.log('Tchau Gulp!');
}

// export default funcaoPadrao;

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi; // Exporta a função dizOi para ser usada em outros arquivos
```

Saída no terminal em parallel
```
PS C:\Users\Franklin Lorran\Downloads\FrontEnd M16\gulp> npm run gulp

> frontend-m16@1.0.0 gulp
> gulp


> frontend-m16@1.0.0 gulp
> gulp

> frontend-m16@1.0.0 gulp
> gulp

> gulp


[16:15:12] Using gulpfile ~\Downloads\FrontEnd M16\gulp\gulpfile.js
[16:15:12] Starting 'default'...
[16:15:13] Starting 'funcaoPadrao'...
[16:15:13] Starting 'dizOi'...
Oi Gulp!
Tchau Gulp!
[16:15:14] Finished 'dizOi' after 1 s
Função padrão executada via gulp com setTimeout
[16:15:15] Finished 'funcaoPadrao' after 2.01 s
[16:15:15] Finished 'default' after 2.01 s
```

Função em series
```
const gulp = require('gulp');

function funcaoPadrao(callback) {
  setTimeout(() => {
    console.log('Função padrão executada via gulp com setTimeout');
    callback();
  }, 2000);
  // console.log('Função padrão executada via gulp');
}

function dizOi(callback) {
  setTimeout(() => {
    console.log('Oi Gulp!');
    dizTchau(); // Chama a função dizTchau
    callback();
  }, 1000);
}

function dizTchau() {
  console.log('Tchau Gulp!');
}

// export default funcaoPadrao;

exports.default = gulp.series(funcaoPadrao, dizOi); // Exporta a função padrão para ser usada em outros arquivos
exports.dizOi = dizOi; // Exporta a função dizOi para ser usada em outros arquivos
```

Saída do terminal em series
```

PS C:\Users\Franklin Lorran\Downloads\FrontEnd M16\gulp> npm run gulp

> frontend-m16@1.0.0 gulp
> gulp
Tchau Gulp!
[16:14:57] Finished 'dizOi' after 1 s
[16:14:57] Finished 'default' after 3.01 s
PS C:\Users\Franklin Lorran\Downloads\FrontEnd M16\gulp> npm run gulp

> frontend-m16@1.0.0 gulp
> gulp

[16:14:57] Finished 'dizOi' after 1 s
[16:14:57] Finished 'default' after 3.01 s
```

Observa-se que em parallel a execução é bem mais rapida, em series uma função é executada após a outra demorando um pouco mais.

## Como instalar Sass no gulp
```
npm install --save-dev gulp-sass
```

Depois vamos precisar instalar o SASS
```
npm install --save-dev sass
```

Após instalar o ```GULP-SASS e o SASS``` vamos importalos no arquivo ```gulpfile.js```
```
const sass = require('gulp-sass')(require('sass')); // Importa o gulp-sass e o sass importação conjunta
```

## Function que compila o sass
```
function compilaSass() {
  return gulp.src('./source/styles/*.scss') // Pega todos os arquivos .scss dentro da pasta sass
    .pipe(sass()) // Compila o Sass
    .pipe(gulp.dest('./build/styles')); // Salva os arquivos compilados na pasta css
}
```

exportar o arquivo ```exports.sass = compilaSass; // Exporta a função compilaSass para ser usada em outros arquivos```

testando a function no terminal :
```
PS C:\Users\Franklin Lorran\Downloads\FrontEnd M16\gulp> npm run gulp sass

> frontend-m16@1.0.0 gulp
> gulp sass

[18:46:14] Using gulpfile ~\Downloads\FrontEnd M16\gulp\gulpfile.js
[18:46:14] Starting 'sass'...
[18:46:14] Finished 'sass' after 118 ms
```

Após compilar os arquivos ```main.scss e variaveis.scss``` agora estão tbm no ```build\style``` como ```main.css e variaveis.css``` no entanto ```variaveis.css``` está vazio isso pq ele não precisa ser compilado. vamos corrigir, vamos deletar os arquivos em build\styles e após isso vamos editar o códigop a seguir e depois compilar ele.

```
function compilaSass() {
  return gulp.src('./source/styles/main.scss') // Pega todos os arquivos .scss dentro da pasta sass
    .pipe(sass()) // Compila o Sass e loga os erros
    .pipe(gulp.dest('./build/styles')); // Salva os arquivos compilados na pasta css
}
```
Compilando o arquivo
```
PS C:\Users\Franklin Lorran\Downloads\FrontEnd M16\gulp> npm run gulp sass

> frontend-m16@1.0.0 gulp
> gulp sass

[18:54:08] Using gulpfile ~\Downloads\FrontEnd M16\gulp\gulpfile.js
[18:54:08] Starting 'sass'...
[18:54:08] Finished 'sass' after 97 ms
```

Agora Vamos fazer com que o arquivo final seja mais limpo e organizado mudando poucas coisas na ```funtion compilaSass```
```
function compilaSass() {
  return gulp.src('./source/styles/main.scss') // Pega todos os arquivos .scss dentro da pasta sass
    .pipe(sass({
      outputStyle: 'compressed', // Formato de saída do CSS (compactado)

    })) // Compila o Sass e loga os erros
    .pipe(gulp.dest('./build/styles')); // Salva os arquivos compilados na pasta css
}
```

## Isstalando o mapeamento do ```sass```, assim no dev-tool irá aparecer o arquivo fonte css, que nesse projeto é o main.scss para isso usamos 

```
npm install --save-dev gulp-sourcemaps
```

após instalar vamos importar no arquivo ```gulpfile```

```
const sourceMaps = require('gulp-sourcemaps'); // Importa o gulp-sourcemaps para gerar mapas de origem
```

e usa-lo na function compilaSass
```
function compilaSass() {
  return gulp.src('./source/styles/main.scss') // Pega todos os arquivos .scss dentro da pasta sass
    .pipe(sourceMaps.init()) // Inicializa o sourcemap
    .pipe(sass({
      outputStyle: 'compressed', // Formato de saída do CSS (compactado)

    }))
    .pipe(sourceMaps.write('./maps')) // Escreve o sourcemap na mesma pasta do arquivo CSS
    .pipe(gulp.dest('./build/styles')); // Salva os arquivos compilados na pasta css
}
```

Utilizando o WATCHS em gulp

```
exports.watch = function () {
  gulp.watch('./source/styles/*.scss', gulp.series(compilaSass)); // Observa os arquivos .scss e executa a função compilaSass quando houver alterações
}
```
Para iniciar, vamos ao terminal 
```
npm run gulp watch
```
Após o comando toda atualização no arquivo sera rodado o watch, evitando irmos ao terminal fazer isso novamente

## Agora Vamos comprimir arquivo JavaScript
Mas antes vamos instalar ```npm install --save-dev gulp-uglify```   
Após instalar vamos importar no arquivo ```gulpfile```

```
const uglify = require('gulp-uglify'); // Importa o gulp-uglify para minificar arquivos JavaScript
```

## Obfuscate
Outra coisa que é comum é fazer a ofuscação do projeto, evitando o fácil acesso de outros programadores ao projeto. Para isso iremos precisar de um novo pacote 
```
npm install --save-dev gulp-obfuscate
```
Após instalar iremos importar

```
const obfuscate = require('gulp-obfuscate'); // Importa o gulp-obfuscate para ofuscar arquivos JavaScript

```
Após isso iremos chamar/usar na function 
```
function comprimeJavascript() {
  return gulp.src('./source/scripts/*.js') // Pega todos os arquivos .js dentro da pasta scripts
    .pipe(uglify()) // Minifica os arquivos JavaScript
    .pipe(obfuscate()) // Ofusca os arquivos JavaScript
    .pipe(gulp.dest('./build/scripts')); // Salva os arquivos compilados na pasta js
}
```
E depois fazemos a exportação
```
exports.sass = compilaSass; // Exporta a função compilaSass para ser usada em outros arquivos
exports.watch = function () {
  gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass)); // Observa os arquivos .scss e executa a função compilaSass quando houver alterações
}
exports.javaScript = comprimeJavascript; // Exporta a função comprimeJavascript para ser usada em outros arquivos
```

## Minificando imagens
Vamos instalar o pacote
```
npm install --save-dev gulp-imagemin
```
Após isso vamos importar e usar na function 

```
const imagemin = require('gulp-imagemin'); // Importa o gulp-imagemin para otimizar imagens
```
```
function comprimeImagens() {
  return gulp.src('./source/images/*') // Pega todos os arquivos dentro da pasta images
    .pipe(imagemin()) // Otimiza as imagens
    .pipe(gulp.dest('./build/images')); // Salva as imagens otimizadas na pasta images
}
```
Exportando a function 
```
exports.images = comprimeImagens; // Exporta a função comprimeImagens para ser usada em outros arquivos
```
## Minificando images
Iremos criar uma pasta ```images``` em ```source``` e uma em ```build```, a pasta ```images``` em ```source``` irá conter imagens, e a pasta em build irá receber as imagens minificadas.


Após criar as pastas e a ```function``` e fazer sua exportação iremos rodar a ```function``` no ```terminal```
```
PS C:\Users\Franklin Lorran\Downloads\FrontEnd M16\gulp> npm run gulp images

> frontend-m16@1.0.0 gulp
> gulp images

Error [ERR_REQUIRE_ASYNC_MODULE]: require() cannot be used on an ESM graph with top-level await. Use import() instead. To see where the top-level await comes from, use --experimental-print-required-tla.
    at ModuleJobSync.runSync (node:internal/modules/esm/module_job:392:13)
    at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:360:47)
    at loadESMFromCJS (node:internal/modules/cjs/loader:1385:24)
    at Module._compile (node:internal/modules/cjs/loader:1536:5)
    at Object..js (node:internal/modules/cjs/loader:1706:10)
    at Module.load (node:internal/modules/cjs/loader:1289:32)
    at Function._load (node:internal/modules/cjs/loader:1108:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
    at Module.require (node:internal/modules/cjs/loader:1311:12) {
  code: 'ERR_REQUIRE_ASYNC_MODULE'
  ```

  Observa-se que recebemos um erro como retorno. isso aconteceu pq a dependencia de minificação que instalamos antes não pode ser importada como foi. por isso vamos instalar uma dependencia com versão anterior.

```
npm install --save-dev gulp-imagemin@7.1.0
```
Após instalar, basta rodar o npm ```npm run gulp images``` as imagens minificadas serão criadas