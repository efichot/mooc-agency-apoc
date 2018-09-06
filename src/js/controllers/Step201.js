import React from 'react';
import PropTypes from 'prop-types';

/*import BlocDivider from '../views/BlocDivider';*/
import BlocLink from '../views/BlocLink';
import BlocQCMType2 from '../views/BlocQCMType2';
import BlocQCMType3 from '../views/BlocQCMType3';
import BlocSpacer from '../views/BlocSpacer';
import moduleTypes from '../model/static/moduleTypes';

class Step2_01 extends React.Component {
  state = {
    showNextModule: 0,
  };

  handleShowNextModule = module => {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
    if (this.state.showNextModule > 2) {
      this.props.endOfModules(true);
    }
  };

  render() {
    const step2 = this.props.context.module_07;

    // const stepInStep0 = this.props.in && this.state.showNextModule === 1;
    // const stepInStep1 = this.props.in && this.state.showNextModule === 2;
    // const stepInStep2 = this.props.in && this.state.showNextModule === 3;
    const stepInStep3 = this.props.in && this.state.showNextModule === 4;

    return (
      <React.Fragment>
        {/*<BlocDivider in={this.props.in} />*/}
        <BlocLink in={this.props.in} scrollIntoView={this.props.in} {...step2.module_07_01} />
        <BlocQCMType2
          in={this.props.in}
          {...step2.module_07_02}
          gameIsFinished={this.handleShowNextModule}
          modulType={`${moduleTypes.blocQCMType2}-1`}
        />
        <BlocSpacer in={this.props.in} />
        <BlocQCMType3
          in={this.props.in}
          // scrollIntoView={stepInStep0}
          {...step2.module_07_03}
          modulType={`${moduleTypes.blocQCMType3}`}
          gameIsFinished={this.handleShowNextModule}
        />
        {/*<BlocDivider in={stepInStep1} />*/}
        <BlocQCMType2
          in={this.props.in}
          // scrollIntoView={stepInStep1}
          margins
          {...step2.module_07_04}
          gameIsFinished={this.handleShowNextModule}
          modulType={`${moduleTypes.blocQCMType2}-2`}
        />
        <BlocLink
          in={this.props.in}
          // scrollIntoView={stepInStep2}
          {...step2.module_07_05}
          onClick={this.handleShowNextModule}
        />
        <BlocLink in={this.props.in} scrollIntoView={stepInStep3} {...step2.module_07_06} />
        <BlocLink in={this.props.in} {...step2.module_07_07} />
        <BlocLink in={this.props.in} {...step2.module_07_08} />
        <BlocLink in={this.props.in} {...step2.module_07_09} />
      </React.Fragment>
    );
  }
}

Step2_01.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func,
};

Step2_01.defaultProps = {};

export default Step2_01;
