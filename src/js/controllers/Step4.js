/******* TODO *********/

import React from 'react';
/*import PropTypes from 'prop-types';*/

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../views/BlocStep';
// import BlocSpacer from '../views/BlocSpacer';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocLink from '../views/BlocLink';
import BlocQuiz from '../views/BlocQuiz';
import BlocDragAndDropType2 from '../views/BlocDragAndDropType2';

class Step4 extends React.Component {
  state = {
    showLinks: false,
  };

  componentDidMount() {
    this.props.tellAppIAmIntro(false);
  }

  handleShowLinks = e => {
    this.setState({ showLinks: !this.state.showLinks });
  };

  handleGameIsFinished = () => {
    return;
  };

  render() {
    const isStep4 = this.props.match.path === '/step4';

    const { showLinks } = this.state;

    return (
      <Fade classProps="step step4" in={isStep4}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step4 = context.state.step4;
            return (
              <React.Fragment>
                <BlocStep step={step4.linkStep} />
                <BlocStepTopContent step={step4} in={isStep4} scrollIntoView={isStep4} />
                <BlocLink in={isStep4} {...step4.module_02} onClick={this.handleShowLinks} />
                <BlocLink in={showLinks} scrollIntoView={showLinks} {...step4.module_03} />
                <BlocLink in={showLinks} {...step4.module_04} />
                <BlocLink in={showLinks} {...step4.module_05} />
                <BlocLink in={showLinks} {...step4.module_06} />
                <BlocLink in={showLinks} {...step4.module_07} />
                <BlocLink in={showLinks} {...step4.module_08} />
                {/*
                <BlocLink in={showLinks} {...step4.module_09} />
                <BlocLink in={showLinks} {...step4.module_10} />
                */}
                <BlocDragAndDropType2 in={isStep4} {...step4.module_11} gameIsFinished={this.handleGameIsFinished} />
                <BlocQuiz in={isStep4} {...step4.module_12} />
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step4.propTypes = {};

Step4.defaultProps = {};

export default Step4;
