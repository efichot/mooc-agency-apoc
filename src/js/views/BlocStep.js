import React from 'react';
import PropTypes from 'prop-types';
import Fade from '../transitions/Fade';

class BlocStep extends React.Component {
  render() {
    return (
      <Fade in={this.props.in} classProps={`bloc bloc-step`}>
        <span className="step-title">Étape</span>
        <span>{this.props.step}</span>
      </Fade>
    );
  }
}

BlocStep.propTypes = {
  in: PropTypes.bool,
  step: PropTypes.number.isRequired
};

BlocStep.defaultProps = {
  in: true
};

export default BlocStep;
