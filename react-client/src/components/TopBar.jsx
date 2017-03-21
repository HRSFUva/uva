import React from 'react';

class TopBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
    <div className='flexContainer'>
      <button onClick={this.props.handleUserWantsHome} className='flexItem flexEdge' value='login'>Home</button>
      {this.props.userLoggedIn &&
      <h4> Hi {this.props.username}! </h4> }
      <h2 className='flexItem flexCenter mainLogo'>Uva</h2>
      {!this.props.userLoggedIn ?
      !this.props.userWantsSignUp ? (<button className='flexItem flexEdge' onClick={this.props.handleUserWantsLogin} value='login'>Login</button>) : (<button className='flexItem flexEdge' onClick={this.props.handleUserWantsSignUp} value='signup'>Sign Up</button>) :
      (<button className='flexItem flexEdge' onClick={this.props.handleUserWantsLogout} value='logout'>Logout</button>)}
    </div>
    )
  }
}

export default TopBar;