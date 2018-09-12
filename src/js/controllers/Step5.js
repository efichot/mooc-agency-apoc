/******* TODO *********/

import React from 'react';
import { Link } from 'react-router-dom';

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../views/BlocStep';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocCardGameType1 from '../views/BlocCardGameType1';
import BlocCardGameType2 from '../views/BlocCardGameType2';
import BlocCardGameType3 from '../views/BlocCardGameType3';
import BlocCardGameType4 from '../views/BlocCardGameType4';
import BlocDivider from '../views/BlocDivider';
import BlocSpacer from '../views/BlocSpacer';
import BlocQuiz from '../views/BlocQuiz';
import ButtonPrimary from '../views/UI/ButtonPrimary';
import moduleTypes from '../model/static/moduleTypes';

class Step5 extends React.Component {
  state = {
    showNextModule: 0,
    showSynthese: false,
    showQuiz: false,
  };

  componentDidMount() {
    this.props.tellAppIAmIntro(false);
  }

  handleShowNextModule = module => {
    if (module === moduleTypes.blocCardGameType1) {
      this.setState({ showNextModule: 1 });
    } else if (module === moduleTypes.blocCardGameType2) {
      this.setState({ showNextModule: 2 });
    } else if (module === moduleTypes.blocCardGameType3) {
      this.setState({ showNextModule: 3 });
    } else if (module === moduleTypes.blocCardGameType4) {
      this.setState({ showNextModule: 4 });
    }
  };

  handleShowSynthese = () => {
    this.setState({ showSynthese: true });
  };

  handleShowQuiz = e => {
    Object.keys(this.state).forEach(key => {
      this.setState({ [key]: false });
    });
    this.setState({ showQuiz: true });
  };

  render() {
    const isStep5 = this.props.match.path === '/step5';

    const { showNextModule, /*showSynthese,*/ showQuiz } = this.state;

    const stepInStep1 = showNextModule === 1;
    const stepInStep2 = showNextModule === 2;
    const stepInStep3 = showNextModule === 3;

    return (
      <Fade classProps="step step5" in={isStep5}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step5 = context.state.step5;
            if (!showQuiz) {
              return (
                <React.Fragment>
                  <BlocStep step={step5.linkStep} />
                  <BlocStepTopContent step={step5} in={isStep5} scrollIntoView={isStep5} />
                  <BlocDivider in={isStep5} />
                  <BlocCardGameType1
                    in={isStep5}
                    // scrollIntoView={isStep5}
                    {...step5.module_02}
                    gameIsFinished={this.handleShowNextModule}
                  />
                  <BlocDivider in={isStep5} />
                  <BlocCardGameType2
                    in={isStep5}
                    scrollIntoView={stepInStep1}
                    {...step5.module_03}
                    gameIsFinished={this.handleShowNextModule}
                  />
                  <BlocDivider in={isStep5} />
                  <BlocCardGameType3
                    in={isStep5}
                    scrollIntoView={stepInStep2}
                    {...step5.module_04}
                    gameIsFinished={this.handleShowNextModule}
                  />
                  <BlocDivider in={isStep5} />
                  <BlocCardGameType4
                    in={isStep5}
                    scrollIntoView={stepInStep3}
                    schema={{ ...step5.module_06 }}
                    {...step5.module_05}
                    gameIsFinished={this.handleShowSynthese}
                  />
                  {isStep5 && (
                    <div className="step5__synthese step__synthese bloc">
                      <BlocSpacer />
                      <ButtonPrimary
                        minWidth
                        name={step5.module_07.button_1}
                        onClick={this.handleShowQuiz}
                        classProps="button-synthese"
                      />
                      <Link to="#" className="button-link">
                        <ButtonPrimary minWidth name={step5.module_07.button_2} />
                      </Link>
                    </div>
                  )}
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <BlocQuiz in {...step5.module_08} scrollIntoView />
                </React.Fragment>
              );
            }
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}
Step5.propTypes = {};

Step5.defaultProps = {};

export default Step5;
