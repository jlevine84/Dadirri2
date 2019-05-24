import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';
import AUTH from '../../utils/AUTH';
import { throws } from 'assert';

class SignupForm extends Component {

	constructor() {
    super();
		this.state = {
      email: '',
      name: '',
			password: '',
			confirmPassword: '',
      redirectTo: null,
      divErrorClass: 'none',
      divErrorClass2: 'none'
		};
  }
  
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
  }
  
	handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.email && this.state.name && this.state.password && this.state.confirmPassword){
      if(this.state.email && (this.state.password === this.state.confirmPassword)){
        this.props.SignUp(this.state.email, this.state.password, this.state.name)
      }
      else{
        this.setState({
          divErrorClass: 'block'
        })
      }
    }
    else{
      this.setState({
        divErrorClass2: 'block'
      })
    } 
  }
  
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    
		return (
      <Container>
        <Row>
          <Col size="md-12">
            <form style={{marginTop: 10}}>
              <label htmlFor="email">Email Address: </label>
              <Input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label htmlFor="name">First Name: </label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password: </label>
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <label htmlFor="confirmPassword">Confirm Password: </label>
              <Input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              />
              <div style={{color: 'red',display:`${this.state.divErrorClass2}`}}>Please enter all fields</div>
              <div style={{color: 'red',display:`${this.state.divErrorClass}`}}>Passwords do not match</div>
              <button type="button" className="btn btn-info" onClick={(event) => {this.props.toggle1(); this.props.toggle2();}} >Already signed up? Go to Login</button>
              <FormBtn onClick={this.handleSubmit}>Register</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
		)
	}
}

export default SignupForm;
