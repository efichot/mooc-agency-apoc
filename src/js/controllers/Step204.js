import React from 'react';
import PropTypes from 'prop-types';

import BlocQCMType2 from '../views/BlocQCMType2';
import BlocLink from '../views/BlocLink';
import Fade from '../transitions/Fade';

class Step2_04 extends React.Component {
  state = {
    showNextModule: 0
  };

  handleShowNextModule = () => {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
    // if (this.state.showNextModule = 0) {
    this.props.endOfModules(true);
    // }
  };

  render() {
    const step2 = this.props.context.module_10;

    const stepInStep0 = this.state.showNextModule > 0;
    const stepInStep1 = this.state.showNextModule > 1;

    return (
      <Fade in={this.props.in}>
        <BlocQCMType2
          in={this.props.in}
          scrollIntoView={this.props.in}
          classSelect="step2-module_10_01"
          {...step2.module_10_01}
          gameIsFinished={this.handleShowNextModule}
        />
        <BlocLink
          in={stepInStep0}
          scrollIntoView={stepInStep0}
          {...step2.module_10_02}
          onClick={this.handleShowNextModule}
        />
        <BlocLink
          in={stepInStep1}
          scrollIntoView={stepInStep1}
          {...step2.module_10_03}
        />
        <BlocLink in={stepInStep1} {...step2.module_10_04} />
      </Fade>
    );
  }
}

Step2_04.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func
};

Step2_04.defaultProps = {};

export default Step2_04;
