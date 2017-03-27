import React from 'react';
import TopRedsEntry from './topRedsEntry.jsx';
import _ from 'lodash';
import $ from 'jquery';

class TopRedsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topReds: [
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
          Top Reds
        </h2>
        <hr/>
        <ol>
          {this.props.topReds.map(topRed =>
            <li key={topRed.id}>
              <TopRedsEntry  topRed={topRed}/>
            </li>)}
        </ol>
      </div>
            // {/* <div>{this.state.maxRatingWines}</div> */}
            // <ul>
            //   {this.state.topRedss.map(topReds =>
            //     <li key={topReds.id}><topRedsEntry topReds={topReds} onClick={this.handleUserWantstopReds}/></li>
            //   )}
            // </ul>
          )
  }
}

export default TopRedsList;
