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
  console.log("Função padrão executada via gulp");
  if (callback) {
    callback();
  }
}
// export default funcaoPadrao;
exports.default = funcaoPadrao; // Exporta a função padrão para ser usada em outros arquivos
```

ou 
```
function funcaoPadrao(callback) {
  console.log('Função padrão executada via gulp');
  callback();
}
// export default funcaoPadrao;
exports.default = funcaoPadrao; // Exporta a função padrão para ser usada em outros arquivos
```