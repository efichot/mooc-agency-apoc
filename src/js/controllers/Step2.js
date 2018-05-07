/******* TODO *********/

import React from 'react';
/*import PropTypes from 'prop-types';*/

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import BlocStepTopContent from '../views/BlocStepTopContent';
import Fade from '../transitions/Fade';

class Step2 extends React.Component {
  state = {};

  render() {
    return (
      <Fade classProps={``}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step2 = context.state.step2;
            return (
              <React.Fragment>
                <BlocStepTopContent step={step2} videoInIframe />
                {/*<iframe
                  title="step2-iframe-1"
                  style={{
                    display: 'block',
                    margin: 'auto',
                    marginBottom: ' 0px',
                    border: 'none',
                    marginLeft: '0px'
                  }}
                  width="709"
                  height="10000"
                  src={`${
                    process.env.REACT_APP_DAVIS_URL
                  }APOCamundi/chapFolder/etape6/etape6/index.html`}
                  id="IndexFrame1"
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

Step2.propTypes = {};

Step2.defaultProps = {};

export default Step2;
