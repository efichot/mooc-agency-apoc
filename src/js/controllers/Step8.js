/******* TODO *********/

import React from 'react';
/*import PropTypes from 'prop-types';*/

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import BlocStepTopContent from '../views/BlocStepTopContent';
import Fade from '../transitions/Fade';

class Step8 extends React.Component {
  state = {};

  render() {
    const isStep8 = this.props.match.path === '/step8';

    return (
      <Fade classProps="step step8" in={isStep8}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step8 = context.state.step8;
            return (
              <React.Fragment>
                <BlocStepTopContent step={step8} in={isStep8} />
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step8.propTypes = {};

Step8.defaultProps = {};

export default Step8;
