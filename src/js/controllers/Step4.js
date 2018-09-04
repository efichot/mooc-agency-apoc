/******* TODO *********/

import React from 'react';
/*import PropTypes from 'prop-types';*/

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../views/BlocStep';
// import BlocSpacer from '../views/BlocSpacer';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocLink from '../views/BlocLink';
import BlocQuiz from '../views/BlocQuiz';
import BlocDragAndDropType2 from '../views/BlocDragAndDropType2';

class Step4 extends React.Component {
  state = {
    showNextModule: 0,
  };

  componentDidMount() {
    this.props.tellAppIAmIntro(false);
  }

  handleShowNextModule = e => {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
  };

  handleGameIsFinished = () => {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
  };

  render() {
    const isStep4 = this.props.match.path === '/step4';

    const { showNextModule } = this.state;

    const stepInStep1 = showNextModule > 0;
    const stepInStep2 = showNextModule > 1;

    return (
      <Fade classProps="step step4" in={isStep4}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step4 = context.state.step4;
            return (
              <React.Fragment>
                <BlocStep step={step4.linkStep} />
                <BlocStepTopContent step={step4} in={isStep4} scrollIntoView={isStep4} />
                <BlocLink in={isStep4} {...step4.module_02} onClick={this.handleShowNextModule} />
                <BlocLink in={isStep4} scrollIntoView={stepInStep1} {...step4.module_03} />
                <BlocLink in={isStep4} {...step4.module_04} />
                <BlocLink in={isStep4} {...step4.module_05} />
                <BlocLink in={isStep4} {...step4.module_06} />
                <BlocLink in={isStep4} {...step4.module_07} />
                <BlocLink in={isStep4} {...step4.module_08} />
                <BlocLink in={isStep4} {...step4.module_09} />
                <BlocLink in={isStep4} {...step4.module_10} />
                <BlocDragAndDropType2 in={isStep4} {...step4.module_11} gameIsFinished={this.handleGameIsFinished} />
                <BlocQuiz in={stepInStep2} {...step4.module_12} />
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step4.propTypes = {};

Step4.defaultProps = {};

export default Step4;
