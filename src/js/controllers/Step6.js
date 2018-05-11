/******* TODO *********/

import React from 'react';
/*import PropTypes from 'prop-types';*/

import BlocStepTopContent from '../views/BlocStepTopContent';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';

class Step6 extends React.Component {
  state = {};

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const isStep6 = this.props.match.path === '/step6';

    return (
      <Fade classProps="step step6" in={isStep6}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step6 = context.state.step6;
            return (
              <React.Fragment>
                <BlocStepTopContent step={step6} in={isStep6} />
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step6.propTypes = {};

Step6.defaultProps = {};

export default Step6;
