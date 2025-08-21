pipeline {
    agent any
    tools { nodejs "NodeJS" }
    stages {
        stage('Checkout') {
            steps { git 'https://github.com/kishore5632/sonarqube-demo.git' }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    sh 'sonar-scanner'
                }
            }
        }
        stage('Build & Deploy') {
            steps {
                sh 'npm install'
                sh 'pm2 start server.js || true'
            }
        }
    }
}

