import React from "react";
import { Consumer } from './Context';

class ApiWidget extends React.Component {
  render() {
    return (
      <Consumer>
        {props => {

          const renderNews = () => {
            return props.news.map((item, i) => {
              return (
                <div key={i} className="news-widget__cards pb-4">
                  <div>
                    <a href={item.url} target="_blank" >
                      <img className="news-image" src={item.urlToImage} />
                    </a>
                  </div>
                  <div>
                    <a href={item.url} target="_blank" >
                      <p>{item.title}</p>
                    </a>
                  </div>
                </div>
              )
            })
          }

          return (
            <section id="api-info-sidebar" >
              <div className="news-widget shadow-effect" style={{ border: "1px solid lightgray", padding: "1.5em", margin: "1em 0em" }}>
                <h4 className="bolder">Google News: Current Top Stories</h4>
                <small>Powered By: <a href="https://newsapi.org" target="_blank">News API</a></small>
                <hr />
                {renderNews()}
              </div>
            </section>
          )

        }}
      </Consumer>
    )
  }
}

export default ApiWidget;


