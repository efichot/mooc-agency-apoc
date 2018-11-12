import React from 'react';
import PropTypes from 'prop-types';
import Fade from '../transitions/Fade';

class BlocTitle extends React.Component {
  render() {
    return (
      <Fade in={this.props.in} classProps={`bloc bloc-title`} margins={this.props.margins}>
        <span>{this.props.title}</span>
      </Fade>
    );
  }
}

BlocTitle.propTypes = {
  in: PropTypes.bool,
  margins: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

BlocTitle.defaultProps = {
  in: true,
  margins: true,
};

export default BlocTitle;
