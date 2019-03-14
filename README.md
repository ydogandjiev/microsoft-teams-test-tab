# microsoft-teams-test-tab

#How to deploy test app for sdk changes that are not release as npm package
1. use yarn link to your microsoft-teams-library-js and do changes in app.ts
2. run 'yarn build-<alias>' inorder to put outputfiles inside public/<alias> folder
3. check-in changes inside public/<alias> only to master branch
4. In test app use https://teams-test-tab.azurewebsites.net/<alias> as content Url inorder to point to your changes