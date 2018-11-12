/******* TODO *********/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DataContext } from '../model/DataProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../components/BlocStep';
import BlocStepTopContent from '../components/BlocStepTopContent';
import BlocEnSavoirPlusType1 from '../components/BlocEnSavoirPlusType1';
import BlocVideo from '../components/BlocVideo';
import BlocText from '../components/BlocText';
import BlocQuiz from '../components/BlocQuiz';
import BlocDivider from '../components/BlocDivider';
import BlocSpacer from '../components/BlocSpacer';
import BlocSubMenu1 from '../components/BlocSubMenu1';
import BlocQCMType2 from '../components/BlocQCMType2';
import ButtonPrimary from '../components/UI/ButtonPrimary';
import Step201 from './Step201';
import Step202 from './Step202';
import Step203 from './Step203';
import Step204 from './Step204';
import moduleTypes from '../model/static/moduleTypes';

class Step2 extends React.Component {
  state = {
    show_01: false,
    show_02: false,
    show_03: false,
    show_04: false,
    showNextModule: 0,
    showSynthese: false,
    showQuiz: false,
  };

  componentDidMount() {
    this.props.tellAppIAmIntro(false);
  }

  handleShowNextModule = module => {
    if (module === moduleTypes.blocQCMType2) {
      this.setState({ showNextModule: 1 });
    }
  };

  changeMarketToShow = marketToShow => {
    this.setState({
      show_01: false,
      show_02: false,
      show_03: false,
      show_04: false,
      [marketToShow]: true,
    });
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
    const { show_01, show_02, show_03, show_04, showSynthese, showQuiz /*showNextModule*/ } = this.state;

    // const mainThread = !show_01 && !show_02 && !show_03 && !show_04;

    const isStep2 = this.props.match.path === '/step2';

    // const stepInStep0 = showNextModule === 1;
    /*const stepInStep1 = showNextModule > 1;
    const stepInStep2 = showNextModule > 2;*/

    return (
      <Fade classProps="step step2" in={isStep2} component="Step2">
        <DataContext.Consumer>
          {context => {
            const step2 = context.state.step2;
            if (!showQuiz) {
              return (
                <React.Fragment>
                  <BlocStep step={step2.linkStep} />
                  <BlocStepTopContent
                    in={isStep2}
                    scrollIntoView={isStep2}
                    step={step2} /*videoInIframe={!mainThread}*/
                  />
                  <BlocDivider in={isStep2 /* && mainThread*/} />
                  <BlocEnSavoirPlusType1 in={isStep2 /* && mainThread*/} {...step2.module_02} />
                  <BlocDivider in={isStep2 /* && mainThread*/} noMarginTop />
                  <BlocVideo in={isStep2 /* && mainThread*/} {...step2.module_03} />
                  <BlocDivider in={isStep2 /* && mainThread*/} />
                  <BlocQCMType2
                    in={isStep2 /* && mainThread*/}
                    {...step2.module_04}
                    gameIsFinished={this.handleShowNextModule}
                  />
                  <BlocDivider in={isStep2 /* && mainThread*/} />
                  <BlocVideo
                    in={isStep2 /* && mainThread*/}
                    // in={stepInStep0 && mainThread}
                    // scrollIntoView={stepInStep0}
                    {...step2.module_05}
                  />
                  <BlocSpacer />
                  <BlocSubMenu1
                    {...step2.module_06}
                    in={isStep2 /* && mainThread*/}
                    // in={stepInStep0 && mainThread}
                    action={this.changeMarketToShow}
                  />
                  <BlocSpacer />
                  <Step201 in={show_01} context={step2} endOfModules={this.handleShowSynthese} />
                  <Step202 in={show_02} context={step2} endOfModules={this.handleShowSynthese} />
                  <Step203 in={show_03} context={step2} endOfModules={this.handleShowSynthese} />
                  <Step204 in={show_04} context={step2} endOfModules={this.handleShowSynthese} />

                  {(showSynthese || show_01 || show_02 || show_03 || show_04) && (
                    <div className="step2__synthese step__synthese bloc">
                      <BlocSubMenu1
                        {...step2.module_06}
                        in={showSynthese || show_01 || show_02 || show_03 || show_04}
                        // scrollIntoView={showSynthese}
                        action={this.changeMarketToShow}
                        noDescription
                      />
                      <BlocSpacer />
                      <ButtonPrimary
                        minWidth
                        name={step2.module_11.button_1}
                        onClick={this.handleShowQuiz}
                        classProps="button-synthese"
                      />
                      <Link to="#" className="button-link">
                        <ButtonPrimary minWidth name={step2.module_11.button_2} />
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
        </DataContext.Consumer>
      </Fade>
    );
  }
}

Step2.propTypes = {
  in: PropTypes.bool,
};

Step2.defaultProps = {
  in: false,
};

export default Step2;
