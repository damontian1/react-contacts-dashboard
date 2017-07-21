import React from "react";
import Store from "../store/Store";

const ApiWidget = ({news, currentWeather, forecastWeather}) => {
  // console.log(currentWeather)

  const renderNews = () => {
    return news.map((item, i) => {
      return(
        <div className="row" key={i} style={{display: "flex", alignItems: "center"}}>
          <div className="col-md-4" style={{margin: "1em 0em"}}>
            <a href={item.url} target="_blank" >
              <img src={item.urlToImage} style={{width: "100%"}} />
            </a>
          </div>
          <div className="col-md-8">
            <a href={item.url} target="_blank" >
              <p>{item.title}</p>
            </a>
          </div>
        </div>
      )
    })
  }

  const renderWeather = () => {
    if(forecastWeather){
      return forecastWeather.map((item, i) => {
        return(
          <div className="col-md-3 text-center" key={i}>
            <p>{item.dt_txt}</p>
            <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} width="75" />
            <p>{item.main.temp}</p>
          </div>
        )
      })
    }
  }

  const renderCurrent = () => {
    if(currentWeather){
      return(
        <div className="col-md-3 text-center">
          <p>Current Conditions</p>
          <img src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} width="75" />
          <p>{currentWeather.main.temp}</p>
        </div>
      )
    }
  }


  return(
    <section id="api-info-sidebar">
      <div className="weather-widget" style={{border: "1px solid lightgray", padding: "1.5em", margin: "1em 0em"}}>
        <div>
          <h4>Current Weather and Forecast {currentWeather ? `in ${currentWeather.name}` : null}</h4>
          <small>Powered By: <a href="http://openweathermap.org" target="_blank">OpenWeatherMap API</a></small>
          <hr/>
          <div className="row">
            {renderCurrent()}
            {renderWeather()}
          </div>
        </div>
      
      </div>
      <div className="news-widget" style={{border: "1px solid lightgray", padding: "1.5em", margin: "1em 0em"}}>
        <h4>Google News: Current Top Stories</h4>
        <small>Powered By: <a href="https://newsapi.org" target="_blank">News API</a></small>
        <hr/>
        <div>
          {renderNews()}
        </div>
      </div>
    </section>
  )
}

export default ApiWidget;


