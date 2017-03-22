import React from 'react';

class TopWines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topWines: [
      { name: 'peter michael',
        year: 2009,
        price: 30
       },
      { name: 'berringer',
        year: 2007,
        price: 20
       },
       { name: 'peter michael',
        year: 2012,
        price: 15
       },
       { name: 'joel gatt',
        year: 2009,
        price: 30
       },
       { name: 'stella',
        year: 2009,
        price: 30
       },
       { name: 'barefoot',
        year: 2009,
        price: 10
       }
      ]
    }

  }

  render() {
    return (
      <div className='topCategory'>
        <h2>
          Best Value
        </h2>
        <ul>
          <li><h4>awesome wine</h4></li>
          <li><h4>awesome wine</h4></li>
          <li><h4>awesome wine</h4></li>
          <li><h4>awesome wine</h4></li>
          <li><h4>awesome wine</h4></li>
        </ul>
      </div>
    )
  }
}

export default TopWines;
