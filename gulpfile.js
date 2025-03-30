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

// exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.default = gulp.series(funcaoPadrao, dizOi); // Exporta a função padrão para ser usada em outros arquivos
exports.dizOi = dizOi; // Exporta a função dizOi para ser usada em outros arquivos
