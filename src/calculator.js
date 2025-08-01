// Module de calculs statistiques

class StatsCalculator {
  // Calcul de la somme
  static sum(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new Error('Un tableau non vide est requis');
    }
    return numbers.reduce((acc, num) => {
      if (typeof num !== 'number' || isNaN(num)) {
        throw new Error('Toutes les valeurs doivent être des nombres');
      }
      return acc + num;
    }, 0);
  }

  // Calcul de la moyenne
  static average(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new Error('Un tableau non vide est requis');
    }
    return this.sum(numbers) / numbers.length;
  }

  // Calcul de l'écart-type
  static standardDeviation(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new Error('Un tableau non vide est requis');
    }
    
    const avg = this.average(numbers);
    const squaredDifferences = numbers.map(num => Math.pow(num - avg, 2));
    const variance = this.sum(squaredDifferences) / numbers.length;
    return Math.sqrt(variance);
  }

  // Méthode pour calculer toutes les statistiques
  static calculateAll(numbers) {
    return {
      sum: this.sum(numbers),
      average: this.average(numbers),
      standardDeviation: this.standardDeviation(numbers),
      count: numbers.length
    };
  }
}

module.exports = StatsCalculator;// Test automatique
