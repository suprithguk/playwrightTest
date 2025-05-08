pipeline {
    agent any

    /* Uncomment the following block to schedule the Jenkins job for nightly runs to run 7:00 pm every day
    triggers {
        cron ("0 19 * * *")
    }. */
    tools {nodejs "Node"}
    stages {
        stage("apiTests") {
            steps {
                script {
                    git branch: 'main',
                    url: "https://github.com/suprithguk/playwrightTest.git"
                        sh 'npm install -g npm'
                        sh 'npm install typescript --save-dev' 
                        sh 'npm init playwright@latest' 
                        sh 'npx playwright test'
                }
            }
        }
        /* Use below block for implementing explicit HTML reporting if required 
          stage("reporting") {
            steps {
                publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'reports/html',
                reportFiles: 'index.html',
                reportName: 'HTML Report', 
                reportTitles: ''])
            }
        } */
    }
    post {
        always {
            echo 'Pipeline execution complete.'
        }
        failure {
            echo 'Pipeline failed.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
    }
}