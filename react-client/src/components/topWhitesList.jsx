import React from 'react';
import TopWhitesEntry from './topWhitesEntry.jsx';

class TopWhitesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="bestCategory bestValueCategory">
        <h2>Top Whites</h2>
        <hr/>
        <ol>
          {this.props.topWhites.map(topWhite =>
            <li key={topWhite._id}>
            <TopWhitesEntry  handleClickedProductEntry={this.props.handleClickedProductEntry} topWhite={topWhite}/>
            </li>
          )}
        </ol>
      </div>
    )
  }
}

export default TopWhitesList;
