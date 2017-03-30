import React from 'react';
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
              <h4 ><a href="/login/facebook">Sign Up or Login with Facebook</a></h4>
        </div>
      </div>
    )
  }
}

export default LoginForm;