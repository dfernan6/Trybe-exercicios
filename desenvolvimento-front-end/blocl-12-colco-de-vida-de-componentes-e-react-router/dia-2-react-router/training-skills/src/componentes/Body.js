import React from 'react';

class Body extends React.Component {
  render() {
    return <p>{this.props.readings}</p>;
  }
}

export default Body;