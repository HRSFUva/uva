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
    var pass = this.state.username;
    var verify = this.state.verify;
    var user = this.state.username;
    console.log('inside handlesubmit form USER', user);
    console.log('inside handlesubmit form USER', pass);
    console.log('inside handlesubmit form USER', verify);

    console.log('inside handlesubmit form signupform')
    if ( user.length > 0){
      console.log('submit inside signupform,');
      this.props.newUser(user, pass);

    }
      event.preventDefault()
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
