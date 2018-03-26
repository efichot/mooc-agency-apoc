import React from 'react';
import PropTypes from 'prop-types';

export default class BlocTitle extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <div className={`bloc bloc-title`}>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

BlocTitle.propTypes = {
  title: PropTypes.string.isRequired
};
