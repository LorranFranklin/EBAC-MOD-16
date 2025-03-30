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
// exports.default = funcaoPadrao; // Exporta a função padrão para ser usada em outros arquivos
