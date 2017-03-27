import React from 'react';
import SignupForm from './signupForm.jsx';
import TopBar from './TopBar.jsx';

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    //make post request to server with username and password
    if (this.state.username.length > 0 && this.state.password.length > 0){
      this.props.validate(this.state.username, this.state.password);
      this.setState({
        username: '',
        password: ''
      })
    }
    event.preventDefault()
  }

  render() {
    return (
      <div className='container'>

        <div className="signupFormWrapper">
          <form onSubmit={this.handleSubmit}>
            <label>
              <h4>Username:</h4>
              <input placeholder='username' type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
            </label>
            <label><br/><br/>
              <h4>Password:</h4>
              <input placeholder='password' type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            </label><br/>
            <input type="submit" value="Submit"/>
            {this.props.invalidPasswordAttempt &&
              <span><h4>Try Again</h4></span> }
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;