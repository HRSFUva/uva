import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  render () {
    return (
      <div className = 'container'>
        <div className = 'heroImageContainer'>
          <span className = 'mainLogo'>
            <h2>Uva</h2>
          </span>
          <div className = 'heroContentWrapper'>
            <h2>Unbiased wine reviews</h2>
            <input className = 'mainSearchBar' placeholder = 'Drink Great Wine'></input>
          </div>
        </div>

        hi
      </div>
    )
  }
}

export default App;