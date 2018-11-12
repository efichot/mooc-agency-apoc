/******* TODO *********/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DataContext } from '../model/DataProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../components/BlocStep';
import BlocVideo from '../components/BlocVideo';
import BlocStepTopContent from '../components/BlocStepTopContent';
import BlocQuiz from '../components/BlocQuiz';
import BlocDivider from '../components/BlocDivider';
import BlocSpacer from '../components/BlocSpacer';
import BlocSubMenu1 from '../components/BlocSubMenu1';
import BlocCardsType1 from '../components/BlocCardsType1';
import BlocQCMType4 from '../components/BlocQCMType4';
import BlocEnSavoirPlusType3 from '../components/BlocEnSavoirPlusType3';
import BlocEnSavoirPlusType1 from '../components/BlocEnSavoirPlusType1';
import BlocDescription from '../components/BlocDescription';
import ButtonPrimary from '../components/UI/ButtonPrimary';
import moduleTypes from '../model/static/moduleTypes';

class Step6 extends React.Component {
  state = {
    show_01: false,
    show_02: false,
    show_03: false,
    show_04: false,
    activateDerives: false,
    showNextModule: 0,
    showSynthese: true,
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

  handleShowNextModule = module => {
    if (module === moduleTypes.blocQCMType4) {
      this.setState({
        showNextModule: 2,
        showSynthese: true,
      });
      if (!this.state.activateDerives) {
        this.setState({ activateDerives: true });
      }
    }
  };

  changeMarketToShow = marketToShow => {
    const stateCopy = { ...this.state };

    Object.keys(stateCopy).forEach(stateAction => {
      if (stateAction === marketToShow) {
        stateCopy[`${stateAction}`] = true;
      } else if (stateAction === 'activateDerives') {
        stateCopy[`${stateAction}`] = stateCopy.activateDerives;
      } else {
        stateCopy[`${stateAction}`] = false;
      }
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
    this.setState({
      showSynthese: bool,
      reset: false,
    });
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
      showNextModule,
      showSynthese,
      showQuiz,
      selectedRow,
      activateDerives,
    } = this.state;

    /*const mainThread = !show_01 && !show_02 && !show_03 && !show_04;*/

    const isStep6 = this.props.match.path === '/step6';

    const stepInStep0 = showNextModule > 0;
    const stepInStep1 = showNextModule > 1;
    /*const stepInStep6 = showNextModule > 2;*/

    return (
      <Fade classProps="step step6" in={isStep6}>
        <DataContext.Consumer>
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
                    activateLastItem={activateDerives}
                  />
                  <BlocCardsType1
                    {...step6.module_03_01}
                    in={show_01}
                    scrollIntoView={show_01}
                    selectedRow={this.handleSelectedRow}
                  />
                  <BlocDivider in={show_01} />
                  <BlocQCMType4
                    {...step6.module_03_02}
                    in={show_01}
                    scrollIntoView={show_01 && stepInStep0}
                    selectedRow={(show_01 && stepInStep0 && selectedRow) || 0}
                    gameIsFinished={this.handleShowNextModule}
                  />
                  <BlocDivider in={show_01} />
                  <BlocEnSavoirPlusType3
                    {...step6.module_03_03}
                    module="step6__module_03_03"
                    in={show_01}
                    scrollIntoView={show_01 && stepInStep1}
                  />
                  <BlocCardsType1
                    {...step6.module_04_01}
                    in={show_02}
                    scrollIntoView={show_02}
                    selectedRow={this.handleSelectedRow}
                  />
                  <BlocDivider in={show_02} />
                  <BlocQCMType4
                    {...step6.module_04_02}
                    in={show_02}
                    scrollIntoView={show_02 && stepInStep0}
                    selectedRow={(show_02 && stepInStep0 && selectedRow) || 0}
                    gameIsFinished={this.handleShowNextModule}
                  />
                  <BlocDivider in={show_02} />
                  <BlocEnSavoirPlusType1 {...step6.module_04_03} in={show_02} scrollIntoView={show_02 && stepInStep1} />
                  <BlocCardsType1
                    {...step6.module_05_01}
                    in={show_03}
                    scrollIntoView={show_03}
                    selectedRow={this.handleSelectedRow}
                  />
                  <BlocDivider in={show_03} />
                  {selectedRow !== 2 ? (
                    <BlocQCMType4
                      {...step6.module_05_02}
                      in={show_03}
                      scrollIntoView={show_03 && stepInStep0}
                      selectedRow={(show_03 && stepInStep0 && selectedRow) || 0}
                      gameIsFinished={this.handleShowNextModule}
                    />
                  ) : (
                    <BlocVideo
                      in={show_03}
                      scrollIntoView={show_03 && stepInStep0}
                      {...step6.module_05_03}
                      onButtonClick={this.handleShow3Back}
                    />
                  )}
                  <BlocDivider in={show_03} />
                  <BlocEnSavoirPlusType1 {...step6.module_05_04} in={show_03} scrollIntoView={show_03 && stepInStep1} />
                  <BlocVideo in={show_04} scrollIntoView={show_04} {...step6.module_06_01} />
                  <BlocDivider />
                  <BlocEnSavoirPlusType3 {...step6.module_06_02} module="step6__module_06_02" in={show_04} />
                  {showSynthese && (
                    <div className="step6__synthese step__synthese bloc">
                      <BlocSpacer />
                      {(show_01 || show_02 || show_03 || show_04) && (
                        <span className="bloc__name">{step6.module_07.name}</span>
                      )}
                      <BlocDescription
                        in={showSynthese && show_01}
                        // scrollIntoView={showSynthese && show_01}
                        modulType={step6.module_07.modulType}
                        description={step6.module_07.description_1}
                      />
                      <BlocDescription
                        in={showSynthese && show_02}
                        // scrollIntoView={showSynthese && show_02}
                        modulType={step6.module_07.modulType}
                        description={step6.module_07.description_2}
                      />
                      <BlocDescription
                        in={showSynthese && show_03}
                        // scrollIntoView={showSynthese && show_03}
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
                        in={showSynthese && (show_01 || show_02 || show_03 || show_04)}
                        action={this.changeMarketToShow}
                        noDescription
                        activateLastItem={activateDerives}
                      />
                      <BlocSpacer />
                      <ButtonPrimary
                        minWidth
                        name={step6.module_07.button_1}
                        onClick={this.handleShowQuiz}
                        classProps="button-synthese"
                      />
                      <Link to="#" className="button-link">
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
        </DataContext.Consumer>
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
