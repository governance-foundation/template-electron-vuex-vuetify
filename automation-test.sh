DEFAULT_URL="https://github.com/governance-foundation/template-electron-vuex-vuetify.git"
DEFAULT_BRANCH="master"
GIT_REPO_URL=${1:-$DEFAULT_URL}
if [[ $GIT_REPO_URL == "" ]]; then
  GIT_REPO_URL=$DEFAULT_URL
fi
GIT_BRANCH=${2:-$DEFAULT_BRANCH}
if [[ $GIT_BRANCH == "" ]]; then
  GIT_BRANCH=$DEFAULT_BRANCH
fi
echo "OS"
lsb_release -a
echo "INSTALL: NODE"
nvm install v17.6.0
echo "GET: BRANCH ${GIT_BRANCH} IN ${GIT_REPO_URL}"
git clone ${GIT_REPO_URL}
cd template-electron-vuex-vuetify
git checkout ${GIT_BRANCH}
# rm -rf package-lock.json
echo "PATH: $(pwd)"
echo "PATH: ${PATH}"
# echo "INSTALL: ELECTRON BUILDER"
# npm i -g electron-builder
# echo "VERSION: ELECTRON BUILDER"
# electron-builder --version
# echo "INSTALL VITE"
# npm i -g vite
# echo "VERSION: VITE"
# vite --version
echo "INSTALL: NPM"
npm install --verbose
tail /build/.npm/_logs/*.log
echo "CHECK: NPM"
ls -al
ls -al node_modules/@vue
echo "RUN: PREVIEW"
npm run preview:ci
exit 1
