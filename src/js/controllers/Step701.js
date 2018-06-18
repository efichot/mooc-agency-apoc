import React from 'react';
import PropTypes from 'prop-types';

import BlocDragAndDropType1 from '../views/BlocDragAndDropType1';
import BlocDescription from '../views/BlocDescription';
import BlocDivider from '../views/BlocDivider';
import BlocVideo from '../views/BlocVideo';
import BlocUpAndDownType1 from '../views/BlocUpAndDownType1';
import Fade from '../transitions/Fade';

class Step7_01 extends React.Component {
  state = {
    showNextModule: 0
  };

  handleShowNextModule = () => {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
    if (this.state.showNextModule > 2) {
      this.props.endOfModules(true);
    }
  };

  render() {
    const step7 = this.props.context.module_04;

    const stepInStep0 = this.state.showNextModule > 0;
    const stepInStep1 = this.state.showNextModule > 1;
    const stepInStep2 = this.state.showNextModule > 2;

    return (
      <Fade in={this.props.in}>
        <BlocDescription
          in={this.props.in}
          scrollIntoView={this.props.in}
          modulType={step7.module_04_01.modulType}
          description={step7.module_04_01.description}
          padding={20}
        />
        <BlocDragAndDropType1
          in={this.props.in}
          {...step7.module_04_02}
          gameIsFinished={this.handleShowNextModule}
        />
        <BlocDivider in={stepInStep0} />
        <BlocDragAndDropType1
          in={stepInStep0}
          scrollIntoView={stepInStep0}
          {...step7.module_04_03}
          gameIsFinished={this.handleShowNextModule}
        />
        <BlocDivider in={stepInStep1} />
        <BlocVideo
          in={stepInStep1}
          scrollIntoView={stepInStep1}
          {...step7.module_04_04}
        />
        <BlocUpAndDownType1
          in={stepInStep1}
          {...step7.module_04_05}
          gameIsFinished={this.handleShowNextModule}
          margins
        />
        <BlocUpAndDownType1
          in={stepInStep2}
          scrollIntoView={stepInStep2}
          {...step7.module_04_06}
          gameIsFinished={this.handleShowNextModule}
          noHeader
        />
      </Fade>
    );
  }
}

Step7_01.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func
};

Step7_01.defaultProps = {};

export default Step7_01;
