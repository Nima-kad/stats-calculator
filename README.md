# 📊 Stats Calculator - Application de Calculs Statistiques

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](http://localhost:8080/job/stats-calculator/)
[![Node.js](https://img.shields.io/badge/node-%3E%3D%2018.0.0-brightgreen.svg)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/docker-ready-blue.svg)](https://www.docker.com/)

Application Node.js permettant de calculer des statistiques de base (somme, moyenne, écart-type) sur une série de nombres, avec pipeline CI/CD complet utilisant Jenkins et Docker.

## ✨ Fonctionnalités

- ✅ Calcul de la **somme** d'une série de nombres
- ✅ Calcul de la **moyenne** arithmétique
- ✅ Calcul de l'**écart-type** (standard deviation)
- ✅ Interface interactive en ligne de commande
- ✅ Validation robuste des entrées utilisateur
- ✅ Tests unitaires avec couverture à 100%
- ✅ Pipeline CI/CD automatisé
- ✅ Conteneurisation Docker

## 🔧 Prérequis

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0
- **Git**
- **Docker** (optionnel, pour la conteneurisation)
- **Jenkins** (optionnel, pour le CI/CD)

## 📦 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/Nima-kad/stats-calculator.git
cd stats-calculator
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Vérifier l'installation

```bash
npm test
```

## 🚀 Utilisation

### Lancer l'application

```bash
npm start
```

### Exemple d'utilisation

```
=== Calculateur de Statistiques ===

Combien de valeurs souhaitez-vous entrer? 5
Entrez la valeur 1: 10
Entrez la valeur 2: 20
Entrez la valeur 3: 30
Entrez la valeur 4: 40
Entrez la valeur 5: 50

--- Résultats ---
Valeurs entrées: 10, 20, 30, 40, 50
Somme: 150.00
Moyenne: 30.00
Écart-type: 14.14
Nombre de valeurs: 5
```

### Utilisation programmatique

```javascript
const StatsCalculator = require('./src/calculator');

const numbers = [10, 20, 30, 40, 50];
const stats = StatsCalculator.calculateAll(numbers);

console.log(stats);
// Output: { sum: 150, average: 30, standardDeviation: 14.14..., count: 5 }
```

## 🧪 Tests

### Lancer les tests

```bash
# Tests simples
npm test

# Tests avec couverture
npm run test:coverage
```

### Structure des tests

Les tests couvrent :
- ✅ Calculs avec nombres positifs
- ✅ Calculs avec nombres négatifs
- ✅ Calculs avec décimales
- ✅ Gestion des erreurs (tableau vide, valeurs invalides)
- ✅ Cas limites (valeurs identiques, grands nombres)

## 🐳 Docker

### Construction de l'image

```bash
docker build -t stats-calculator:latest .
```

### Lancer le conteneur

```bash
docker run -it stats-calculator:latest
```

## 🔄 Pipeline CI/CD

### Configuration Jenkins

1. **Installation des plugins requis** :
   - NodeJS Plugin
   - Docker Plugin
   - Pipeline Plugin

2. **Configuration du job** :
   - Type : Pipeline
   - SCM : Git
   - Build Triggers : Poll SCM `H/3 * * * *`

### Étapes du pipeline

```groovy
1. Checkout       → Récupération du code source
2. Install        → Installation des dépendances
3. Test           → Exécution des tests unitaires
4. Coverage       → Génération du rapport de couverture
5. Docker Build   → Construction de limage Docker
```

## 📁 Structure du projet

```
stats-calculator/
├── src/
│   ├── calculator.js      # Module de calculs statistiques
│   └── index.js          # Point d'entrée de l'application
├── tests/
│   └── calculator.test.js # Tests unitaires Jest
├── .dockerignore         # Fichiers ignorés par Docker
├── .gitignore           # Fichiers ignorés par Git
├── Dockerfile           # Configuration Docker
├── Jenkinsfile          # Pipeline CI/CD
├── package.json         # Configuration npm
├── package-lock.json    # Verrou des dépendances
└── README.md           # Documentation
```

## 🛠️ Scripts npm disponibles

```json
{
  "start": "node src/index.js",
  "test": "jest",
  "test:coverage": "jest --coverage",
  "test:watch": "jest --watch"
}
```

## 🔐 Variables d'environnement

Aucune variable d'environnement n'est requise pour l'exécution de base.

Pour le CI/CD :
- `DOCKER_USERNAME` : Naima KADRI
- `DOCKER_PASSWORD` : **********

## 👤 Auteur

**Naima Kadri**

- GitHub: [@Nima-kad](https://github.com/Nima-kad)

## 🙏 Remerciements

- Projet réalisé dans le cadre d'un TP DevOps
- Merci au formateur Didier DEFRANCE pour leur accompagnement. 

---

📅 **Dernière mise à jour** : 1 août 2025