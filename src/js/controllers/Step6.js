/******* TODO *********/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../views/BlocStep';
import BlocVideo from '../views/BlocVideo';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocQuiz from '../views/BlocQuiz';
import BlocDivider from '../views/BlocDivider';
import BlocSpacer from '../views/BlocSpacer';
import BlocSubMenu1 from '../views/BlocSubMenu1';
import BlocCardsType1 from '../views/BlocCardsType1';
import BlocQCMType4 from '../views/BlocQCMType4';
import BlocEnSavoirPlusType3 from '../views/BlocEnSavoirPlusType3';
import BlocEnSavoirPlusType1 from '../views/BlocEnSavoirPlusType1';
import BlocDescription from '../views/BlocDescription';
import ButtonPrimary from '../views/UI/ButtonPrimary';

class Step6 extends React.Component {
  state = {
    show_01: false,
    show_02: false,
    show_03: true,
    show_04: false,
    showNextModule: 1,
    showSynthese: false,
    showQuiz: false,
    reset: false,
    selectedRow: 0,
  };

  componentDidMount() {
    this.props.tellAppIAmIntro(false);
  }

  handleSelectedRow = ({ selectedRow }) => {
    this.setState({ selectedRow, showNextModule: 1 });
  };

  handleShowNextModule = async module => {
    await this.setState({ showNextModule: this.state.showNextModule + 1 });
    if (this.state.showNextModule > 0) {
      this.setState({ showSynthese: true });
    }
  };

  changeMarketToShow = marketToShow => {
    const stateCopy = { ...this.state };

    Object.keys(stateCopy).forEach(stateAction => {
      stateAction === marketToShow ? (stateCopy[`${stateAction}`] = true) : (stateCopy[`${stateAction}`] = false);
    });
    this.setState({
      ...stateCopy,
      reset: true,
      showNextModule: 0,
    });

    marketToShow === 'show_04' && this.handleShowSynthese(true);
  };

  handleShow3Back = () => {
    console.log('handleShow3Back');
    this.setState({ showNextModule: this.state.showNextModule - 1, selectedRow: undefined });
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
    const { show_01, show_02, show_03, show_04, showNextModule, showSynthese, showQuiz, selectedRow } = this.state;

    /*const mainThread = !show_01 && !show_02 && !show_03 && !show_04;*/

    const isStep6 = this.props.match.path === '/step6';

    const stepInStep0 = showNextModule > 0;
    const stepInStep1 = showNextModule > 1;
    /*const stepInStep6 = showNextModule > 2;*/

    return (
      <Fade classProps="step step6" in={isStep6}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step6 = context.state.step6;
            if (!showQuiz) {
              return (
                <React.Fragment>
                  <BlocStep step={step6.linkStep} />
                  <BlocStepTopContent in={isStep6} step={step6} scrollIntoView={isStep6} />
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
                    selectedRow={this.handleSelectedRow}
                  />
                  <BlocDivider in={show_01 && stepInStep0} />
                  <BlocQCMType4
                    {...step6.module_03_02}
                    in={show_01 && stepInStep0}
                    scrollIntoView={show_01 && stepInStep0}
                    selectedRow={(show_01 && stepInStep0 && selectedRow) || 0}
                    gameIsFinished={this.handleShowNextModule}
                  />
                  <BlocDivider />
                  <BlocEnSavoirPlusType3
                    {...step6.module_03_03}
                    in={show_01 && stepInStep1}
                    // scrollIntoView={show_01 && stepInStep1}
                  />
                  <BlocCardsType1
                    {...step6.module_04_01}
                    in={show_02}
                    scrollIntoView={show_02}
                    selectedRow={this.handleSelectedRow}
                  />
                  <BlocDivider in={show_02 && stepInStep0} />
                  <BlocQCMType4
                    {...step6.module_04_02}
                    in={show_02 && stepInStep0}
                    scrollIntoView={show_02 && stepInStep0}
                    selectedRow={(show_02 && stepInStep0 && selectedRow) || 0}
                    gameIsFinished={this.handleShowNextModule}
                  />
                  <BlocDivider />
                  <BlocEnSavoirPlusType1
                    {...step6.module_04_03}
                    in={show_02 && stepInStep1}
                    // scrollIntoView={show_02 && stepInStep1}
                  />
                  <BlocCardsType1
                    {...step6.module_05_01}
                    in={show_03}
                    scrollIntoView={show_03}
                    selectedRow={this.handleSelectedRow}
                  />
                  <BlocDivider in={show_03 && stepInStep0} />
                  {selectedRow !== 2 ? (
                    <BlocQCMType4
                      {...step6.module_05_02}
                      in={show_03 && stepInStep0}
                      scrollIntoView={show_03 && stepInStep0}
                      selectedRow={(show_03 && stepInStep0 && selectedRow) || 0}
                      gameIsFinished={this.handleShowNextModule}
                    />
                  ) : (
                    <BlocVideo
                      in={show_03 && stepInStep0}
                      scrollIntoView={show_03 && stepInStep0}
                      {...step6.module_05_03}
                      onButtonClick={this.handleShow3Back}
                    />
                  )}
                  <BlocDivider />
                  <BlocEnSavoirPlusType1
                    {...step6.module_05_04}
                    in={show_03 && stepInStep1}
                    // scrollIntoView={show_03 && stepInStep1}
                  />
                  <BlocVideo in={show_04} scrollIntoView={show_04} {...step6.module_06_01} />
                  <BlocDivider />
                  <BlocEnSavoirPlusType3 {...step6.module_06_02} in={show_04} />
                  {showSynthese && (
                    <div className="step6__synthese step__synthese bloc">
                      <BlocSpacer />
                      <span className="bloc__name">{step6.module_07.name}</span>
                      <BlocDescription
                        in={showSynthese && show_01}
                        scrollIntoView={showSynthese && show_01}
                        modulType={step6.module_07.modulType}
                        description={step6.module_07.description_1}
                      />
                      <BlocDescription
                        in={showSynthese && show_02}
                        scrollIntoView={showSynthese && show_02}
                        modulType={step6.module_07.modulType}
                        description={step6.module_07.description_2}
                      />
                      <BlocDescription
                        in={showSynthese && show_03}
                        scrollIntoView={showSynthese && show_03}
                        modulType={step6.module_07.modulType}
                        description={step6.module_07.description_3}
                      />
                      <BlocDescription
                        in={showSynthese && show_04}
                        modulType={step6.module_07.modulType}
                        description={step6.module_07.description_4}
                      />
                      <BlocSubMenu1
                        {...step6.module_02}
                        in={showSynthese}
                        action={this.changeMarketToShow}
                        noDescription
                      />
                      <BlocSpacer />
                      <ButtonPrimary minWidth name={step6.module_07.button_1} onClick={this.handleShowQuiz} />
                      <Link to="#" className="button">
                        <ButtonPrimary minWidth name={step6.module_07.button_2} />
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
                  <BlocQuiz in {...step6.module_08} scrollIntoView />
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
  in: PropTypes.bool,
};

Step6.defaultProps = {
  in: false,
};

export default Step6;
