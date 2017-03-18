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
    this.handlePasswordVerifyChange = this.handlePasswordVerifyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handlePasswordVerifyChange(event) {
    this.setState({passwordVerify: event.target.value})
  }

  handleSubmit(event){
    //make post request to server with username and password
    var user = this.state.username;
    var pass = this.state.password;
    var verify = this.state.verify;

    if (user.length > 0){
      this.props.newUser(user, pass);
    }
    event.preventDefault()
  }

  handleUserWantsLogin(event){
    this.props.handleUserWantsSignUp();
  }

  render() {
    return (
      <div className='container'>
      <span className = 'menuButton'>
        <button value='login' onClick={this.props.userWantsHome}>Home</button>
      </span>
        <div className="signupFormWrapper">
          <form onSubmit={this.handleSubmit}>
            <div className='passwordInputLabel'>
              <label>
                <h4>
                  Username:
                </h4>
              </label>
              </div>
              <div className='passwordInputField'>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
              </div>
              <div className='passwordInputLabel'>
                <label>
                  <h4>
                  Password:
                  </h4>
                </label>
              </div>
              <div className='passwordInputField'>
                <input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>
              </div>
              <div className='passwordInput'>
                <label>
                  <h4>
                    Verify Password:
                  </h4>
                </label>
              </div>
              <div className='passwordInputField'>
                <input type="text" value={this.state.passwordVerify} onChange={this.handlePasswordVerifyChange}/>
              </div>
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
