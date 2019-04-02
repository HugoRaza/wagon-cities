import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    if (this.props.selectedCity) {
      let src = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;
      return (
        <div className="active-city">
          <div>
            {this.props.selectedCity.name}
          </div>
          <div>
            {this.props.selectedCity.address}
          </div>
          <div>
            <img src={src} alt=""className="city-picture" />
          </div>
        </div>
      )
    } else {
      return (
        <div className="active-city">
          SELECT A CITY
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
