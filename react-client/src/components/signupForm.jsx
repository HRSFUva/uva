import React from 'react';

class SignupForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    // this.handleChange.bind(this);
    // this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    //make post request to server with username and password
    if (!this.state.username.length || !this.state.password.length){
      event.preventDefault()
    }
  }
  
  render() {
    return (
      <div className="signupFormWrapper">
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:<br/>
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
          </label>
          <label><br/>
            Password:<br/>
            <input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label><br/>
          <input type="submit" value="Signup"/>
        </form>
      </div>
    )
  }
}

export default SignupForm
