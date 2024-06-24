pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 446d658a-7991-4240-9c91-4aed1d70801d, url: 'https://github.com/EstebanRDev/Integration.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Instalar dependencias necesarias para las pruebas en JavaScript 
                sh 'npm install eslint mocha'
            }
        }
        stage('Run JavaScript Tests') {
            steps {
                // Ejecutar pruebas unitarias de JavaScript
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build("imiweb", ".")
                }
            }
        }
        stage('Stop and Remove Old Container') {
            steps {
                // Detener y eliminar contenedor existente
                script {
                    docker.stop('cmiweb')
                    docker.remove('cmiweb')
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    dockerImage.run("-d -p 8000:80 --name cmiweb")
                }
            }
        }
    }
}
