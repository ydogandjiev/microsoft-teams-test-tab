This documents outlines the steps required to add your changes to Microsoft Teams Test App and run the app in your local environment.


# Code Setup and contribution

## Github Link
https://github.com/ydogandjiev/microsoft-teams-test-tab

## Fork
It is recommended to fork the repo into your github account. This will be handy when you are contributing back to the repo.

[Click here to fork](https://github.com/ydogandjiev/microsoft-teams-test-tab/fork)

## Clone 
Clone the repo from your fork
```bash
$ git clone git@github.com:<username>/microsoft-teams-test-tab.git

```

## Code
You can now create a branch in your forked version and start writing code for adding the missing SDK event.

# Add your module
The only file you need to change is under **src > app.js**

Just add a code block identical to the one shown below

```js

addModule({
      name: "navigateToTab",
      initializedRequired: true,
      hasOutput: true,
      inputs: [{
        type: "object",
        name: "tabInstance",
      }],
      action: (tabInstance: microsoftTeams.TabInstance, output) => {
        microsoftTeams.navigateToTab(tabInstance, (status: boolean, reason?: string) => {
          if (reason) {
            output(reason);
            return;
          }
          output(status);
      });
      } 
    });
```

# Running in local

To be able to finally build, deploy and side load the app in Teams you need to 
1. Install dependencies
2. Run the code in local
3. Create a tunnel to the localhost using ngrok
4. Update the manifest file to point to newly started ngrok server. 
5. Bundle the manifest with icons
6. Sideload the bundle to Teams. 


### Pre requisites


- Microsoft Teams is installed and you have an account

- [ngrok](https://ngrok.com/download) or equivalent tunnelling solution
##### ngrok setup
```bash
# Install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install ngrok
brew install ngrok/ngrok/ngrok

# Signup on ngrok website to get an auth token
# Then Setup ngrok in your machine
ngrok config add-authtoken <token>
```

##### Install `nvm`, `node`, `npm`, `webpack`
NOTE: Add `-g` in case you want these installation to happen across your system and not just in this project scope.

``` bash

# Install nvm
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Install Node
$ nvm install node

# Install npm
$ nvm install-latest-npm

#Install Express
$ npm install express

# Install webpack
$ npm install --save-dev webpack 

```

## Install dependencies
``` bash
$ cd microsoft-teams-test-tab 
$ yarn link

```
## Run the code in local

```bash
# Start server
$ npm run start

Debugger attached.

> microsoft-teams-test-tab@1.0.0 start
> node server.js

Debugger attached.
Listening on http://localhost:3000

```

## Create a tunnel to the localhost using ngrok
1. Open a new terminal window and 
2. Start ngrok and preserve the url 

```bash
$ ngrok http --host-header=rewrite 3000

                                                                                                                                     
Session Status                online                                                                                                 
Account                       •••••••••• (Plan: Free)                                                                              
Update                        update available (version 3.3.0, Ctrl-U to update)                                                     
Version                       3.1.0                                                                                                  
Region                        India (in)                                                                                             
Latency                       35ms                                                                                                   
Web Interface                 http://127.0.0.1:4040                                                                                  
Forwarding                    https://baab-2442-202-2002-ecce-4c65-1e1d-6539-de1f.ngrok-free.app -> http://localhost:3000            
                                                                                                                                     
Connections                   ttl     opn     rt1     rt5     p50     p90                                                            
                              0       0       0.00    0.00    0.00    0.00                                                           
```


## Update the manifest file to point to newly started ngrok server. 

Under Package. manifest.json
Temporarily Replace url `https://teams-test-tab.azurewebsites.net` with ngrok url (`https://{uuid}.ngrok-free.app` )

## Bundle the manifest with icons
- Select manifest.json, color.png, outline.png
- create a zip file

## Sideload the bundle to Teams. 
- Sideload this zip file into Teams.
- From App tray select "Teams Test Tab"

# Contribute
You can now push the changes and eventually create a PR for main project.

- Ensure that you remove the temporary changes made to `manifest.json` before pushing your module. 
- Ensure that only `app.js` is modified at the time of push


Sample PR: https://github.com/ydogandjiev/microsoft-teams-test-tab/pull/86/files 

----
# Old Readme
## How to deploy test app for sdk changes that are not release as npm package

use yarn link to your microsoft-teams-library-js and do changes in app.ts
run 'yarn build-' inorder to put outputfiles inside public/ folder
check-in changes inside public/ only to master branch
In test app use https://teams-test-tab.azurewebsites.net/ as content Url inorder to point to your changes
