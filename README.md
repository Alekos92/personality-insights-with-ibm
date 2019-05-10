# Personality Insights with IBM

This is a simple MobX-powered React app that allows the user to get personality insights from text, using the cognitive services cloud provided by IBM.
It is a demonstration of how to build an app based on IBM's services, using only javascript.

In order to use it:

1. Install nodejs, as instructed here https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/
2. Install typescript, as instructed here https://blog.programster.org/ubuntu-16-04-install-typescript
3. Replace your own api key in the express.ts file
4. Start typescript in watch mode, in order to transpile, by running tsc -w
5. Start the express server, that will communicate with the cloud, by running node src/express.js (port 5000).
6. Start the react server, by running npm run start.
7. The app should be running at port 3000, and you should be able to get personality insights for text of your choice (provided the input is of sufficient length).

This app was tested on Linux Mint, but the above steps should work fine on any Ubuntu-based distro.
