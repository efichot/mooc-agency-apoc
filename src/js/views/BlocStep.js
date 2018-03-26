import React from 'react';
import PropTypes from 'prop-types';

export default class BlocStep extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <div className={`bloc bloc-step`}>
        <span className="step-title">Étape</span>
        <span>{this.props.step}</span>
      </div>
    );
  }
}

BlocStep.propTypes = {
  step: PropTypes.number.isRequired
};
