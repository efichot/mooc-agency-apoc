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
    return (
      <Fade classProps="step step6">
        <GlobalInfosContext.Consumer>
          {context => {
            const step6 = context.state.step6;
            return (
              <React.Fragment>
                <BlocStepTopContent step={step6} />
                {/*<iframe
                                  title="iframe-step6-1"
                                  style={{
                                    display: 'block',
                                    margin: 'auto',
                                    marginBottom: '0px',
                                    border: 'none',
                                    marginLeft: '0px'
                                  }}
                                  width="709"
                                  height="4500"
                                  src={`${
                                    process.env.REACT_APP_DAVIS_URL
                                  }APOCamundi/chapFolder/etape2/etape2/index.html`}
                                  id="frame1index"
                                  align="middle"
                                  scrolling="no"
                                />*/}
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
