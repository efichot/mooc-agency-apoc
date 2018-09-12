import React from 'react';
/*import PropTypes from 'prop-types';*/
import { Link } from 'react-router-dom';

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../views/BlocStep';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocVideo from '../views/BlocVideo';
import BlocDivider from '../views/BlocDivider';
import BlocSpacer from '../views/BlocSpacer';
import BlocSimulatorsExternalLink from '../views/BlocSimulatorsExternalLink';
import BlocEnSavoirPlusType2 from '../views/BlocEnSavoirPlusType2';
import BlocPieChartPlay from '../views/BlocPieChartPlay';
import BlocText from '../views/BlocText';
import BlocDragAndDropType1 from '../views/BlocDragAndDropType1';
import ButtonPrimary from '../views/UI/ButtonPrimary';
import BlocDescription from '../views/BlocDescription';
import BlocQuiz from '../views/BlocQuiz';

import moduleTypes from '../model/static/moduleTypes';

class Step1 extends React.Component {
  state = {
    showNextModule: 0,
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

  handleShowQuiz = () => {
    Object.keys(this.state).forEach(key => {
      this.setState({ [key]: false });
    });
    this.setState({ showQuiz: true });
  };

  handleGetPieChartData = (module, data) => {
    console.log('module', module);
    const actions = data.filter(item => item.name === 'actions')[0];
    /*const obligations = data.filter(item => item.name === 'obligations')[0]*/
    const monetary = data.filter(item => item.name === 'monétaire')[0];
    const company = data.filter(item => item.name === "Titres de l'entreprise")[0];
    if (actions.value >= 60) {
      this.setState({ fund: 'Fonds Actions' });
    } else if (company.value > 30) {
      this.setState({ fund: "Fonds en titres de l'entreprise" });
    } else if (monetary.value >= 80) {
      this.setState({ fund: 'Fonds Monétaire' });
    } else if (actions.value <= 10) {
      this.setState({ fund: 'Fonds Obligataire' });
    } else {
      this.setState({ fund: 'Fonds de type mixte' });
    }
    module && this.handleShowNextModule(module);
  };

  handleShowNextModule = module => {
    if (module === moduleTypes.blocDragAndDrop1) {
      this.setState({
        showNextModule: 3,
        showSynthese: true,
      });
    } else if (module === moduleTypes.blocPicChartPlay) {
      this.setState({ showNextModule: 1 });
    } else if (module === moduleTypes.blocEnSavoirPlusType2) {
      this.setState({ showNextModule: 2 });
    }
  };

  render() {
    const { /*showSynthese,*/ showQuiz, showNextModule } = this.state;

    const isStep1 = this.props.match.path === '/step1';

    const stepInStep0 = showNextModule === 1;
    const stepInStep1 = showNextModule === 2;
    // const stepInStep2 = showNextModule === 3;

    return (
      <Fade classProps="step step1" in={isStep1}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step1 = context.state.step1;
            if (!showQuiz) {
              return (
                <React.Fragment>
                  <BlocStep step={step1.linkStep} />
                  <BlocStepTopContent in={isStep1} step={step1} scrollIntoView={isStep1} />
                  <BlocDivider in={isStep1} />
                  <BlocSimulatorsExternalLink in={isStep1} height={310} {...step1.module_02} />
                  <BlocSimulatorsExternalLink in={isStep1} height={365} {...step1.module_03} />
                  <BlocDivider in={isStep1} />
                  <BlocPieChartPlay in={isStep1} {...step1.module_04} gameIsFinished={this.handleGetPieChartData} />
                  <BlocEnSavoirPlusType2
                    in={isStep1}
                    scrollIntoView={stepInStep0}
                    margins
                    answer={this.state.fund}
                    {...step1.module_04_bis}
                    gameIsFinished={this.handleShowNextModule}
                  />
                  <BlocDivider in={isStep1} noMarginTop />
                  <BlocText in={isStep1} scrollIntoView={stepInStep1} {...step1.module_05} />
                  <BlocVideo in={isStep1} {...step1.module_06} />
                  <BlocVideo in={isStep1} {...step1.module_07} />
                  <BlocVideo in={isStep1} {...step1.module_08} />
                  <BlocDivider in={isStep1} />
                  <BlocDragAndDropType1 in={isStep1} {...step1.module_09} gameIsFinished={this.handleShowNextModule} />
                  <BlocDivider in={isStep1} />
                  <BlocVideo in={isStep1} /*scrollIntoView={stepInStep2} */ {...step1.module_10} />
                  {isStep1 && (
                    <div className="step1__synthese step__synthese bloc">
                      <BlocSpacer />
                      <span className="bloc__name">{step1.module_11.name}</span>
                      <BlocDescription
                        in={isStep1}
                        // scrollIntoView={showSynthese}
                        modulType={step1.module_11.modulType}
                        description={step1.module_11.description}
                      />
                      <BlocSpacer />
                      <ButtonPrimary
                        minWidth
                        name={step1.module_11.button_1}
                        onClick={this.handleShowQuiz}
                        classProps="button-synthese"
                      />
                      <Link to="#" className="button-link">
                        <ButtonPrimary minWidth name={step1.module_11.button_2} />
                      </Link>
                    </div>
                  )}
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <BlocStep step={step1.linkStep} />
                  <BlocSpacer />
                  <BlocQuiz in {...step1.module_12} scrollIntoView />
                </React.Fragment>
              );
            }
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step1.propTypes = {};

Step1.defaultProps = {};

export default Step1;
