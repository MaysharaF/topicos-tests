const definirFaixaEtaria = require('../src/Classifier/index.js');

const nome = 'Mayshara';
const idade = 23;

describe('Classificar', () => {
  test('Idade válida', () => {
    expect(() => {
      definirFaixaEtaria(nome, idade)
    }).not.toThrow("Idade inválida");
  });

  test('must be a child', () => {
    expect(definirFaixaEtaria(nome, idade).tipo).toBe('Criança');
  });

  test('must be a teenager', () => {
    expect(definirFaixaEtaria(nome, idade).tipo).toBe('Adolescente');
  });

  test('must be an adult', () => {
    expect(definirFaixaEtaria(nome, idade).tipo).toBe('Adulto');
  });

  test('must be an elderly', () => {
    expect(definirFaixaEtaria(nome, idade).tipo).toBe('Idoso');
  });

});