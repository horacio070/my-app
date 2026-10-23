
import { describe, expect, test } from '@jest/globals';
import { calcPitagoras } from '../src/components/calculators';

describe('Pitagoras', () => {
  test('Calcular hipotenusa', () => {
    const a = 3;
    const b = 4;

    const resultado = calcPitagoras(a, b);

    expect(resultado).toBe(5);
  });

  test('Calcular hipotenusa com outros valores', () => {
    const a = 5;
    const b = 12;

    const resultado = calcPitagoras(a, b);

    expect(resultado).toBe(13);
  });
});
