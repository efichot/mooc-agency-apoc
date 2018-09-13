import React from 'react';
import PropTypes from 'prop-types';

import BlocVideo from '../views/BlocVideo';
import BlocLink from '../views/BlocLink';
import BlocText from '../views/BlocText';
import BlocQCMType3 from '../views/BlocQCMType3';
import BlocDivider from '../views/BlocDivider';
import moduleTypes from '../model/static/moduleTypes';

class Step2_02 extends React.Component {
  state = {
    showNextModule: 0,
  };

  handleShowNextModule = module => {
    if (module === `${moduleTypes.blocQCMType3}-1`) {
      this.setState({ showNextModule: 1 });
    } else if (module === `${moduleTypes.blocQCMType3}-2`) {
      this.setState({ showNextModule: 2 });
      this.props.endOfModules(true);
    }
  };

  handleShowLinks = () => {
    this.setState({ showLinks: !this.state.showLinks });
  };
  render() {
    const step2 = this.props.context.module_08;

    // const stepInStep0 = this.props.in && this.state.showNextModule > 0;
    // const stepInStep1 = this.props.in && this.state.showNextModule > 1;
    // const stepInStep2 = this.props.in && this.state.showNextModule > 2;

    return (
      <React.Fragment>
        <BlocVideo in={this.props.in} scrollIntoView={this.props.in} {...step2.module_08_01} />
        <BlocLink in={this.props.in} {...step2.module_08_02} />
        <BlocDivider in={this.props.in} noMarginTop />
        <BlocText in={this.props.in} {...step2.module_08_03} />
        <BlocQCMType3
          in={this.props.in}
          margins
          classSelect="step2-module_08_04"
          {...step2.module_08_04}
          modulType={`${moduleTypes.blocQCMType3}-1`}
          gameIsFinished={this.handleShowNextModule}
        />
        <BlocQCMType3
          in={this.props.in}
          margins
          classSelect="step2-module_08_04"
          {...step2.module_08_05}
          modulType={`${moduleTypes.blocQCMType3}-2`}
          gameIsFinished={this.handleShowNextModule}
        />
        <BlocLink
          in={this.props.in}
          // scrollIntoView={stepInStep1}
          {...step2.module_08_06}
          onClick={this.handleShowLinks}
        />
        <BlocLink in={this.state.showLinks} scrollIntoView={this.state.showLinks} {...step2.module_08_07} />
        <BlocLink in={this.state.showLinks} {...step2.module_08_08} />
      </React.Fragment>
    );
  }
}

Step2_02.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func,
};

Step2_02.defaultProps = {};

export default Step2_02;
