import React from 'react'
import './about.css'
import { Redirect, Link } from 'react-router-dom';
function About() {
  return (
    <div className="body">
      <h4><Link to="/" className="link">Home</Link></h4>
      <h1>About Dadirri</h1>
      <br></br>
      <img src='./../../images/icon.png' className='icon  mx-auto d-block'></img>
      <br></br>
      <div className=" no-gutters">
        <div className="container about-info">
          <p>
            <strong>Dadirri</strong>, by definition, is an Aboriginal term meaning, <strong>“A state of stillness, inner reflection, and deep listening.”</strong> 
          </p><br></br>
          <p>
            Dadirri's goal is to help our users by providing them a secure platform in which you can track your mental health in an easy to use and helpful manner. To achieve those goals, Dadirri allows users to log helpful information so you can keep track of your goals, progress, and mental wellness.
          </p><br></br><br></br>
          <p>
            Dadirri uses your daily entries to help chart and show trends through a myriad of date functionalities. If you ever forget to enter or want to update your daily entries; Don't worry! You can always select a date then enter or update a day's information!
          </p><br></br><br></br>
          <p>
            Take full advantage of our helpful tools which include:<br></br>
            <ul>
              <li>A daily diary where you can record any thoughts or feelings you have.</li>
              <li>Multiple easy to use trackers to log your overall health.</li>
              <li>A Contact list for your Doctor's information for easy reference.</li>
              <li>The ability to keep track of medications as well as a reminder to take them.</li>
            </ul>
          </p><br></br><br></br>
       
          <br></br><br></br><br></br>
          <p className="centered"><Link to='/'>Begin your journey with us today!</Link></p>
          <br></br>
          <p>
            The Dadirri Team:<br></br>
            <ul>
              <li><a href="https://github.com/ralracish">Carlar Blackman</a></li>
              <li><a href="https://github.com/kendallsdavis">Kendall Davis</a></li>
              <li><a href="https://github.com/jlevine84">Jeff Levine</a></li>
              <li><a href="https://github.com/LesleyPond">Lesley Pond</a></li>
              <li><a href="https://github.com/JamilW">Jamil Weeks</a></li>
            </ul>
          </p><br></br>
        </div>
      </div>
    </div>
  )
}

export default About