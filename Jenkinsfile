
pipeline {
    agent any
    tools {
        // Use exact names from Manage Jenkins → Global Tool Configuration
        maven 'maven-3'     // example: change to match your Maven tool name
    }
    stages {
        stage('Set Docker Tag') {
            steps {
                script {
                    env.DOCKER_TAG = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()
                }
            }
        }
        stage('Trivy Security Scan') {
            steps {
                script {
                    // Run Trivy scan on the project directory
                    sh 'trivy fs --exit-code 1 --severity HIGH,CRITICAL .'

                    // If scanning a Docker image instead, use:
                    // sh 'trivy image --exit-code 1 --severity HIGH,CRITICAL <your-image-name>'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh "docker build . -t shu1demo/nodeapp:${env.DOCKER_TAG}"
            }
        }
        stage('Docker push Image to hub') {
            steps {
                withCredentials([string(credentialsId: 'docker-hub', variable: 'dockerhubpswd')]) {
                    sh "docker login -u shu1demo -p ${dockerhubpswd}"
                    sh "docker push shu1demo/nodeapp:${env.DOCKER_TAG}"
                }
         
            }
        }
        stage('Deploy to k8s') {
            steps {
                echo "deploy to k8s"
            }
        }
    }
}

// #################
// pipeline {
//     agent any
//     tools {
//         // Use exact names from Manage Jenkins → Global Tool Configuration
//         maven 'maven-3'     // example: change to match your Maven tool name
//     }

//     stages {
//         stage('SCM checkout'){
//             steps{
//                 git branch: 'main', url: 'https://github.com/demoshu23/sample-node.git'
//             }
//         }
//         stage('SonarQube Scanner') {
//             steps {
//                 withSonarQubeEnv('sonar') {
//                     sh "mvn sonar:sonar"
//                 }
//             }
//         }
//     }
// }
