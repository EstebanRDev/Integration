pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Utilizar las credenciales definidas en Jenkins
                git credentialsId: '446d658a-7991-4240-9c91-4aed1d70801d', url: 'https://github.com/EstebanRDev/Integration.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
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
        stage('Run Docker Container') {
            steps {
                script {
                    // Detener y eliminar el contenedor si ya existe
                    sh 'docker stop cmiweb || true && docker rm cmiweb || true'
                    // Ejecutar el nuevo contenedor
                    dockerImage.run("-d -p 8000:80 --name cmiweb")
                }
            }
        }
    }
}
