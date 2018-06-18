import React from 'react';
import PropTypes from 'prop-types';

import BlocDragAndDropType1 from '../views/BlocDragAndDropType1';
import BlocDescription from '../views/BlocDescription';
import BlocDivider from '../views/BlocDivider';
import BlocEnSavoirPlusType1 from '../views/BlocEnSavoirPlusType1';
import BlocVideo from '../views/BlocVideo';
import BlocUpAndDownType1 from '../views/BlocUpAndDownType1';
import Fade from '../transitions/Fade';

class Step7_02 extends React.Component {
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
    const step7 = this.props.context.module_05;

    const stepInStep0 = this.state.showNextModule > 0;
    const stepInStep1 = this.state.showNextModule > 1;
    const stepInStep2 = this.state.showNextModule > 2;

    return (
      <Fade in={this.props.in}>
        <BlocDescription
          in={this.props.in}
          scrollIntoView={this.props.in}
          modulType={step7.module_05_01.modulType}
          description={step7.module_05_01.description}
          padding={20}
        />
        <BlocEnSavoirPlusType1 in {...step7.module_05_02} />
        <BlocDragAndDropType1
          in={this.props.in}
          {...step7.module_05_03}
          gameIsFinished={this.handleShowNextModule}
          margins
        />
        {/*<BlocDivider in={stepInStep0} />*/}
        <BlocDragAndDropType1
          in={stepInStep0}
          scrollIntoView={stepInStep0}
          {...step7.module_05_04}
          gameIsFinished={this.handleShowNextModule}
        />
        <BlocDivider in={stepInStep1} />
        <BlocVideo
          in={stepInStep1}
          scrollIntoView={stepInStep1}
          {...step7.module_05_05}
        />
        <BlocUpAndDownType1
          in={stepInStep1}
          {...step7.module_05_06}
          gameIsFinished={this.handleShowNextModule}
          margins
        />
        <BlocUpAndDownType1
          in={stepInStep2}
          scrollIntoView={stepInStep2}
          {...step7.module_05_07}
          gameIsFinished={this.handleShowNextModule}
          noHeader
        />
      </Fade>
    );
  }
}

Step7_02.propTypes = {
  in: PropTypes.bool,
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func
};

Step7_02.defaultProps = {
  in: false
};

export default Step7_02;
