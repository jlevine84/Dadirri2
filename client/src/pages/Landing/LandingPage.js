import React from 'react';
import './LandingPage.css'
import LoginForm from '../Auth/LoginForm';
import SignupForm from '../Auth/SignupForm';
import { Redirect, Link } from 'react-router-dom';
import iconPath from '../../images/icon.png'
class LandingPage extends React.Component{

  dismissModal = ()=>{
      this.props.toggle1()
    }

  dismissSignUpModal = ()=>{
    this.props.toggle2()
  }

  render(){
    return(
      <div className="body">
        <h4><Link to="/about" className="link">About Dadirri</Link></h4>
        <div class="container">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <img src={iconPath} alt="Nautilus" className="img-glow mx-auto d-block"/>
          <h1 className="titlex">Dadirri</h1>
          <div className="buttonDiv">
            <button type="button" className="btn btn-light signUp" onClick={this.props.toggle1}>Sign In/Sign Up</button>
          </div>

          {/* sign in modal */}
          <div 
            className={`modal fade WelcomeModal ${this.props.showSignInModal ? 'show' : ''}`} 
            style={{ display: `${this.props.showSignInModal ? 'block' : 'none'}`,}}
            id="WelcomeModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
        
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Login to Dadirri</h5>
                <button onClick={this.dismissModal} className="xbutton btn btn-light">x</button>                             
              </div>
              <div className="modal-body">
                <LoginForm login={this.props.login} toggle1={this.props.toggle1} toggle2={this.props.toggle2} loginError={this.props.loginError}/>
              </div>
            </div>
          </div>
        </div>

          {/* sign up modal */}
          <div 
            className={`modal fade WelcomeModal ${this.props.showSignUpModal ? 'show' : ''}`} 
            style={{ display: `${this.props.showSignUpModal ? 'block' : 'none'}`, }}
            id="WelcomeModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
          
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Sign Up for Dadirri</h5> 
                    <button onClick={this.dismissSignUpModal} className="xbutton btn btn-light float-left">x</button>                           
                </div>
                <div className="modal-body">
                  <SignupForm SignUp = {this.props.SignUp} toggle1={this.props.toggle1} toggle2={this.props.toggle2} showSignInModal={this.props.showSignInModal}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;

