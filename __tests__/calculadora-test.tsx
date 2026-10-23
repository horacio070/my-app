
import { describe, expect, test } from '@jest/globals';
import { calcCalculadora } from '../src/components/calculators';

describe('Calculadora', () => {
  test('Somar dois números', () => {
    const a = 3;
    const b = 4;

    const resultado = calcCalculadora(a, b, '+');

    expect(resultado).toBe(7);
  });

  test('Subtrair dois números', () => {
    const a = 10;
    const b = 4;

    const resultado = calcCalculadora(a, b, '-');

    expect(resultado).toBe(6);
  });

  test('Multiplicar dois números', () => {
    const a = 5;
    const b = 3;

    const resultado = calcCalculadora(a, b, '*');

    expect(resultado).toBe(15);
  });

  test('Dividir dois números', () => {
    const a = 12;
    const b = 3;

    const resultado = calcCalculadora(a, b, '/');

    expect(resultado).toBe(4);
  });

  test('Não dividir por zero', () => {
    const a = 10;
    const b = 0;

    const resultado = calcCalculadora(a, b, '/');

    expect(resultado).toBe('Não pode dividir por zero');
  });
});
