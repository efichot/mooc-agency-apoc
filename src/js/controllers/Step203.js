import React from 'react';
import PropTypes from 'prop-types';

/*import BlocDivider from '../views/BlocDivider';*/
import BlocLink from '../views/BlocLink';
import BlocQCMType2 from '../views/BlocQCMType2';
import BlocQCMType3 from '../views/BlocQCMType3';
import Fade from '../transitions/Fade';

class Step2_03 extends React.Component {
  state = {
    showNextModule: 0
  };

  handleShowNextModule = () => {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
    if (this.state.showNextModule > 0) {
      this.props.endOfModules(true);
    }
  };

  render() {
    const step2 = this.props.context.module_09;

    const stepInStep0 = this.state.showNextModule > 0;

    return (
      <Fade in={this.props.in}>
        {/*<BlocDivider in={this.props.in} />*/}
        <BlocLink in={this.props.in} {...step2.module_09_01} />
        <BlocQCMType2
          in={this.props.in}
          {...step2.module_09_02}
          gameIsFinished={this.handleShowNextModule}
        />
        {/*<BlocDivider in={stepInStep0} />*/}
        <BlocQCMType3
          in={stepInStep0}
          {...step2.module_09_03}
          classSelect="step2-module_09_03"
          gameIsFinished={this.handleShowNextModule}
        />
      </Fade>
    );
  }
}

Step2_03.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func
};

Step2_03.defaultProps = {};

export default Step2_03;
