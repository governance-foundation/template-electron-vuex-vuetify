$env:GITHUB_REF_NAME="master"
$env:GITHUB_REPOSITORY_OWNER="governance-foundation"
$env:GITHUB_REPOSITORY="template-electron-vuex-vuetify"
docker compose up --abort-on-container-exit --quiet-pull --force-recreate --renew-anon-volumes --exit-code-from server
