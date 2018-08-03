import React from 'react';
import PropTypes from 'prop-types';

/*import BlocDivider from '../views/BlocDivider';*/
import BlocLink from '../views/BlocLink';
import BlocQCMType2 from '../views/BlocQCMType2';
import BlocQCMType3 from '../views/BlocQCMType3';

class Step2_03 extends React.Component {
  state = {
    showNextModule: 0,
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  handleShowNextModule = () => {
    console.log('handleShowNextModule 203');
    this.setState({ showNextModule: this.state.showNextModule + 1 });
    if (this.state.showNextModule > 1) {
      this.props.endOfModules(true);
    }
  };

  render() {
    const step2 = this.props.context.module_09;

    const stepInStep0 = this.props.in && this.state.showNextModule > 0;
    const stepInStep1 = this.props.in && this.state.showNextModule > 1;
    const stepInStep2 = this.props.in && this.state.showNextModule > 2;

    return (
      <React.Fragment>
        {/*<BlocDivider in={this.props.in} />*/}
        <BlocLink in={this.props.in} scrollIntoView={this.props.in} {...step2.module_09_01} />
        <BlocQCMType2 margins in={this.props.in} {...step2.module_09_02} gameIsFinished={this.handleShowNextModule} />
        {/*<BlocDivider in={stepInStep0} />*/}
        <BlocQCMType3
          margins
          in={stepInStep0}
          scrollIntoView={stepInStep0}
          {...step2.module_09_03}
          classSelect="step2-module_09_03"
          gameIsFinished={this.handleShowNextModule}
        />
        <BlocLink
          in={stepInStep1}
          scrollIntoView={stepInStep1}
          {...step2.module_09_04}
          onClick={this.handleShowNextModule}
        />
        <BlocLink in={stepInStep2} scrollIntoView={stepInStep2} {...step2.module_09_05} />
        <BlocLink in={stepInStep2} {...step2.module_09_06} />
      </React.Fragment>
    );
  }
}

Step2_03.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func,
};

Step2_03.defaultProps = {};

export default Step2_03;
