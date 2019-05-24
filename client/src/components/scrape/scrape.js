import React from 'react';
import './scrape.css';

function Scrape (props) {
  
  return(
    <div className="scrape">
      <h5>Mental Health News</h5>
      <hr/>
      <div className="article">
        {props.scrape.map((article, i) => {
          return (
            <div key={i}>
            {/* <h6>{article.title}</h6> */}
            <p className="center"><a href={`https://www.sciencedaily.com${article.link}`} target="_blank">{article.title}</a></p><br/>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Scrape;