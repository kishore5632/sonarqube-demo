pipeline {
    agent any

    tools {
        nodejs "NodeJS"   // NodeJS tool name from Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/kishore5632/sonarqube-demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    withEnv(["PATH+SONAR=${tool 'SonarScanner'}/bin"]) {  
                        sh '''
                            sonar-scanner \
                              -Dsonar.projectKey=node-app \
                              -Dsonar.sources=. \
                              -Dsonar.host.url=http://localhost:9000 \
                              -Dsonar.login=$SONAR_AUTH_TOKEN
                        '''
                    }
                }
            }
        }

        stage('Build & Deploy') {
            steps {
                sh 'pm2 start server.js || true'
            }
        }
    }
}
