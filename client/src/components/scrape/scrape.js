import React from 'react';
import './scrape.css';

function Scrape (props) {
  
  return(
    <div className="scraper">
      <h5>Mental Health News</h5>
      <hr/>
      <div className="articles">
        {props.scrape.map((article, i) => {
          return (
          <div 
            className="article"
            key={i}>
            <p><a href={`https://www.sciencedaily.com${article.link}`} target="_blank">{article.title}</a></p><br/>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Scrape;