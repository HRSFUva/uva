import React from 'react';
import UvasChoiceWineEntry from './uvasChoiceWineEntry.jsx';

class UvasChoiceWineList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uvasChoiceWines: [
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

  render () {
    return (
      <div className="bestCategory uvasChoiceCategory">
        <h2>Uva's Choice</h2>
        <hr/> 
        <ol>
          {this.props.topRated.map(topRated =>
            <li key={topRated.id}><UvasChoiceWineEntry handleClickedProductEntry={this.props.handleClickedProductEntry} topRated={topRated}/></li>
          )}
        </ol>
      </div>
    )
  }
}

export default UvasChoiceWineList;
