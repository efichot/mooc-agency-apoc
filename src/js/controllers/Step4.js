/******* TODO *********/

import React from 'react';
/*import PropTypes from 'prop-types';*/

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../views/BlocStep';
import BlocSpacer from '../views/BlocSpacer';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocLink from '../views/BlocLink';
import BlocQuiz from '../views/BlocQuiz';
import BlocDragAndDropType2 from '../views/BlocDragAndDropType2';

class Step4 extends React.Component {
  state = {
    showNextModule: 0
  };

  handleShowNextModule = e => {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
  };

  handleGameIsFinished = () => {
    return;
  };

  render() {
    const isStep4 = this.props.match.path === '/step4';

    const { showNextModule } = this.state;

    const stepInStep1 = showNextModule > 0;

    return (
      <Fade classProps="step step4" in={isStep4}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step4 = context.state.step4;
            return (
              <React.Fragment>
                <BlocStep step={step4.linkStep} />
                <BlocStepTopContent step={step4} in={isStep4} />
                <BlocLink
                  in={isStep4}
                  {...step4.module_02}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  scrollIntoView={stepInStep1}
                  {...step4.module_03}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_04}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_05}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_06}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_07}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_08}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_09}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_10}
                  onClick={this.handleShowNextModule}
                />
                <BlocDragAndDropType2
                  in={isStep4}
                  {...step4.module_11}
                  gameIsFinished={this.handleGameIsFinished}
                />
                <BlocQuiz in={isStep4} {...step4.module_12} />
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
