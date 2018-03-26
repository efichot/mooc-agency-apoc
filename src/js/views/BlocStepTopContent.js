import React from 'react';
import BlocStep from '../views/BlocStep';
import BlocTitle from '../views/BlocTitle';
import BlocVideo from '../views/BlocVideo';
import PropTypes from 'prop-types';

export default class BlocStepTopContent extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <React.Fragment>
        <BlocStep step={this.props.step.linkStep} />
        {!this.props.videoInIframe && (
          <BlocTitle title={this.props.step.title} />
        )}
        {!this.props.videoInIframe && (
          <BlocVideo context={this.props.step.module_01} />
        )}
      </React.Fragment>
    );
  }
}

BlocStepTopContent.propTypes = {
  step: PropTypes.object.isRequired
};
