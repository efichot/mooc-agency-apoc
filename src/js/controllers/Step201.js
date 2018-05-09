import React from 'react';
import PropTypes from 'prop-types';

/*import BlocDivider from '../views/BlocDivider';*/
import BlocLink from '../views/BlocLink';
import BlocQCMType2 from '../views/BlocQCMType2';
import BlocQCMType3 from '../views/BlocQCMType3';
import Fade from '../transitions/Fade';

class Step2_01 extends React.Component {
  state = {
    showNextModule: 2
  };

  handleShowNextModule = () => {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
    if (this.state.showNextModule > 1) {
      this.props.endOfModules(true);
    }
  };

  render() {
    const step2 = this.props.context.module_07;

    const stepInStep0 = this.state.showNextModule > 0;
    const stepInStep1 = this.state.showNextModule > 1;
    const stepInStep2 = this.state.showNextModule > 2;
    const stepInStep3 = this.state.showNextModule > 3;

    return (
      <Fade in={this.props.in}>
        {/*<BlocDivider in={this.props.in} />*/}
        <BlocLink in={this.props.in} {...step2.module_07_01} />
        <BlocQCMType2
          in={this.props.in}
          {...step2.module_07_02}
          gameIsFinished={this.handleShowNextModule}
        />
        {/*<BlocDivider in={stepInStep0} />*/}
        <BlocQCMType3
          in={stepInStep0}
          {...step2.module_07_03}
          gameIsFinished={this.handleShowNextModule}
        />
        {/*<BlocDivider in={stepInStep1} />*/}
        <BlocQCMType2
          in={stepInStep1}
          {...step2.module_07_04}
          gameIsFinished={this.handleShowNextModule}
        />
        <BlocLink
          in={stepInStep2}
          {...step2.module_07_05}
          onClick={this.handleShowNextModule}
        />
        <BlocLink in={stepInStep3} {...step2.module_07_06} />
        <BlocLink in={stepInStep3} {...step2.module_07_07} />
        <BlocLink in={stepInStep3} {...step2.module_07_08} />
        <BlocLink in={stepInStep3} {...step2.module_07_09} />
      </Fade>
    );
  }
}

Step2_01.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func
};

Step2_01.defaultProps = {};

export default Step2_01;
