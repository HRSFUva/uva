import React from 'react';
import TopWhitesEntry from './topWhitesEntry.jsx';

class TopWhitesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // topWhites: [
      // { id:1,
      //   name: 'peter michael',
      //   year: 2009,
      //   price: 30
      //  },
      // { id:2,
      //   name: 'berringer',
      //   year: 2007,
      //   price: 20
      //  },
      //  { id:3,
      //    name: 'peter michael',
      //   year: 2012,
      //   price: 15
      //  },
      //  { id:4,
      //    name: 'joel gatt',
      //   year: 2009,
      //   price: 30
      //  },
      //  { id:5,
      //    name: 'stella',
      //   year: 2009,
      //   price: 30
      //  },
      //  { id:6,
      //    name: 'barefoot',
      //   year: 2009,
      //   price: 10
      //  }
      // ]
    }
  }

  render() {
    return (
      <div className="bestCategory bestValueCategory">
        <h2>Top Whites</h2>
        <hr/>
        <ol>
          {this.props.topWhites.map(topWhite =>
            <li key={topWhite.id}><TopWhitesEntry topWhite={topWhite}/></li>
          )}
        </ol>
      </div>
    )
  }
}

export default TopWhitesList;
