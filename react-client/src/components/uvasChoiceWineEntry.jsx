import React from 'react';

class UvasChoiceWineEntry extends React.Component {

  constructor(props){
    super(props)
    this.state = { wine: this.props.topRated }
  }


  
  render() {
    return (
      <div className='productEntryFlexbox' onClick={() => { this.props.handleClickedProductEntry(this.state.wine) }}>
      <div className='entryFlexItem' >
        <h4>{this.props.topRated.name}</h4>
        <p>Released: {this.props.topRated.year}</p>
        <p> Best Price: ${this.props.topRated.priceMin}</p>
      </div>
      <div className='entryFlexItem flexItemRight'>
        <p>Avg Rating: <h4 className='entryRating'>{this.props.topRated.apiRating/20}</h4></p>
      </div>
     </div>
    )
  }
}

export default UvasChoiceWineEntry;
