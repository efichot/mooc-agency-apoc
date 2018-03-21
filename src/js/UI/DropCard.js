import React from 'react';
//import PropTypes from 'prop-types';

export default class DropCard extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return <div className={`drop-card`}>{this.props.children}</div>;
  }
}

DropCard.propTypes = {};
