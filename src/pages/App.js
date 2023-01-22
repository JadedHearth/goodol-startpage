// import logo from './logo.svg';
import {useEffect, useState} from "react";
import '../css/App.css';

const API_KEY_WEATHER = "efb39d02d4f8a94f82589dc5ae53c706"
const API_KEY_NEWS = "32b54dec9f2c48909b3dd8dc0305cd71"

export default function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [newsData, setNewsData] = useState(null);

  // Fetches the Weather data from openweathermap.org
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=${API_KEY_WEATHER}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => setWeatherData(data));
  }, [setWeatherData]);

  // Fetches the News data from newsapi.org
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY_NEWS}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => setNewsData(data));
  }, [setNewsData]);

  // Gets time and date
  var numMonthToWords = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "November", "October", "December"]
  let currentDate = new Date();
  let cDay = currentDate.getDate()
  let cMonth = currentDate.getMonth() + 1
  let cYear = currentDate.getFullYear()

if (!weatherData||!newsData) {
  return(
    <div>
      Loading...
    </div>
  )
}

else {
  return (
    <div className="App">
      <div className="box">

        <div className="name-container">
          Welcome back. Today is {numMonthToWords[cMonth - 1]} {cDay}, {cYear}.
          <div className="links-container">
            <div className="links">
            tests
            </div>

            <div className="links">
            test
            </div>

            <div className="links">
              test
            </div>

            <div className="links">
              test
            </div>

            <div className="links">
              test
            </div>

            <div className="links">
              test
            </div>
          </div>
        </div>

        <div className="weather-container">
          <img className="icon" alt={"picture of " + weatherData.weather[0].description} src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img>
          <br></br>
          🏠🏡🗼🏘
          <br></br>
          {(weatherData.weather[0].description).charAt(0).toUpperCase() + (weatherData.weather[0].description).slice(1)}
          <br></br>
          {Math.round(weatherData.main.feels_like)}℃
        </div>

        <div className="news-container">
          {/* I put it four times because I really couldn't be bothered to set up a loop after a bunch of research lol */}

          <div className="news-story">
            <a href={newsData.articles[0].url}>
              <p className="news-title">{newsData.articles[0].title}</p>
              {newsData.articles[0].description}
              <br></br><br></br>
              <img src={newsData.articles[0].urlToImage} alt=""></img>
            </a>
          </div>

          <div className="news-story">
            <a href={newsData.articles[1].url}>
              <p className="news-title">{newsData.articles[1].title}</p>
              {newsData.articles[1].description}
              <br></br><br></br>
              <img src={newsData.articles[1].urlToImage} alt=""></img>
            </a>
          </div>

          <div className="news-story">
            <a href={newsData.articles[2].url}>
              <p className="news-title">{newsData.articles[2].title}</p>
              {newsData.articles[2].description}
              <br></br><br></br>
              <img src={newsData.articles[2].urlToImage} alt=""></img>
            </a>
          </div>

          <div className="news-story">
            <a href={newsData.articles[3].url}>
              <p className="news-title">{newsData.articles[3].title}</p>
              {newsData.articles[3].description}
              <br></br><br></br>
              <img src={newsData.articles[3].urlToImage} alt=""></img>
            </a>
          </div>

          <div className="news-story">
            <a href={newsData.articles[4].url}>
              <p className="news-title">{newsData.articles[4].title}</p>
              {newsData.articles[4].description}
              <br></br><br></br>
              <img src={newsData.articles[4].urlToImage} alt=""></img>
            </a>
          </div>

          <div className="news-story">
            <a href={newsData.articles[5].url}>
              <p className="news-title">{newsData.articles[5].title}</p>
              {newsData.articles[5].description}
              <br></br><br></br>
              <img src={newsData.articles[5].urlToImage} alt=""></img>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
}