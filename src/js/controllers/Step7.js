import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DataContext } from '../model/DataProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../components/BlocStep';
import BlocStepTopContent from '../components/BlocStepTopContent';
import BlocVideo from '../components/BlocVideo';
import BlocDivider from '../components/BlocDivider';
import BlocSpacer from '../components/BlocSpacer';
import BlocSubMenu1 from '../components/BlocSubMenu1';
import Step703 from './Step703';
import Step701 from './Step701';
import Step702 from './Step702';
import ButtonPrimary from '../components/UI/ButtonPrimary';
import BlocDescription from '../components/BlocDescription';
import BlocQuiz from '../components/BlocQuiz';
import { scrollIntoView as scrollItemIntoView } from '../transitions/transitionUtils';

class Step7 extends React.Component {
  state = {
    show_01: false,
    show_02: false,
    show_03: false,
    showSynthese: false,
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
    const { show_01, show_02, show_03, showSynthese, showQuiz } = this.state;

    const isStep7 = this.props.match.path === '/step7';

    if ((show_01 || show_02 || show_03) && showSynthese) {
      scrollItemIntoView(this.synthese);
    }

    return (
      <Fade classProps="step step7" in={isStep7}>
        <DataContext.Consumer>
          {context => {
            const step7 = context.state.step7;
            if (!showQuiz) {
              return (
                <React.Fragment>
                  <BlocStep step={step7.linkStep} />
                  <BlocStepTopContent step={step7} in={isStep7} scrollIntoView={isStep7} />
                  <BlocDivider in={isStep7} />
                  <BlocVideo in={isStep7} {...step7.module_02} />
                  <BlocSubMenu1 {...step7.module_03} in={isStep7} action={this.changeMarketToShow} />
                  <Step701 in={show_01} context={step7} endOfModules={this.handleShowSynthese} />
                  <Step702 in={show_02} context={step7} endOfModules={this.handleShowSynthese} />
                  <Step703 in={show_03} context={step7} endOfModules={this.handleShowSynthese} />

                  {isStep7 && (
                    <div className="step7__synthese step__synthese bloc">
                      <BlocSpacer />
                      {(show_01 || show_02 || show_03) && (
                        <span ref={syn => (this.synthese = syn)} className="bloc__name">
                          {step7.module_07.name}
                        </span>
                      )}
                      <BlocDescription
                        in={show_01}
                        // scrollIntoView={showSynthese && show_01}
                        modulType={step7.module_07.modulType}
                        description={step7.module_07.description_1}
                      />
                      <BlocDescription
                        in={show_02}
                        // scrollIntoView={showSynthese && show_02}
                        modulType={step7.module_07.modulType}
                        description={step7.module_07.description_2}
                      />
                      <BlocDescription
                        in={show_03}
                        // scrollIntoView={showSynthese && show_03}
                        modulType={step7.module_07.modulType}
                        description={step7.module_07.description_3}
                      />
                      <BlocSubMenu1
                        in={show_01 || show_02 || show_03}
                        {...step7.module_03}
                        action={this.changeMarketToShow}
                        noDescription
                      />
                      <BlocSpacer />
                      <ButtonPrimary
                        minWidth
                        name={step7.module_07.button_1}
                        onClick={this.handleShowQuiz}
                        classProps="button-synthese"
                      />
                      <Link to="#" className="button-link">
                        <ButtonPrimary minWidth name={step7.module_07.button_2} />
                      </Link>
                    </div>
                  )}
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <BlocStep step={step7.linkStep} />
                  <BlocSpacer />
                  <BlocVideo in {...step7.module_08} scrollIntoView />
                  <BlocDivider in />
                  <BlocQuiz in {...step7.module_09} />
                </React.Fragment>
              );
            }
          }}
        </DataContext.Consumer>
      </Fade>
    );
  }
}

Step7.propTypes = {
  in: PropTypes.bool,
};

Step7.defaultProps = {
  in: false,
};

export default Step7;
