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
        <div className="about-title">About Dadirri</div>
        <img src='./../../images/icon.png' alt="Nautilus" className='icon mx-auto d-block'/>
      </div>

      <div className="about-info-row">
        <div className="about-info">
          <p>
            <strong>Dadirri</strong>, by definition, is an Aboriginal term meaning, <strong>“A state of stillness, inner reflection, and deep listening.”</strong> 
          </p>
          <p>
          <strong>Dadirri's</strong> goal is to help our users by providing them a secure platform in which you can track your mental health in an easy to use and helpful manner. To achieve those goals, Dadirri allows users to log helpful information so you can keep track of your goals, progress, and mental wellness.
          </p>
          <p>
          <strong>Dadirri</strong> uses your daily entries to help chart and show trends through a myriad of date functionalities. If you ever forget to enter or want to update your daily entries; Don't worry! You can always select a date then enter or update a day's information!
          </p>

          <p className="features">
            <strong>Take full advantage of our helpful tools which include:</strong>
            <ul>
              <li>A daily diary where you can record any thoughts or feelings you have.</li>
              <li>Multiple easy to use trackers to log your overall health.</li>
              <li>A Contact list for your Doctor's information for easy reference.</li>
              <li>The ability to keep track of medications as well as a reminder to take them.</li>
            </ul>
          </p>
          <hr/>
          <div className="to-home">
            <Link className ="to-home" to='/'><strong>Begin your journey with us today!</strong></Link>
          </div>

          <hr/>
          <p className="members-title">
            <h3><strong>The Dadirri Team:</strong></h3>
          </p>
          <p className="members">
            <ul>
              <li><a href="https://github.com/ralracish"><strong>Carlar Blackman</strong></a></li>
              <li><a href="https://github.com/kendallsdavis"><strong>Kendall Davis</strong></a></li>
              <li><a href="https://github.com/jlevine84"><strong>Jeff Levine</strong></a></li>
              <li><a href="https://github.com/LesleyPond"><strong>Lesley Pond</strong></a></li>
              <li><a href="https://github.com/JamilW"><strong>Jamil Weeks</strong></a></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About