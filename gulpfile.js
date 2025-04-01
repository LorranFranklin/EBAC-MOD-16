const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Importa o gulp-sass e o sass importação conjunta
const sourceMaps = require('gulp-sourcemaps'); // Importa o gulp-sourcemaps para gerar mapas de origem
const uglify = require('gulp-uglify'); // Importa o gulp-uglify para minificar arquivos JavaScript
const obfuscate = require('gulp-obfuscate'); // Importa o gulp-obfuscate para ofuscar arquivos JavaScript
const imagemin = require('gulp-imagemin'); // Importa o gulp-imagemin para otimizar imagens

function comprimeImagens() {
  return gulp.src('./source/images/*') // Pega todos os arquivos dentro da pasta images
    .pipe(imagemin()) // Otimiza as imagens
    .pipe(gulp.dest('./build/images')); // Salva as imagens otimizadas na pasta images
}

function comprimeJavascript() {
  return gulp.src('./source/scripts/*.js') // Pega todos os arquivos .js dentro da pasta scripts
    .pipe(uglify()) // Minifica os arquivos JavaScript
    .pipe(obfuscate()) // Ofusca os arquivos JavaScript
    .pipe(gulp.dest('./build/scripts')); // Salva os arquivos compilados na pasta js
}

function compilaSass() {
  return gulp.src('./source/styles/main.scss') // Pega todos os arquivos .scss dentro da pasta sass
    .pipe(sourceMaps.init()) // Inicializa o sourcemap
    .pipe(sass({
      outputStyle: 'compressed', // Formato de saída do CSS (compactado)

    }))
    .pipe(sourceMaps.write('./maps')) // Escreve o sourcemap na mesma pasta do arquivo CSS
    .pipe(gulp.dest('./build/styles')); // Salva os arquivos compilados na pasta css
}

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
// exports.default = gulp.series(funcaoPadrao, dizOi); // Exporta a função padrão para ser usada em outros arquivos
exports.dizOi = dizOi; // Exporta a função dizOi para ser usada em outros arquivos
exports.sass = compilaSass; // Exporta a função compilaSass para ser usada em outros arquivos


exports.watch = function () {
  gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass)); // Observa os arquivos .scss e executa a função compilaSass quando houver alterações
}
exports.javaScript = comprimeJavascript; // Exporta a função comprimeJavascript para ser usada em outros arquivos
exports.images = comprimeImagens; // Exporta a função comprimeImagens para ser usada em outros arquivos

