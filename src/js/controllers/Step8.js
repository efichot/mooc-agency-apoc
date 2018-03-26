import React from 'react';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import BlocStepTopContent from '../views/BlocStepTopContent';

//import PropTypes from 'prop-types';

export default class Step8 extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <div className="step step8">
        <GlobalInfosContext.Consumer>
          {context => {
            const step8 = context.state.step8;
            return (
              <React.Fragment>
                <BlocStepTopContent step={step8} videoInIframe />
                <iframe
                  title="step8-iframe-1"
                  style={{
                    display: 'block',
                    margin: 'auto',
                    marginBottom: ' 0px',
                    border: 'none',
                    marginLeft: '0px'
                  }}
                  width="709"
                  height="5000"
                  src={`${
                    process.env.REACT_APP_DAVIS_URL
                  }APOCamundi/chapFolder/etape5/etape5/index.html`}
                  id="frame1"
                  align="middle"
                  scrolling="no"
                />
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </div>
    );
  }
}

Step8.propTypes = {};
