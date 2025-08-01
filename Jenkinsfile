pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' // Assurez-vous d'avoir configuré NodeJS dans Jenkins
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Récupération du code source...'
                git branch: 'main', 
                    url: 'https://github.com/VOTRE_USERNAME/stats-calculator.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installation des dépendances...'
                sh 'npm ci'
            }
        }
        
        stage('Run Tests') {
            steps {
                echo 'Exécution des tests...'
                sh 'npm test'
            }
        }
        
        stage('Test Coverage') {
            steps {
                echo 'Génération du rapport de couverture...'
                sh 'npm run test:coverage'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo 'Construction de l\'image Docker...'
                script {
                    docker.build("stats-calculator:${env.BUILD_ID}")
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                echo 'Push de l\'image Docker...'
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("stats-calculator:${env.BUILD_ID}").push()
                        docker.image("stats-calculator:${env.BUILD_ID}").push('latest')
                    }
                }
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline terminé'
            cleanWs()
        }
        success {
            echo 'Build réussi!'
        }
        failure {
            echo 'Build échoué!'
        }
    }
}