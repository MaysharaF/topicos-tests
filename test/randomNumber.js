const gerarNumeroAleatorio = require('../src/RandomNumber/index');


let inicio = 10;
let fim = 90;

describe('Generate', () => {

  test('the start of the range is a negative value', () => {
    expect(inicio).toBeGreaterThan(0);
  });

  test('the end of the range is a negative value', () => {
    expect(fim).toBeGreaterThan(0);
  });

  test('check if the beginning is not the same as the end', () => {
    expect(inicio).not.toBe(fim);
  });


});