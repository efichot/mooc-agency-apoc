import React from 'react';
import PropTypes from 'prop-types';

import BlocTitle from '../components/BlocTitle';
import BlocVideo from '../components/BlocVideo';
import Fade from '../transitions/Fade';

class BlocStepTopContent extends React.Component {
  render() {
    const { step, videoInIframe, scrollIntoView } = this.props;

    return (
      <Fade
        classProps="bloc-step-top-content margin-fade"
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!videoInIframe && <BlocTitle title={step.title} margins />}
        {!videoInIframe && <BlocVideo in {...step.module_01} />}
      </Fade>
    );
  }
}

BlocStepTopContent.propTypes = {
  in: PropTypes.bool,
  scrollIntoView: PropTypes.bool,
  step: PropTypes.object.isRequired,
  videoInIframe: PropTypes.bool,
};

BlocStepTopContent.defaultProps = {
  in: false,
  scrollIntoView: false,
  videoInIframe: false,
};

export default BlocStepTopContent;
