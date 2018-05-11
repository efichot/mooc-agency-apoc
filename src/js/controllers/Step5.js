/******* TODO *********/

import React from 'react';
/*import PropTypes from 'prop-types';*/

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import BlocStepTopContent from '../views/BlocStepTopContent';
import Fade from '../transitions/Fade';

class Step5 extends React.Component {
  state = {};

  render() {
    const isStep5 = this.props.match.path === '/step5';

    return (
      <Fade classProps={`step step5`} in={isStep5}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step5 = context.state.step5;
            return (
              <React.Fragment>
                <BlocStepTopContent in={isStep5} step={step5} />
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step5.propTypes = {};

Step5.defaultProps = {};

export default Step5;
