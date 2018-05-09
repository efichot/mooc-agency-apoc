import React from 'react';
import PropTypes from 'prop-types';

import BlocVideo from '../views/BlocVideo';
import BlocLink from '../views/BlocLink';
import BlocText from '../views/BlocText';
import BlocQCMType3 from '../views/BlocQCMType3';
import Fade from '../transitions/Fade';

class Step2_02 extends React.Component {
  state = {
    showNextModule: 1
  };

  handleShowNextModule = () => {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
    if (this.state.showNextModule > 0) {
      this.props.endOfModules(true);
    }
  };

  render() {
    const step2 = this.props.context.module_08;

    const stepInStep0 = this.state.showNextModule > 0;
    const stepInStep1 = this.state.showNextModule > 1;
    const stepInStep2 = this.state.showNextModule > 2;

    return (
      <Fade in={this.props.in}>
        <BlocVideo in={this.props.in} {...step2.module_08_01} />
        <BlocLink in={this.props.in} {...step2.module_08_02} />
        <BlocText in={this.props.in} {...step2.module_08_03} />
        <BlocQCMType3
          in={this.props.in}
          classSelect="step2-module_08_04"
          {...step2.module_08_04}
          gameIsFinished={this.handleShowNextModule}
        />
        <BlocQCMType3
          in={stepInStep0}
          classSelect="step2-module_08_04"
          {...step2.module_08_05}
          gameIsFinished={this.handleShowNextModule}
        />
        <BlocLink
          in={stepInStep1}
          {...step2.module_08_06}
          onClick={this.handleShowNextModule}
        />
        <BlocLink in={stepInStep2} {...step2.module_08_07} />
        <BlocLink in={stepInStep2} {...step2.module_08_08} />
      </Fade>
    );
  }
}

Step2_02.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func
};

Step2_02.defaultProps = {};

export default Step2_02;
