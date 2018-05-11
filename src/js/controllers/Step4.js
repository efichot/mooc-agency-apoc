/******* TODO *********/

import React from 'react';
/*import PropTypes from 'prop-types';*/

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocLink from '../views/BlocLink';
import BlocDragAndDropType2 from '../views/BlocDragAndDropType2';
import Fade from '../transitions/Fade';

class Step4 extends React.Component {
  state = {
    showNextModule: 1
  };

  handleShowNextModule = e => {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
  };

  render() {
    const isStep4 = this.props.match.path === '/step4';

    const { showNextModule } = this.state;

    const stepInStep1 = showNextModule > 0;

    return (
      <Fade classProps="step step4" in={isStep4}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step4 = context.state.step4;
            return (
              <React.Fragment>
                <BlocStepTopContent step={step4} in={isStep4} />
                <BlocLink
                  in={isStep4}
                  {...step4.module_02}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_03}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_04}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_05}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_06}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_07}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_08}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_09}
                  onClick={this.handleShowNextModule}
                />
                <BlocLink
                  in={stepInStep1}
                  {...step4.module_10}
                  onClick={this.handleShowNextModule}
                />
                <BlocDragAndDropType2
                  in={stepInStep1}
                  {...step4.module_11}
                  onClick={this.handleShowNextModule}
                />
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
