/******* TODO *********/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../views/BlocStep';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocText from '../views/BlocText';
import BlocQuiz from '../views/BlocQuiz';
import BlocDivider from '../views/BlocDivider';
import BlocSpacer from '../views/BlocSpacer';
import BlocSubMenu1 from '../views/BlocSubMenu1';
import BlocCardsType1 from '../views/BlocCardsType1';
import BlocQCMType4 from '../views/BlocQCMType4';
import ButtonPrimary from '../views/UI/ButtonPrimary';

class Step6 extends React.Component {
  state = {
    show_01: false,
    show_02: false,
    show_03: false,
    show_04: false,
    /*showNextModule: 0,*/
    showSynthese: false,
    showQuiz: false,
    reset: false,
    show_01_selectedRow: undefined
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
    this.setState({ reset: true });
  };

  handleShowSynthese = bool => {
    this.setState({ showSynthese: bool });
    this.setState({ reset: false });
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
      // show_02,
      // show_03,
      // show_04,
      showSynthese,
      showQuiz,
      show_01_selectedRow
    } = this.state;

    /*const mainThread = !show_01 && !show_02 && !show_03 && !show_04;*/

    const isStep6 = this.props.match.path === '/step6';

    /*const stepInStep0 = showNextModule > 0;*/
    /*const stepInStep1 = showNextModule > 1;
    const stepInStep6 = showNextModule > 2;*/

    return (
      <Fade classProps="step step6" in={isStep6}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step6 = context.state.step6;
            if (!showQuiz) {
              return (
                <React.Fragment>
                  <BlocStep step={step6.linkStep} />
                  <BlocStepTopContent
                    in={isStep6}
                    step={step6}
                    scrollIntoView={isStep6}
                  />
                  <BlocSubMenu1
                    {...step6.module_02}
                    in={isStep6}
                    action={this.changeMarketToShow}
                    reset={this.state.reset}
                  />
                  <BlocCardsType1
                    {...step6.module_03_01}
                    in={show_01}
                    scrollIntoView={show_01}
                    selectedRow={index =>
                      this.setState({ show_01_selectedRow: index })
                    }
                  />
                  <BlocDivider
                    in={
                      show_01 && show_01_selectedRow && show_01_selectedRow > 0
                    }
                  />
                  <BlocQCMType4
                    {...step6.module_03_02}
                    in={
                      show_01 && show_01_selectedRow && show_01_selectedRow > 0
                    }
                    scrollIntoView={
                      show_01 && show_01_selectedRow && show_01_selectedRow > 0
                    }
                    selectedRow={show_01_selectedRow || 0}
                  />
                  {showSynthese && (
                    <div className="step6__synthese step__synthese">
                      <BlocSubMenu1
                        {...step6.module_02}
                        in={showSynthese}
                        scrollIntoView={showSynthese}
                        action={this.changeMarketToShow}
                        noDescription
                      />
                      <Link to="/step4" className="button">
                        <ButtonPrimary
                          name={step6.module_07.button_1}
                          enableClick
                        />
                      </Link>
                      <Link to="#" className="button">
                        <ButtonPrimary name={step6.module_07.button_2} />
                      </Link>
                    </div>
                  )}
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <BlocStep step={step6.linkStep} />
                  <BlocSpacer />
                  <BlocText in {...step6.module_12} scrollIntoView />
                  <BlocDivider in />
                  <BlocQuiz in {...step6.module_13} />
                </React.Fragment>
              );
            }
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step6.propTypes = {
  in: PropTypes.bool
};

Step6.defaultProps = {
  in: false
};

export default Step6;
