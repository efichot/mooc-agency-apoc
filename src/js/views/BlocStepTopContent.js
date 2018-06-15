import React from 'react';
import PropTypes from 'prop-types';

import BlocTitle from '../views/BlocTitle';
import BlocVideo from '../views/BlocVideo';
import Fade from '../transitions/Fade';

class BlocStepTopContent extends React.Component {
  render() {
    const { step, videoInIframe, scrollIntoView } = this.props;

    return (
      <Fade
        classProps="bloc-step-top-content"
        in={this.props.in}
        scrollIntoView={scrollIntoView}
      >
        {!videoInIframe && <BlocTitle title={step.title} />}
        {!videoInIframe && <BlocVideo in {...step.module_01} />}
      </Fade>
    );
  }
}

BlocStepTopContent.propTypes = {
  in: PropTypes.bool,
  scrollIntoView: PropTypes.bool,
  step: PropTypes.object.isRequired,
  videoInIframe: PropTypes.bool
};

BlocStepTopContent.defaultProps = {
  in: false,
  scrollIntoView: false,
  videoInIframe: false
};

export default BlocStepTopContent;
