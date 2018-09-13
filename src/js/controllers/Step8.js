/******* TODO *********/

import React from 'react';
import { Link } from 'react-router-dom';

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import BlocStepTopContent from '../views/BlocStepTopContent';
import Fade from '../transitions/Fade';
import BlocStep from '../views/BlocStep';
import ButtonPrimary from '../views/UI/ButtonPrimary';
import BlocSpacer from '../views/BlocSpacer';
import BlocQuiz from '../views/BlocQuiz';
import BlocSubMenu2 from '../views/BlocSubMenu2';
import BlocDescription from '../views/BlocDescription';
import BlocEnSavoirPlusType3 from '../views/BlocEnSavoirPlusType3';
import BlocEnSavoirPlusType3QCMType1 from '../views/BlocEnSavoirPlusType3QCMType1';
import BlocEnSavoirPlusType1 from '../views/BlocEnSavoirPlusType1';
import BlocDivider from '../views/BlocDivider';

class Step8 extends React.Component {
  state = {
    show_01: false,
    show_02: false,
    show_03: false,
    show_04: false,
    showNextModule: 0,
    showQuiz: false,
  };

  componentDidMount() {
    this.props.tellAppIAmIntro(false);
  }

  changeMarketToShow = marketToShow => {
    const stateCopy = { ...this.state };

    Object.keys(stateCopy).forEach(stateAction => {
      stateAction === marketToShow ? (stateCopy[`${stateAction}`] = true) : (stateCopy[`${stateAction}`] = false);
    });
    this.setState(stateCopy);
  };

  handleShowQuiz = e => {
    Object.keys(this.state).forEach(key => {
      this.setState({ [key]: false });
    });
    this.setState({ showQuiz: true });
  };

  render() {
    const { show_01, show_02, show_03, show_04, /*showNextModule,*/ showQuiz } = this.state;

    /*const mainThread = !show_01 && !show_02 && !show_03 && !show_04;*/

    const isStep8 = this.props.match.path === '/step8';

    // const stepInStep0 = showNextModule > 0;
    // const stepInStep1 = showNextModule > 1;
    /*const stepInStep6 = showNextModule > 2;*/

    return (
      <Fade classProps="step step8" in={isStep8}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step8 = context.state.step8;
            if (!showQuiz) {
              return (
                <React.Fragment>
                  <BlocStep step={step8.linkStep} />
                  <BlocStepTopContent step={step8} in={isStep8} scrollIntoView={isStep8} />
                  <BlocSubMenu2 step={step8} in={isStep8} {...step8.module_02} action={this.changeMarketToShow} />
                  <BlocDescription
                    padding={30}
                    in={isStep8 && show_01}
                    scrollIntoView={isStep8 && show_01}
                    {...step8.module_03.module_03_01}
                  />
                  <BlocEnSavoirPlusType3
                    module="step8__module_03_02"
                    in={isStep8 && show_01}
                    {...step8.module_03.module_03_02}
                  />
                  <BlocDivider in={isStep8 && show_01} margins />
                  <BlocEnSavoirPlusType3QCMType1
                    module="step8__module_03_03"
                    in={isStep8 && show_01}
                    {...step8.module_03.module_03_03}
                  />
                  <BlocDivider in={isStep8 && show_01} margins />
                  <BlocEnSavoirPlusType1 in={isStep8 && show_01} {...step8.module_03.module_03_04} />
                  <BlocDescription
                    padding={30}
                    in={isStep8 && show_02}
                    scrollIntoView={isStep8 && show_02}
                    {...step8.module_04.module_04_01}
                  />
                  <BlocEnSavoirPlusType3QCMType1
                    module="step8__module_04_02"
                    in={isStep8 && show_02}
                    {...step8.module_04.module_04_02}
                  />
                  <BlocEnSavoirPlusType1 in={isStep8 && show_02} {...step8.module_04.module_04_03} />
                  <BlocDescription
                    padding={30}
                    in={isStep8 && show_03}
                    scrollIntoView={isStep8 && show_03}
                    {...step8.module_05.module_05_01}
                  />
                  <BlocEnSavoirPlusType1 in={isStep8 && show_03} {...step8.module_05.module_05_02} />
                  <BlocEnSavoirPlusType3QCMType1
                    module="step8__module_05_03"
                    in={isStep8 && show_03}
                    {...step8.module_05.module_05_03}
                  />
                  <BlocDescription
                    padding={30}
                    in={isStep8 && show_04}
                    scrollIntoView={isStep8 && show_04}
                    {...step8.module_06.module_06_01}
                  />
                  {(show_01 || show_02 || show_03 || show_04) && (
                    <div className="step8__synthese step__synthese bloc">
                      <BlocSpacer />
                      {(show_01 || show_02 || show_03) && <span className="bloc__name">{step8.module_07.name}</span>}
                      <BlocDescription
                        in={show_01}
                        modulType={step8.module_07.modulType}
                        description={step8.module_07.description_1}
                      />
                      <BlocDescription
                        in={show_02}
                        modulType={step8.module_07.modulType}
                        description={step8.module_07.description_2}
                      />
                      <BlocDescription
                        in={show_03}
                        modulType={step8.module_07.modulType}
                        description={step8.module_07.description_3}
                      />
                      <BlocSubMenu2
                        {...step8.module_02}
                        in={show_01 || show_02 || show_03}
                        action={this.changeMarketToShow}
                        noDescription
                      />
                      <BlocSpacer />
                      <ButtonPrimary
                        minWidth
                        name={step8.module_07.button_1}
                        onClick={this.handleShowQuiz}
                        classProps="button-synthese"
                      />
                      <Link to="#" className="button-link">
                        <ButtonPrimary minWidth name={step8.module_07.button_2} />
                      </Link>
                    </div>
                  )}
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <BlocStep step={step8.linkStep} />
                  <BlocSpacer />
                  <BlocQuiz in {...step8.module_08} scrollIntoView />
                </React.Fragment>
              );
            }
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step8.propTypes = {};

Step8.defaultProps = {};

export default Step8;
