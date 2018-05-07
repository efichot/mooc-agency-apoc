import React from 'react';
import PropTypes from 'prop-types';

import BlocStep from '../views/BlocStep';
import BlocTitle from '../views/BlocTitle';
import BlocVideo from '../views/BlocVideo';
import Fade from '../transitions/Fade';

class BlocStepTopContent extends React.Component {
  render() {
    const { step, videoInIframe } = this.props;

    return (
      <Fade in={this.props.in}>
        <BlocStep step={step.linkStep} />
        {!videoInIframe && <BlocTitle title={step.title} />}
        {!videoInIframe && <BlocVideo in {...step.module_01} />}
      </Fade>
    );
  }
}

BlocStepTopContent.propTypes = {
  in: PropTypes.bool,
  step: PropTypes.object.isRequired,
  videoInIframe: PropTypes.bool
};

BlocStepTopContent.defaultProps = {
  in: false,
  videoInIframe: false
};

export default BlocStepTopContent;
