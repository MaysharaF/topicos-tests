const gerarNumeroAleatorio = require('../src/RandomNumber/index');


let inicio = 10;
let fim = 90;

describe('Generate', () => {

  test('the start of the range is a negative value.', () => {
    expect(inicio).toBeGreaterThan(0);
  });
});