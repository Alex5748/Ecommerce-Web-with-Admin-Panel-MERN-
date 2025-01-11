// import {
//     Client,
//     Environment,
//     LogLevel,
//     OrdersController,
// } from "@paypal/paypal-server-sdk"


const { Client, Environment, LogLevel } = require("@paypal/paypal-server-sdk");

const paypal = new Client({
    clientCredentialsAuthCredentials: {
        oAuthClientId: '',
        oAuthClientSecret: '',
    },
    timeout: 0,
    environment: Environment.Sandbox,
    logging: {
        logLevel: LogLevel.Info,
        logRequest: {
            logBody: true,
        },
        logResponse: {
            logHeaders: true,
        },
    },
});

// module.exports = client;







// paypal.configure({
//     'mode': "sandbox",
//     "client_id": "Ad2BOrWkTnE7QT5yUlQDV0Z_FqDDKE1wrbeJcqbIYPCVQ0VtP-WHqbhBcklU1gAZm92T-xwTia0vZsom",
//     "client_secret": "ECzd9akQQvlkUPcVdK8Ri4Boc4oalBSnulwxYQxcFXUlIvhkmluXz1LSTXykgtDymLtGo_4Ds6dredOX",
//   });
  
//   module.exports = paypal;
// // Configure PayPal environment
// const environment = new paypal.core.SandboxEnvironment(
//     'Ad2BOrWkTnE7QT5yUlQDV0Z_FqDDKE1wrbeJcqbIYPCVQ0VtP-WHqbhBcklU1gAZm92T-xwTia0vZsom', // Client ID
//     'ECzd9akQQvlkUPcVdK8Ri4Boc4oalBSnulwxYQxcFXUlIvhkmluXz1LSTXykgtDymLtGo_4Ds6dredOX'  // Client Secret
// );

// // Create PayPal client
// const paypalClient = new paypal.core.PayPalHttpClient(environment);

// // Export the configured PayPal client







// const client = new Client({
//     clientCredentialsAuthCredentials: {
//       oAuthClientId: 'Ad2BOrWkTnE7QT5yUlQDV0Z_FqDDKE1wrbeJcqbIYPCVQ0VtP-WHqbhBcklU1gAZm92T-xwTia0vZsom',
//       oAuthClientSecret: 'ECzd9akQQvlkUPcVdK8Ri4Boc4oalBSnulwxYQxcFXUlIvhkmluXz1LSTXykgtDymLtGo_4Ds6dredOX',
//     },
//     timeout: 0,
//     environment: Environment.Sandbox,
//     logging: {
//       logLevel: LogLevel.Info,
//       logRequest: {
//         logBody: true,
//       },
//       logResponse: {
//         logHeaders: true,
//       },
//     },
//   });
module.exports = paypal;
