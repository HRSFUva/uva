import React from 'react';

class SignupForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      passwordVerify: '',
      validUsername: null,
      passwordsMatch: true
    }

    this.handleUserWantsLogin = this.handleUserWantsLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordVerifyChange = this.handlePasswordVerifyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ajaxCheckUsername = this.ajaxCheckUsername.bind(this);
    this.checkPasswordMatch = this.checkPasswordMatch.bind(this);
  }
  // var context = this;

  ajaxCheckUsername(){
    this.props.checkUsername(this.state.username);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value}, this.ajaxCheckUsername);
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handlePasswordVerifyChange(event) {
    this.setState({passwordVerify: event.target.value})
  }

  checkPasswordMatch(){
    if(this.state.password !== this.state.passwordVerify){
      this.setState({
        passwordsMatch: false
      })
    } else {
      this.setState({
        passwordsMatch: true
      })
    }
  }

  handleSubmit(event){
    //make post request to server with username and password
    var user = this.state.username;
    var pass = this.state.password;
    var verify = this.state.verify;

    this.checkPasswordMatch();

    if (user.length > 0 && this.state.passwordsMatch){
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
        <button value='home' onClick={this.props.userWantsHome}>Home</button>
      </span>
      <span className = 'loginButton'>
        <button value='login' onClick={this.handleUserWantsLogin}>Login</button>
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
              <div className ='invalidUsername'>
              { !this.props.invalidUsername ?
                (<span><h4> </h4></span>) : (<span><h4>Try another name</h4></span>) }
              </div>
            </div>
            <div className='passwordInputLabel'>
              <label>
                <h4>
                Password:
                </h4>
              </label>
            </div>
            <div className='passwordInputField'>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            </div>
            <div className='passwordInput'>
              <label>
                <h4>
                  Verify Password:
                </h4>
              </label>
            </div>
            <div className='passwordInputField'>
              <input type="password" value={this.state.passwordVerify} onChange={this.handlePasswordVerifyChange}/>
              <div className='invalidPassword'>
              { this.state.passwordsMatch ? '' : <span><h4>Passwords must match</h4></span>}
              </div>
            </div>
            <div className='signUpButton'>
              <input type="submit" value="Submit"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm
