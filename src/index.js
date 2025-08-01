const readlineSync = require('readline-sync');
const StatsCalculator = require('./calculator');

console.log('=== Calculateur de Statistiques ===\n');

// Fonction pour obtenir les valeurs de l'utilisateur
function getNumbers() {
  const count = parseInt(readlineSync.question('Combien de valeurs souhaitez-vous entrer? '));
  
  if (isNaN(count) || count <= 0) {
    console.log('Veuillez entrer un nombre valide supérieur à 0');
    return getNumbers();
  }

  const numbers = [];
  
  for (let i = 0; i < count; i++) {
    let value = parseFloat(readlineSync.question(`Entrez la valeur ${i + 1}: `));
    
    while (isNaN(value)) {
      console.log('Valeur invalide. Veuillez entrer un nombre.');
      value = parseFloat(readlineSync.question(`Entrez la valeur ${i + 1}: `));
    }
    
    numbers.push(value);
  }
  
  return numbers;
}

// Fonction principale
function main() {
  try {
    const numbers = getNumbers();
    console.log('\n--- Résultats ---');
    console.log('Valeurs entrées:', numbers.join(', '));
    
    const stats = StatsCalculator.calculateAll(numbers);
    
    console.log(`Somme: ${stats.sum.toFixed(2)}`);
    console.log(`Moyenne: ${stats.average.toFixed(2)}`);
    console.log(`Écart-type: ${stats.standardDeviation.toFixed(2)}`);
    console.log(`Nombre de valeurs: ${stats.count}`);
    
  } catch (error) {
    console.error('Erreur:', error.message);
  }
}

// Exécuter seulement si c'est le fichier principal
if (require.main === module) {
  main();
}

module.exports = { getNumbers, main };