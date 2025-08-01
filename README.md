# Stats Calculator

Un petit utilitaire Node.js pour effectuer des calculs statistiques de base (somme, moyenne, écart-type, etc.) sur une liste de nombres.

## Fonctionnalités

- Calcul de la somme
- Calcul de la moyenne
- Calcul de l'écart-type
- Calcul du nombre de valeurs
- Interface en ligne de commande interactive

## Installation

```bash
git clone <repo-url>
cd stats-calculator
npm install
```

## Utilisation

Lancez le programme en ligne de commande :

```bash
npm start
```

Suivez les instructions pour entrer vos valeurs.

## Exemple de sortie

```
=== Calculateur de Statistiques ===

Combien de valeurs souhaitez-vous entrer? 5
Entrez la valeur 1: 1
Entrez la valeur 2: 2
Entrez la valeur 3: 3
Entrez la valeur 4: 4
Entrez la valeur 5: 5

--- Résultats ---
Valeurs entrées: 1, 2, 3, 4, 5
Somme: 15.00
Moyenne: 3.00
Écart-type: 1.41
Nombre de valeurs: 5
```

## Tests

Pour lancer les tests unitaires :

```bash
npm test
```

Pour générer un rapport de couverture :

```bash
npm run test:coverage
```

## Structure du projet

- `src/` : Code source principal
  - [`calculator.js`](src/calculator.js) : Logique des calculs statistiques
  - [`index.js`](src/index.js) : Interface CLI
- `tests/` : Tests unitaires ([`calculator.test.js`](tests/calculator.test.js))
- `coverage/` : Rapport de couverture généré par Jest

## Dépendances

- [readline-sync](https://www.npmjs.com/package/readline-sync) : Pour l'entrée utilisateur en CLI
- [jest](https://jestjs.io/) : Pour les tests unitaires

## Auteur

À compléter.
