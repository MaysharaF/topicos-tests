function gerarNumeroAleatorio(comeco, fim) {

  if ((comeco < 0 || fim < 0) || (comeco >= fim)) {
    return -1
  }

  return (Math.floor(Math.random() * (fim - comeco + 1) + comeco));

}

module.exports = gerarNumeroAleatorio;