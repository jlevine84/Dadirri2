import React from 'react'
import './about.css'
import { Link } from 'react-router-dom';
function About() {
  return (
    <div className="about-body">

      <nav className="about-nav">
        <h4><Link to="/" className="link">Home</Link></h4>
      </nav>

      <div className="about-title-row">
        <h1><strong>About Dadirri</strong></h1>
        <img src='./../../images/icon.png' className='icon mx-auto d-block'/>
      </div>

      <div className="about-info-row">
        <div className="about-info">
          <p>
            <strong>Dadirri</strong>, by definition, is an Aboriginal term meaning, <strong>“A state of stillness, inner reflection, and deep listening.”</strong> 
          </p>
          <br/>
          <p>
            Dadirri's goal is to help our users by providing them a secure platform in which you can track your mental health in an easy to use and helpful manner. To achieve those goals, Dadirri allows users to log helpful information so you can keep track of your goals, progress, and mental wellness.
          </p>
          <br/>
          <br/>
          <p>
            Dadirri uses your daily entries to help chart and show trends through a myriad of date functionalities. If you ever forget to enter or want to update your daily entries; Don't worry! You can always select a date then enter or update a day's information!
          </p>
          <br/>
          <br/>
          <p>
            Take full advantage of our helpful tools which include:<br></br>
            <ul>
              <li>A daily diary where you can record any thoughts or feelings you have.</li>
              <li>Multiple easy to use trackers to log your overall health.</li>
              <li>A Contact list for your Doctor's information for easy reference.</li>
              <li>The ability to keep track of medications as well as a reminder to take them.</li>
            </ul>
          </p>
          <br/>
      
          <br/>
          <Link to='/'>Begin your journey with us today!</Link>
          <br/>
          <p>
            The Dadirri Team:<br/>
            <ul>
              <li><a href="https://github.com/ralracish">Carlar Blackman</a></li>
              <li><a href="https://github.com/kendallsdavis">Kendall Davis</a></li>
              <li><a href="https://github.com/jlevine84">Jeff Levine</a></li>
              <li><a href="https://github.com/LesleyPond">Lesley Pond</a></li>
              <li><a href="https://github.com/JamilW">Jamil Weeks</a></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About