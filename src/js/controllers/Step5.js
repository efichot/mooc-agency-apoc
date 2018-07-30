/******* TODO *********/

import React from 'react';
/*import PropTypes from 'prop-types';*/

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../views/BlocStep';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocCardGameType1 from '../views/BlocCardGameType1';
import BlocCardGameType2 from '../views/BlocCardGameType2';
import BlocDivider from '../views/BlocDivider';

class Step5 extends React.Component {
  state = {
    showNextModule: 0,
  };

  handleShowNextModule = e => {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
  };

  handleGameIsFinished = () => {
    return;
  };

  render() {
    const isStep5 = this.props.match.path === '/step5';

    // const { showNextModule } = this.state;

    // const stepInStep1 = showNextModule > 0;

    return (
      <Fade classProps="step step5" in={isStep5}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step5 = context.state.step5;
            return (
              <React.Fragment>
                <BlocStep step={step5.linkStep} />
                <BlocStepTopContent step={step5} in={isStep5} scrollIntoView={isStep5} />
                <BlocDivider in={isStep5} />
                <BlocCardGameType1 in={isStep5} {...step5.module_02} gameIsFinished={this.handleShowNextModule} />
                <BlocDivider in={isStep5} />
                <BlocCardGameType2 in={isStep5} {...step5.module_03} gameIsFinished={this.handleShowNextModule} />
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}
Step5.propTypes = {};

Step5.defaultProps = {};

export default Step5;
