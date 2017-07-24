import React from "react";
import Store from "../store/Store";

const ApiWidget = ({news, currentWeather, forecastWeather}) => {
  // console.log(currentWeather)

  const renderNews = () => {
    return news.map((item, i) => {
      return(
        <div className="row" key={i} style={{display: "flex", alignItems: "center", padding: "0.5em 0em"}}>
          <div className="col-md-5">
            <a href={item.url} target="_blank" >
              <img className="news-image" src={item.urlToImage} />
            </a>
          </div>
          <div className="col-md-7">
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
          <div className="col-md-3 text-center" key={i} style={{padding: "0.5em"}}>
            <p>{item.dt_txt}</p>
            <img className="weather-icons" src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
            <p>{`${item.main.temp.toPrecision(2)}°`}</p>
          </div>
        )
      })
    }
  }

  const renderCurrent = () => {
    if(currentWeather){
      return(
        <div className="col-md-3 text-center" style={{padding: "0.5em"}}>
          <p>Weather Right Now</p>
          <img className="weather-icons" src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}  />
          <p>{`${currentWeather.main.temp.toPrecision(2)}°`}</p>
        </div>
      )
    }
  }


  return(
    <section id="api-info-sidebar">
      <div className="weather-widget shadow-effect" style={{border: "1px solid lightgray", padding: "1.5em", margin: "1em 0em"}}>
        <div>
          <h4 className="bolder">Weather and Forecast {currentWeather ? `in ${currentWeather.name}` : null}</h4>
          <small>Powered By: <a href="http://openweathermap.org" target="_blank">OpenWeatherMap API</a></small>
          <hr/>
          <div className="row">
            {renderCurrent()}
            {renderWeather()}
          </div>
        </div>
      
      </div>
      <div className="news-widget shadow-effect" style={{border: "1px solid lightgray", padding: "1.5em", margin: "1em 0em"}}>
        <h4 className="bolder">Google News: Current Top Stories</h4>
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


