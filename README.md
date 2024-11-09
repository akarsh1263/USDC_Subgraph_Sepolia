# USDC Subgraph on Sepolia Testnet

Monitors all incoming USDC transfers to a specified Ethereum address on the Sepolia network, with a dashboard in the frontend to showcase the required transactions attached to push notification service. 

## Features

1. Subgraph filters the transfers made to the specified address
2. The customized subgraph is deployed on Subgraph Studio and the API endpoint is used in frontend
3. The frontend uses React to streamline the process
4. The push notification is implemented using Firebase

## To deploy your own subgraph (From the repo)
1. Clone the repository
2. Change directory by: `cd sepolia_usdc_subgraph`
3. Install required dependencies by: `npm install`
4. Make necessary changes, such as the value of `SPECIFIED_ADDRESS` in \src\mock-token.ts
5. Deploy Subgraph by: `graph deploy sepolia_usdc_subgraph`

## To deploy your own subgraph (Using Subgraph Studio)
1. Connect to Subgraph Studio using a wallet (eg. Metamask)
2. Create a new subgraph
3. Follow the given instructions
4. Make changes in \src\mock-token.ts
5. Deploy the subgraph

## To test frontend
1. Clone the repository
2. Change the directory by: `cd frontend\usdc-transfer-tracker`
3. Setup the .env file
4. Install dependencies by `npm install`
5. Run the react app by `npm start`

## Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

### .env

```env
REACT_APP_SUBGRAPH_ENDPOINT="subgraph api endpoint"
REACT_APP_FIREBASE_API_KEY="firebase api key"
REACT_APP_FIREBASE_AUTH_DOMAIN="firebase auth domain"
REACT_APP_FIREBASE_PROJECT_ID="firebase project id"
REACT_APP_FIREBASE_STORAGE_BUCKET="firebase storage bucket"
REACT_APP_FIREBASE_SENDER_ID="firebase sender id"
REACT_APP_FIREBASE_APP_ID="firebase app id"
```

## Deployed Subgraph API endpoint
URL: `https://api.studio.thegraph.com/query/94129/sepolia_usdc_subgraph/version/latest`
