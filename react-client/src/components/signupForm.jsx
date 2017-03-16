import React from 'react';

class SignupForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      passwordVerify: ''
    }
    this.handleUserWantsLogin = this.handleUserWantsLogin.bind(this);
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

  handlePasswordVerifyChange(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    //make post request to server with username and password
    console.log('inside handlesubmit form signupform')
    if (!this.state.username.length || !this.state.password.length){
      event.preventDefault()
    }
  }

  handleUserWantsLogin(event){
    console.log('wants login page');
    this.props.handleUserWantsSignUp();
  }

  render() {
    return (
      <div className='container'>
        <div className="signupFormWrapper">
          <form onSubmit={this.handleSubmit}>
            <label>
              <h4>
                Username:
              </h4><br/>
              <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
            </label>
            <label><br/>
              <h4>
              Password:<br/>
              </h4>
              <input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>
            </label><br/>
            <label><h4>Verify Password:</h4></label>
            <input type="text" value={this.state.passwordVerify} onChange={this.handlePasswordVerifyChange}/>
            <div className='signUpButton'>
              <input type="submit" value="Submit"/>
            </div>
          </form>
        </div>
        <div className='signUpButton'>
          <button onClick={this.handleUserWantsLogin}>Login</button>
        </div>
      </div>
    )
  }
}

export default SignupForm
