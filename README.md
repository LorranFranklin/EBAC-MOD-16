# GULP - Studies

## AO USAR O GULP PERCEBE-SE QUE A AUTOMAÇÃO DE TAREFAS FICA MAIS FÁCIL. 
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

