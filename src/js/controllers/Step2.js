import React from 'react';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import BlocStepTopContent from '../views/BlocStepTopContent';

//import PropTypes from 'prop-types';

export default class Step2 extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <div className="">
        <GlobalInfosContext.Consumer>
          {context => {
            const step2 = context.state.step2;
            return (
              <React.Fragment>
                <BlocStepTopContent step={step2} videoInIframe />
                <iframe
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
                />
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </div>
    );
  }
}

Step2.propTypes = {};
