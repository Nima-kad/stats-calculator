const StatsCalculator = require('../src/calculator');

describe('StatsCalculator', () => {
  describe('sum()', () => {
    test('calcule correctement la somme de nombres positifs', () => {
      expect(StatsCalculator.sum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('calcule correctement la somme avec des nombres négatifs', () => {
      expect(StatsCalculator.sum([-1, -2, 3, 4])).toBe(4);
    });

    test('calcule correctement la somme avec des décimales', () => {
      expect(StatsCalculator.sum([1.5, 2.5, 3.0])).toBe(7.0);
    });

    test('lance une erreur pour un tableau vide', () => {
      expect(() => StatsCalculator.sum([])).toThrow('Un tableau non vide est requis');
    });

    test('lance une erreur pour un non-tableau', () => {
      expect(() => StatsCalculator.sum('not an array')).toThrow('Un tableau non vide est requis');
    });

    test('lance une erreur si le tableau contient des non-nombres', () => {
      expect(() => StatsCalculator.sum([1, 'a', 3])).toThrow('Toutes les valeurs doivent être des nombres');
    });
  });

  describe('average()', () => {
    test('calcule correctement la moyenne', () => {
      expect(StatsCalculator.average([1, 2, 3, 4, 5])).toBe(3);
    });

    test('calcule correctement la moyenne avec des décimales', () => {
      expect(StatsCalculator.average([1.5, 2.5, 3.5, 4.5])).toBe(3);
    });

    test('lance une erreur pour un tableau vide', () => {
      expect(() => StatsCalculator.average([])).toThrow('Un tableau non vide est requis');
    });
  });

  describe('standardDeviation()', () => {
    test('calcule correctement l\'écart-type', () => {
      const result = StatsCalculator.standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]);
      expect(result).toBeCloseTo(2, 1);
    });

    test('retourne 0 pour des valeurs identiques', () => {
      expect(StatsCalculator.standardDeviation([5, 5, 5, 5])).toBe(0);
    });

    test('lance une erreur pour un tableau vide', () => {
      expect(() => StatsCalculator.standardDeviation([])).toThrow('Un tableau non vide est requis');
    });
  });

  describe('calculateAll()', () => {
    test('retourne toutes les statistiques correctement', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = StatsCalculator.calculateAll(numbers);
      
      expect(result).toEqual({
        sum: 15,
        average: 3,
        standardDeviation: expect.any(Number),
        count: 5
      });
      
      expect(result.standardDeviation).toBeCloseTo(1.414, 2);
    });
  });
});