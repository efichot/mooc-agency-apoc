/******* TODO *********/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../views/BlocStep';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocEnSavoirPlusType1 from '../views/BlocEnSavoirPlusType1';
import BlocVideo from '../views/BlocVideo';
import BlocText from '../views/BlocText';
import BlocQuiz from '../views/BlocQuiz';
import BlocDivider from '../views/BlocDivider';
import BlocSpacer from '../views/BlocSpacer';
import BlocSubMenu1 from '../views/BlocSubMenu1';
import BlocQCMType2 from '../views/BlocQCMType2';
import ButtonPrimary from '../views/UI/ButtonPrimary';
import Step201 from './Step201';
import Step202 from './Step202';
import Step203 from './Step203';
import Step204 from './Step204';

class Step2 extends React.Component {
  state = {
    show_01: false,
    show_02: false,
    show_03: false,
    show_04: true,
    showNextModule: 0,
    showSynthese: false,
    showQuiz: false
  };

  handleShowNextModule = async module => {
    await this.setState({ showNextModule: this.state.showNextModule + 1 });
    if (this.state.showNextModule > 2) {
      this.setState({ showSynthese: true });
    }
  };

  changeMarketToShow = marketToShow => {
    const stateCopy = { ...this.state };

    Object.keys(stateCopy).forEach(stateAction => {
      stateAction === marketToShow
        ? (stateCopy[`${stateAction}`] = true)
        : (stateCopy[`${stateAction}`] = false);
    });
    this.setState(stateCopy);
  };

  handleShowSynthese = bool => {
    this.setState({ showSynthese: bool });
  };

  handleShowQuiz = e => {
    Object.keys(this.state).forEach(key => {
      this.setState({ [key]: false });
    });
    this.setState({ showQuiz: true });
  };

  render() {
    const {
      show_01,
      show_02,
      show_03,
      show_04,
      showSynthese,
      showQuiz,
      showNextModule
    } = this.state;

    const mainThread = !show_01 && !show_02 && !show_03 && !show_04;

    const isStep2 = this.props.match.path === '/step2';

    const stepInStep0 = showNextModule > 0;
    /*const stepInStep1 = showNextModule > 1;
    const stepInStep2 = showNextModule > 2;*/

    return (
      <Fade classProps="step step2" in={isStep2}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step2 = context.state.step2;
            if (!showQuiz) {
              return (
                <React.Fragment>
                  <BlocStep step={step2.linkStep} />
                  <BlocStepTopContent
                    in={isStep2}
                    scrollIntoView={isStep2}
                    step={step2}
                    videoInIframe={!mainThread}
                  />
                  <BlocEnSavoirPlusType1
                    in={isStep2 && mainThread}
                    {...step2.module_02}
                    margins
                  />
                  <BlocDivider in={isStep2 && mainThread} noMarginTop />
                  <BlocVideo in={isStep2 && mainThread} {...step2.module_03} />
                  <BlocDivider in={isStep2 && mainThread} />
                  <BlocQCMType2
                    in={isStep2 && mainThread}
                    {...step2.module_04}
                    gameIsFinished={this.handleShowNextModule}
                  />
                  <BlocSpacer />
                  <BlocVideo
                    in={stepInStep0 && mainThread}
                    scrollIntoView={stepInStep0 && mainThread}
                    {...step2.module_05}
                  />
                  <BlocSubMenu1
                    {...step2.module_06}
                    in={stepInStep0 && mainThread}
                    action={this.changeMarketToShow}
                  />
                  <Step201
                    in={show_01}
                    context={step2}
                    endOfModules={this.handleShowSynthese}
                  />
                  <Step202
                    in={show_02}
                    context={step2}
                    endOfModules={this.handleShowSynthese}
                  />
                  <Step203
                    in={show_03}
                    context={step2}
                    endOfModules={this.handleShowSynthese}
                  />
                  <Step204
                    in={show_04}
                    context={step2}
                    endOfModules={this.handleShowSynthese}
                  />

                  {showSynthese && (
                    <div className="step2__synthese step__synthese">
                      <BlocSubMenu1
                        {...step2.module_06}
                        in={showSynthese}
                        scrollIntoView={showSynthese}
                        action={this.changeMarketToShow}
                        noDescription
                      />
                      <ButtonPrimary
                        name={step2.module_11.button_1}
                        onClick={this.handleShowQuiz}
                      />
                      <Link to="#" className="button">
                        <ButtonPrimary name={step2.module_11.button_2} />
                      </Link>
                    </div>
                  )}
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <BlocStep step={step2.linkStep} />
                  <BlocSpacer />
                  <BlocText in {...step2.module_12} scrollIntoView />
                  <BlocDivider in />
                  <BlocQuiz in {...step2.module_13} />
                </React.Fragment>
              );
            }
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step2.propTypes = {
  in: PropTypes.bool
};

Step2.defaultProps = {
  in: false
};

export default Step2;
