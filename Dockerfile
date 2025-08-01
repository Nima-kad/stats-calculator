# Image de base Node.js
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances de production uniquement
RUN npm ci --only=production

# Copier le code source
COPY src/ ./src/

# Exposer le port (même si non utilisé dans cette app)
EXPOSE 3000

# Définir l'utilisateur non-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs

# Commande par défaut
CMD ["node", "src/index.js"]