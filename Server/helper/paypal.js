const paypal = require('@paypal/checkout-server-sdk');

// Configure PayPal environment
const environment = new paypal.core.SandboxEnvironment(
    'Ad2BOrWkTnE7QT5yUlQDV0Z_FqDDKE1wrbeJcqbIYPCVQ0VtP-WHqbhBcklU1gAZm92T-xwTia0vZsom', // Client ID
    'ECzd9akQQvlkUPcVdK8Ri4Boc4oalBSnulwxYQxcFXUlIvhkmluXz1LSTXykgtDymLtGo_4Ds6dredOX'  // Client Secret
);

// Create PayPal client
const paypalClient = new paypal.core.PayPalHttpClient(environment);

// Export the configured PayPal client
module.exports = paypalClient;
