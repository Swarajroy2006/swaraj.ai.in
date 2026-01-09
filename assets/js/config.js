/**
 * Configuration File
 * Centralized configuration for API keys and endpoints
 * Note: Since this runs client-side, keep non-sensitive config here
 */

export const CONFIG = {
  // Web3Forms API
  web3forms: {
    endpoint: 'https://api.web3forms.com/submit',
    accessKey: 'e7e8740e-dad5-4572-b616-07eac2eaac03'
  },
  
  // Site URLs
  site: {
    url: 'https://swaraj.ai.in',
    email: 'mail@swaraj.ai.in'
  },

  // Feature flags
  features: {
    maintenanceMode: false,
    enableAnalytics: true,
    enableFormValidation: true
  }
};

export default CONFIG;
