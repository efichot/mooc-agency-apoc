import React from 'react';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import { Link } from 'react-router-dom';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocVideo from '../views/BlocVideo';
import BlocDivider from '../views/BlocDivider';
import BlocSimulatorsExternalLink from '../views/BlocSimulatorsExternalLink';
import BlocPieChartPlay from '../views/BlocPieChartPlay';
import BlocText from '../views/BlocText';
import BlocDragAndDropType1 from '../views/BlocDragAndDropType1';
/*import Step103 from './Step103';
import Step101 from './Step101';
import Step102 from './Step102';*/
import ButtonPrimary from '../views/UI/ButtonPrimary';
import BlocDescription from '../views/BlocDescription';
import BlocQuiz from '../views/BlocQuiz';
//import PropTypes from 'prop-types';

export default class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNextModule: 1,
      showSynthese: false,
      showQuiz: false
    };

    this.changeMarketToShow = this.changeMarketToShow.bind(this);
    this.handleShowSynthese = this.handleShowSynthese.bind(this);
    this.handleShowQuiz = this.handleShowQuiz.bind(this);
    this.handleShowNextModule = this.handleShowNextModule.bind(this);
  }

  changeMarketToShow(marketToShow) {
    const stateCopy = { ...this.state };

    Object.keys(stateCopy).forEach(stateAction => {
      stateAction === marketToShow
        ? (stateCopy[`${stateAction}`] = true)
        : (stateCopy[`${stateAction}`] = false);
    });
    this.setState(stateCopy);
  }

  handleShowSynthese(bool) {
    this.setState({ showSynthese: bool });
  }

  handleShowQuiz() {
    Object.keys(this.state).forEach(key => {
      this.setState({ [key]: false });
    });
    this.setState({ showQuiz: true });
  }

  handleShowNextModule() {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
    if (this.state.showNextModule > 0) {
      this.handleShowSynthese(true);
    }
  }

  render() {
    return (
      <div className="step step1">
        <GlobalInfosContext.Consumer>
          {context => {
            const step1 = context.state.step1;
            if (!this.state.showQuiz) {
              return (
                <React.Fragment>
                  <BlocStepTopContent step={step1} />
                  <BlocDivider />
                  <BlocSimulatorsExternalLink context={step1.module_02} />
                  <BlocSimulatorsExternalLink context={step1.module_03} />
                  <BlocDivider />
                  <BlocPieChartPlay context={step1.module_04} />
                  {this.state.showNextModule > 0 && (
                    <React.Fragment>
                      <BlocDivider />
                      <BlocText context={step1.module_05} />
                      <BlocVideo context={step1.module_06} />
                      <BlocVideo context={step1.module_07} />
                      <BlocVideo context={step1.module_08} />
                      <BlocDivider />
                      <BlocDragAndDropType1
                        context={step1.module_09}
                        gameIsFinished={this.handleShowNextModule}
                      />
                    </React.Fragment>
                  )}
                  {this.state.showNextModule > 1 && (
                    <React.Fragment>
                      <BlocDivider />
                      <BlocVideo context={step1.module_10} />
                    </React.Fragment>
                  )}
                  {this.state.showSynthese && (
                    <div className="step1__synthese step__synthese">
                      <span className="bloc__name">{step1.module_11.name}</span>
                      <BlocDescription
                        description={step1.module_11.description}
                      />
                      <ButtonPrimary
                        name={step1.module_11.button_1}
                        onclick={this.handleShowQuiz}
                      />
                      <Link to="#" className="button">
                        <ButtonPrimary name={step1.module_11.button_2} />
                      </Link>
                    </div>
                  )}
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <BlocDivider />
                  <BlocQuiz context={step1.module_12} />
                </React.Fragment>
              );
            }
          }}
        </GlobalInfosContext.Consumer>
      </div>
    );
  }
}

Step1.propTypes = {};
