/******* TODO *********/

import React from 'react';
/*import PropTypes from 'prop-types';*/

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import BlocStepTopContent from '../views/BlocStepTopContent';
import Fade from '../transitions/Fade';

class Step2 extends React.Component {
  state = {
    showNextModule: 0,
    showSynthese: false,
    showQuiz: false
  };

  render() {
    return (
      <Fade classProps="step step2" in>
        <GlobalInfosContext.Consumer>
          {context => {
            const step2 = context.state.step2;
            if (!showQuiz) {
              return (
                <React.Fragment>
                  <BlocStepTopContent in step={step2} videoInIframe />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  {/*<BlocDivider in />
                  <BlocQuiz in {...step1.module_12} />*/}
                </React.Fragment>
              );
            }
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step2.propTypes = {};

Step2.defaultProps = {};

export default Step2;
