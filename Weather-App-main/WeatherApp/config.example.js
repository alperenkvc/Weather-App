// Example configuration file - Copy this to config.js and add your API key
// This file IS safe to commit to git

const config = {
    // OpenWeatherMap API Configuration
    openWeatherMap: {
        apiKey: 'YOUR_API_KEY_HERE', // Replace with your actual API key
        baseUrl: 'https://api.openweathermap.org/data/2.5/forecast',
        units: 'metric'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else {
    window.config = config;
}
