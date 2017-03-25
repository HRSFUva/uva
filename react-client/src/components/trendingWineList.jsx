import React from 'react';
import TrendingWineEntry from './trendingWineEntry.jsx';
import _ from 'lodash';
import $ from 'jquery';

class TrendingWineList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingWines: [
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
     ],
    //  wineNumRatings: [{product: 'moscato', rating: 7}, {product: 'skinny', rating: 3}, {product: 'apothic', rating: 10}, {product: 'barefoot', rating: 5}, {product: 'bestWine', rating: 15}, {product: 'vinegar', rating: 0}],
    //  maxRatingWines: []
    }
  }

  render() {
    return (
      <div className='bestCategory trendingCategory'>
        <h2>
          Trending
        </h2>
        <hr/>
        <ol>
          {this.props.topReds.map(topRed =>
            <li key={topRed.id}>
              <TrendingWineEntry  topRed={topRed}/>
            </li>)}
        </ol>
      </div>
            // {/* <div>{this.state.maxRatingWines}</div> */}
            // <ul>
            //   {this.state.trendingWines.map(trendingWine =>
            //     <li key={trendingWine.id}><TrendingWineEntry trendingWine={trendingWine} onClick={this.handleUserWantsTrendingWine}/></li>
            //   )}
            // </ul>
          )
  }
}

export default TrendingWineList;
