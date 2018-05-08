import React from 'react';
/*import PropTypes from 'prop-types';*/
import { Link } from 'react-router-dom';

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocVideo from '../views/BlocVideo';
import BlocDivider from '../views/BlocDivider';
import BlocSimulatorsExternalLink from '../views/BlocSimulatorsExternalLink';
import BlocPieChartPlay from '../views/BlocPieChartPlay';
import BlocText from '../views/BlocText';
import BlocDragAndDropType1 from '../views/BlocDragAndDropType1';
import ButtonPrimary from '../views/UI/ButtonPrimary';
import BlocDescription from '../views/BlocDescription';
import BlocQuiz from '../views/BlocQuiz';

class Step1 extends React.Component {
  state = {
    showNextModule: 0,
    showSynthese: false,
    showQuiz: false
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

  handleShowQuiz = () => {
    Object.keys(this.state).forEach(key => {
      this.setState({ [key]: false });
    });
    this.setState({ showQuiz: true });
  };

  handleShowNextModule = module => {
    if (module === 'pie-chart') {
      if (this.state.showNextModule > 0) {
        return;
      }
      this.setState({ showNextModule: 1 });
      this.setState({ showSynthese: true });
    } else if (module === 'drag-and-drop') {
      if (this.state.showNextModule > 0) {
        return;
      }
      this.setState({ showNextModule: 2 });
    }
  };

  render() {
    const { showSynthese, showQuiz, showNextModule } = this.state;

    const stepInStep0 = showNextModule > 0;
    const stepInStep1 = showNextModule > 1;

    return (
      <Fade classProps="step step1" in>
        <GlobalInfosContext.Consumer>
          {context => {
            const step1 = context.state.step1;
            if (!showQuiz) {
              return (
                <React.Fragment>
                  <BlocStepTopContent in step={step1} />
                  <BlocDivider in />
                  <BlocSimulatorsExternalLink in {...step1.module_02} />
                  <BlocSimulatorsExternalLink in {...step1.module_03} />
                  <BlocDivider in />
                  <BlocPieChartPlay
                    in
                    {...step1.module_04}
                    gameIsFinished={this.handleShowNextModule}
                  />
                  <BlocDivider in={stepInStep0} />
                  <BlocText in={stepInStep0} {...step1.module_05} />
                  <BlocVideo in={stepInStep0} {...step1.module_06} />
                  <BlocVideo in={stepInStep0} {...step1.module_07} />
                  <BlocVideo in={stepInStep0} {...step1.module_08} />
                  <BlocDivider in={stepInStep0} />
                  <BlocDragAndDropType1
                    in={stepInStep0}
                    {...step1.module_09}
                    gameIsFinished={this.handleShowNextModule}
                  />
                  <BlocDivider in={stepInStep1} />
                  <BlocVideo in={stepInStep1} {...step1.module_10} />
                  {showSynthese && (
                    <div className="step1__synthese step__synthese">
                      <span className="bloc__name">{step1.module_11.name}</span>
                      <BlocDescription
                        in
                        modulType={step1.module_11.modulType}
                        description={step1.module_11.description}
                      />
                      <ButtonPrimary
                        name={step1.module_11.button_1}
                        onClick={this.handleShowQuiz}
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
                  <BlocDivider in />
                  <BlocQuiz in {...step1.module_12} />
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
