import React from 'react';
import PropTypes from 'prop-types';
import Fade from '../transitions/Fade';

class BlocStep extends React.Component {
  render() {
    return (
      <Fade in={this.props.in} classProps={`bloc2 bloc-step`} margins={this.props.margins}>
        <span className="step-title">Module</span>
        <span>{this.props.step}</span>
      </Fade>
    );
  }
}

BlocStep.propTypes = {
  in: PropTypes.bool,
  margins: PropTypes.bool,
  step: PropTypes.number.isRequired,
};

BlocStep.defaultProps = {
  in: true,
  margins: true,
};

export default BlocStep;
