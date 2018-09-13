import React from 'react';
import PropTypes from 'prop-types';
import BlocDescription from '../views/BlocDescription';
import BlocEnSavoirPlusType1 from '../views/BlocEnSavoirPlusType1';
import BlocQCMType1 from '../views/BlocQCMType1';
import BlocVideo from '../views/BlocVideo';
import BlocDivider from '../views/BlocDivider';
import Fade from '../transitions/Fade';
import moduleTypes from '../model/static/moduleTypes';

class Step7_03 extends React.Component {
  state = {
    showNextModule: 0,
  };

  handleShowNextModule = module => {
    if (module === moduleTypes.blocQCMType1) {
      this.setState({ showNextModule: 1 });
      this.props.endOfModules(true);
    }
  };

  render() {
    const step7 = this.props.context.module_06;
    const stepInStep0 = this.state.showNextModule > 0;

    return (
      <Fade in={this.props.in}>
        <BlocDescription
          in={this.props.in}
          scrollIntoView={this.props.in}
          modulType={step7.module_06_01.modulType}
          description={step7.module_06_01.description}
          padding={20}
        />
        <BlocEnSavoirPlusType1 in={this.props.in} {...step7.module_06_02} />
        <BlocDivider in={this.props.in} />
        <BlocQCMType1 in={this.props.in} {...step7.module_06_03} gameIsFinished={this.handleShowNextModule} />
        <BlocDivider in={this.props.in} />
        <BlocVideo in={this.props.in} scrollIntoView={stepInStep0} {...step7.module_06_04} />
      </Fade>
    );
  }
}

Step7_03.propTypes = {
  in: PropTypes.bool,
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func.isRequired,
};

Step7_03.defaultProps = {
  in: false,
};

export default Step7_03;
