import React from 'react';

class TopBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    var signup = (<button className='flexItem flexEdge' onClick={this.props.handleUserWantsSignUp} value='signup'>Sign Up</button>);
    var home =    (<button onClick={this.props.handleUserWantsHome} className='flexItem flexEdge' value='login'>Home</button>);

    return(
    <div className='flexContainer'>
      { this.props.userWantsHomePage && !this.props.userLoggedIn ? signup : this.props.userWantsHomePage && this.props.userLoggedIn || this.props.userWantsLogin ? home : home
        }

      <h2 className='flexItem flexCenter mainLogo'>Uva</h2>

      {this.props.userLoggedIn ?
       (<button className='flexItem flexEdge' onClick={this.props.handleUserWantsLogout} value='logout'>Logout</button>) : !this.props.userWantsLogin ? (<button className='flexItem flexEdge' onClick={this.props.handleUserWantsLogin} value='login'>Login</button>):(<button className='flexItem flexEdge' onClick={this.props.handleUserWantsSignUp} value='signup'>Sign Up</button>)}
    </div>
    )
  }
}

export default TopBar;