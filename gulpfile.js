function funcaoPadrao(callback) {
  console.log('Função padrão executada via gulp');
  callback();
}

function dizOi(callback) {
  console.log('Oi Gulp!');
  callback();
}

// export default funcaoPadrao;
exports.default = funcaoPadrao; // Exporta a função padrão para ser usada em outros arquivos
exports.dizOi = dizOi; // Exporta a função dizOi para ser usada em outros arquivos
