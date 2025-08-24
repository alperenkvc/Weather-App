# Weather App

A beautiful, responsive weather application that displays current weather conditions and 5-day forecasts for any location.

## Features

- 🌤️ Current weather display with temperature, conditions, and location
- 📅 5-day weather forecast
- 🎨 Modern, responsive UI with hover effects
- 📍 Location search functionality
- 📱 Mobile-friendly design

## Setup Instructions

### 1. Get an API Key
- Sign up at [OpenWeatherMap](https://openweathermap.org/api)
- Get your free API key from your account dashboard

### 2. Configure the App
- Copy `config.example.js` to `config.js`
- Replace `YOUR_API_KEY_HERE` with your actual API key

```bash
cp config.example.js config.js
# Then edit config.js and add your API key
```

### 3. Run the App
- Open `index.html` in your web browser
- Or serve it using a local web server

## Security Notice

⚠️ **IMPORTANT**: Never commit your `config.js` file to version control!
- The `config.js` file contains your API key and is excluded from git
- Always use `config.example.js` as a template
- Keep your API keys private and secure

## API Usage

This app uses the OpenWeatherMap API:
- **Free Tier**: 1000 calls/day
- **Rate Limit**: 60 calls/minute
- **Data**: Current weather + 5-day forecast

## Technologies Used

- HTML5
- CSS3 (with modern features like CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- OpenWeatherMap API
- Boxicons for weather icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
