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

  test('check if it is a range between 200 and 3000', () => {

    let res = gerarNumeroAleatorio(inicio, fim);

    expect(res).toBeGreaterThanOrEqual(200);
    expect(res).toBeLessThanOrEqual(3000);
  });


});