import React from 'react';
import PropTypes from 'prop-types';

import BlocQCMType2 from '../views/BlocQCMType2';
import BlocLink from '../views/BlocLink';
import BlocSpacer from '../views/BlocSpacer';
import moduleTypes from '../model/static/moduleTypes';

class Step2_04 extends React.Component {
  state = {
    showNextModule: 0,
  };

  handleShowNextModule = module => {
    if (module === moduleTypes.blocQCMType2) {
      this.setState({ showNextModule: 1 });
      this.props.endOfModules(true);
    }
  };

  handleShowLinks = () => {
    this.setState({ showLinks: !this.state.showLinks });
  };
  render() {
    const step2 = this.props.context.module_10;

    // const stepInStep0 = this.state.showNextModule > 0;
    // const stepInStep1 = this.state.showNextModule > 1;

    return (
      <React.Fragment>
        <BlocQCMType2
          in={this.props.in}
          scrollIntoView={this.props.in}
          classSelect="step2-module_10_01"
          {...step2.module_10_01}
          gameIsFinished={this.handleShowNextModule}
        />
        <BlocSpacer />
        <BlocLink
          in={this.props.in}
          // scrollIntoView={stepInStep0}
          {...step2.module_10_02}
          onClick={this.handleShowLinks}
        />
        <BlocLink in={this.state.showLinks} scrollIntoView={this.state.showLinks} {...step2.module_10_03} />
        <BlocLink in={this.state.showLinks} {...step2.module_10_04} />
      </React.Fragment>
    );
  }
}

Step2_04.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func,
};

Step2_04.defaultProps = {};

export default Step2_04;
