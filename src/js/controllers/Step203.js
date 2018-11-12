import React from 'react';
import PropTypes from 'prop-types';

/*import BlocDivider from '../components/BlocDivider';*/
import BlocLink from '../components/BlocLink';
import BlocQCMType2 from '../components/BlocQCMType2';
import BlocQCMType3 from '../components/BlocQCMType3';
import moduleTypes from '../model/static/moduleTypes';

class Step2_03 extends React.Component {
  state = {
    showNextModule: 0,
  };

  handleShowNextModule = module => {
    if (module === moduleTypes.blocQCMType2) {
      this.setState({ showNextModule: 1 });
    } else if (module === moduleTypes.blocQCMType3) {
      this.setState({ showNextModule: 2 });
      this.props.endOfModules(true);
    }
  };

  handleShowLinks = () => {
    this.setState({ showLinks: !this.state.showLinks });
  };

  render() {
    const step2 = this.props.context.module_09;

    // const stepInStep0 = this.props.in && this.state.showNextModule > 0;
    // const stepInStep1 = this.props.in && this.state.showNextModule > 1;
    // const stepInStep2 = this.props.in && this.state.showNextModule > 2;

    return (
      <React.Fragment>
        {/*<BlocDivider in={this.props.in} />*/}
        <BlocLink in={this.props.in} scrollIntoView={this.props.in} {...step2.module_09_01} />
        <BlocQCMType2
          margins
          in={this.props.in}
          {...step2.module_09_02}
          gameIsFinished={this.handleShowNextModule}
          modulType={`${moduleTypes.blocQCMType2}`}
        />
        {/*<BlocDivider in={stepInStep0} />*/}
        <BlocQCMType3
          margins
          in={this.props.in}
          // scrollIntoView={stepInStep0}
          {...step2.module_09_03}
          classSelect="step2-module_09_03"
          modulType={`${moduleTypes.blocQCMType3}`}
          gameIsFinished={this.handleShowNextModule}
        />
        <BlocLink
          in={this.props.in}
          // scrollIntoView={stepInStep1}
          {...step2.module_09_04}
          onClick={this.handleShowLinks}
        />
        <BlocLink in={this.state.showLinks} scrollIntoView={this.state.showLinks} {...step2.module_09_05} />
        <BlocLink in={this.state.showLinks} {...step2.module_09_06} />
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
