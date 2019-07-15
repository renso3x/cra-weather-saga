# Simple Weather App
This app shows the 5-day weather conditions of a given city 

## Technologies Used
* ReactJS
* NodeJS
* ExpressJS

## Setting Up
First, you need to install all dependencies by running:

```
npm install
```

After successful installation, you need to start the proxy server to connect with the weather API.
> Note: The proxy server is made as a workaround to solve Cross-Origin Resource Sharing (CORS) issue.

On a separate terminal, run:
```
node proxy.js
```
Keep it running then go back to the previous terminal. Start the app by running:
```
npm run start
```