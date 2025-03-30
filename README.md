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