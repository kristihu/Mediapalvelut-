import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {login, register, getUser} from '../util/MediaAPI';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class Login extends Component {
  state = {
    user: {
      username: '',
      password: '',
      email: '',
      full_name: '',
    },
    toggleForm: true,
    userAvailable: true,
  };

  handleLoginSubmit = (evt) => {
    evt.preventDefault();
    this.doLogin();
  };

  handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    register(this.state.user).then(user => {
      console.log(user);
      this.doLogin();
    });
  };

  doLogin = () => {
    login(this.state.user.username, this.state.user.password).then(response => {
      console.log(response);
      if(response.token !== undefined) {
        this.props.setUser(response.user);
        localStorage.setItem('token', response.token);
        this.props.history.push('/home');
      } else {
        alert(response.message);
      }
    });
  };

  handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    console.log(value, name);

    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          [name]: value,
        },
      };
    });
  };

  checkUserAvailable = (evt) => {
    // tarkasta onko käyttäjätunnus vapaa
    // jos ei, tee esim alert()
  };

  componentDidMount() {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token') !== null) {
      getUser(localStorage.getItem('token')).then(response => {
        this.props.setUser(response);
        this.props.history.push('/home');
      });
    }
  }

  render() {
    return (
        <React.Fragment>
          <h1>Login</h1>
          <ValidatorForm
            onSubmit={this.handleLoginSubmit}
            onError={errors => console.log(errors)}>
         <TextValidator
           label="username"
           onChange={this.handleInputChange}
           name="username"
           value={this.state.user.username}
           validators={['required']}
           errorMessages={['this field is required']}/>
            <br/>
            <TextValidator
                label="password"
                onChange={this.handleInputChange}
                name="password"
                type="password"
                value={this.state.user.password}
                validators={['required']}
                errorMessages={['this field is required']}/>
            <br/>
            <button type="submit">Login</button>
          </ValidatorForm>
          <h1>Register</h1>
          <ValidatorForm

            onSubmit={this.handleRegisterSubmit}
            onError={errors => console.log(errors)}>
            <TextValidator
              label="username"
              onChange={this.handleInputChange}
              name="username"
              value={this.state.user.username}
              validators={['required']}
              errorMessages={['this field is required']}/>


            <br/>
            <TextValidator
              label="password"
              onChange={this.handleInputChange}
              name="password"
              type="password"
              value={this.state.user.password}
              validators={['required']}
              errorMessages={['this field is required']}/>
            <br/>
            <TextValidator
              label="email"
              onChange={this.handleInputChange}
              name="email"
              value={this.state.user.email}
              validators={['required']}
              errorMessages={['this field is required']}/>

            <br/>
            <TextValidator
              label="full_name"
              onChange={this.handleInputChange}
              name="full_name"
              value={this.state.user.full_name}
              validators={['required']}
              errorMessages={['this field is required']}/>
            <br/>
            <button type="submit">Login</button>
          </ValidatorForm>
        </React.Fragment>
    );
  }
}

Login.propTypes = {
  setUser: PropTypes.func,
  history: PropTypes.object,
};

export default Login;
