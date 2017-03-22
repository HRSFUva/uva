import React from 'react';
import BestValueWineEntry from './bestValueWineEntry.jsx';

class BestValueWineList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestValueWines: [
      { id:1,
        name: 'peter michael',
        year: 2009,
        price: 30
       },
      { id:2,
        name: 'berringer',
        year: 2007,
        price: 20
       },
       { id:3,
         name: 'peter michael',
        year: 2012,
        price: 15
       },
       { id:4,
         name: 'joel gatt',
        year: 2009,
        price: 30
       },
       { id:5,
         name: 'stella',
        year: 2009,
        price: 30
       },
       { id:6,
         name: 'barefoot',
        year: 2009,
        price: 10
       }
      ]
    }
  }

  render() {
    return (
      <div className="bestValueCategory">
        <h2>Best Value</h2>
        {this.state.bestValueWines.map(bestValueWine =>
          <li key={bestValueWine.id}><BestValueWineEntry bestValueWine={bestValueWine}/></li>
        )}
      </div>
    )
  }
}

export default BestValueWineList;
