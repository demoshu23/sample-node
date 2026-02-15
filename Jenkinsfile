// pipeline {
//     agent any
//     environment{
//         DOCKER_TAG = getDockerTag()
//     }

//     stages {
//         stage('docker image build ') {
//             steps {
//                 sh "docker build . -t shu1demo/nodeapp:${DOCKER_TAG}"
//             }
//         }
//     }
// }
// def getDockerTag(){
//     def tag = sh script" 'git rev-parse HEAD', returnStdout: true
//     return tag
// }
pipeline {
    agent any

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
    }
}
