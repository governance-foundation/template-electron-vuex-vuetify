echo "INSTALL: NODE"
nvm install v17.6.0
echo "INSTALL: PACKAGES"
npm install
echo "RUN: PREVIEW"
npm run posttest
