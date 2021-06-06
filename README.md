<h1 align="center">
  Weather Forecast
  <br>
  <img src="./src/asserts/sunny-light.svg" alt="weather forecast logo" title="weather forecast logo" width="70">
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">Weather widget: 7 days forecast</p>

> Author: Jubi
> 
> Last edit date: 2021.6.6
>
> Description: Weather forecast
>
> Link on [here]()



# Tech/framework used
Frontend tech stack:
* React JS
* SASS


# Features
* The weeks weather in my  current location
* Allows user to switch  between Celcius and Fahrenheit
* Allows the user to enter in a city name to look up

# Installation / Usage

```
$cd weather_forecast
$npm install
$API_KEY=${your open weather api key}
$npm start

```


# Roadmap
```
    src/
    ┣ apis/  #[Apis]
    ┃ ┗ index.jsx
    ┣ asserts/ [Images]
    ┃ ┣ DAMIL_123792-1600.png
    ┃ ┗ sunny-light.svg
    ┣ components/ [Components]
    ┃ ┣ CurrentWeather/   #widget top ====>1.current weather 2.change city
    ┃ ┃ ┣ index.jsx
    ┃ ┃ ┗ style.module.scss
    ┃ ┣ Forecast/        #widget bottom ====>1.7 days forecast 2.switch temperature units
    ┃ ┃ ┣ index.jsx
    ┃ ┃ ┗ style.module.scss
    ┃ ┣ Temperature/   #temperature  view format
    ┃ ┃ ┗ index.jsx
    ┃ ┣ VerticalDivider/
    ┃ ┃ ┗ index.jsx
    ┃ ┗ Weather/  # daily forecast view format
    ┃   ┣ index.jsx
    ┃   ┗ style.module.scss
    ┣ config/ #api related
    ┃ ┗ OpenWeatherMap/ 
    ┃   ┗ index.jsx
    ┣ pages/ #[Page]
    ┃ ┗ HomePage/
    ┃   ┣ index.jsx
    ┃   ┗ style.module.scss
    ┣ route/ [Route]
    ┃ ┣ index.jsx
    ┃ ┗ style.module.scss
    ┣ store/ [Store]
    ┃ ┣ cityModule/ #(city reducer)
    ┃ ┃ ┣ action.js
    ┃ ┃ ┣ reducer.js
    ┃ ┃ ┗ type.js
    ┃ ┣ unitsModule/
    ┃ ┃ ┣ action.js
    ┃ ┃ ┣ reducer.js
    ┃ ┃ ┗ type.js
    ┃ ┗ store.js
    ┣ index.js  #(entry file)
    ┣ logo.svg
    ┣ reportWebVitals.js
    ┗ setupTests.js
```
# View
<h1 align="center">
<img src='https://imgur.com/rngGrnw' alt="weather forecast view" title="weather forecast view" width="700">
</h1>