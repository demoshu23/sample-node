pipeline {
    agent any
    environment{
        DOCKER_TAG = getDockerTag()
    }

    stages {
        stage('docker image build ') {
            steps {
                sh "docker build . -t shu1demo/nodeapp:${DOCKER_TAG}"
            }
        }
    }
}
def getDockerTag(){
    def tag = sh script" 'git rev-parse HEAD', returnStdout: true
    return tag
}