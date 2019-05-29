import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AUTH from './utils/AUTH';
import LandingPage from './pages/Landing/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';


class App extends Component {

		state = {
			userEmail: null,
			loggedIn: false,
			user: null,
			showLogin:false,
			showSignUp: false,
			redirectTo: null,
			name: '',
			loginError: 'none'
    };
	
	toggleModal1 = () => this.setState({
		showLogin: !this.state.showLogin,
		loginError: 'none'
	})
	toggleModal2 = () => this.setState({
		showSignUp: !this.state.showSignUp,
		loginError: 'none'
	});
  
	componentDidMount(){
		AUTH.getUser().then(response => {
			if (response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user,
					userEmail: response.data.user.email,
					redirectTo: "/dashboard",
					name: response.data.user.name,
					loginError: 'none'
				});
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}

	logout = (event) => {
    event.preventDefault();
		AUTH.logout().then(response => {
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null,
					redirectTo: "/"
				});
			}
		});
	}

	login = (username, password) => {
		AUTH.login(username, password).then(response => {
      if (response.status === 200) {
        this.setState({
          loggedIn: true,
					user: response.data.user,
					redirectTo: "/dashboard",
					userEmail: username,
					name: response.data.user.name
				});
			}
    }).catch(err => {
			console.log(err)
			this.setState({
				loginError: 'block'
			})
		})
	}

	SignUp = (email, password, name)=>{
		AUTH.signup({
      email: email,
			password: password,
			name: name
    }).then(response => {
      if (!response.data.error) {
        this.setState({
          loggedIn: true,
					user: response.data,
					redirectTo: "/dashboard",
					userEmail: email,
					name: response.data.name
				});
      }
    }).catch(err => console.log(err));
	}

	render() {	
		return (
			<div className="App">
				{/* User is logged in */}
        { this.state.loggedIn && (
          <div>

              <Switch>
                <Route exact path="/" component={() => <Dashboard userID={this.state.user._id} user={this.state.name}/>} />
								<Route exact path="/about" component={() => <About user={this.state.user}/>} />
								<Route exact path="/dashboard" component={() => <Dashboard userID={this.state.user._id} username={this.state.name}/>} />
							</Switch>
          </div>
				)}
				{/*No User logged in*/}
        { !this.state.loggedIn && (
					<div>
						<Switch>
							<Route exact path="/" component={() => 
							<LandingPage user={this.state.user} toggle1 = {this.toggleModal1} toggle2={this.toggleModal2} loginError={this.state.loginError}
							showSignInModal={this.state.showLogin} login={this.login}
							showSignUpModal={this.state.showSignUp} SignUp={this.SignUp}/>}  />
							<Route exact path="/about" component={() => <About user={this.state.user}/>} />
						</Switch>
					</div>
				)} 
			</div>
		)
	}
}

export default App;
