/******* TODO *********/

import React from 'react';
/*import PropTypes from 'prop-types';*/

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import BlocStepTopContent from '../views/BlocStepTopContent';
import Fade from '../transitions/Fade';

class Step3 extends React.Component {
  state = {};

  render() {
    return (
      <Fade classProps={``}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step3 = context.state.step3;
            return (
              <React.Fragment>
                <BlocStepTopContent step={step3} />
                {/*<div
                                  style={{
                                    width: '708px',
                                    height: '300px',
                                    marginLeft: '30px',
                                    backgroundColor: '#EFEFEF',
                                    display: 'block'
                                  }}
                                  id="menu1"
                                >
                                  <iframe
                                    title="iframe-step3-2"
                                    style={{ display: 'block', border: 'none' }}
                                    width="709"
                                    height="300"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/menu.html`}
                                    id="frame1"
                                    align="middle"
                                    scrolling="no"
                                  />
                                </div>
                                <div
                                  id="scrollPoint1"
                                  style={{ width: '1px', height: '1px' }}
                                />
                
                                <div id="frameContainer" style={{ height: '746px' }}>
                                  <iframe
                                    title="iframe-step3-3"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="663"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape1/etape1/frame7/index.html`}
                                    id="acta1"
                                    align="middle"
                                    className="acta"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-4"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="400"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape1/etape1/frame7/index.html`}
                                    id="acta1b"
                                    align="middle"
                                    className="acta"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-5"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="603"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape1/etape1/frame7/index.html`}
                                    id="acta2"
                                    align="middle"
                                    className="acta"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-6"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="500"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape1/etape1/frame7/index.html`}
                                    id="acta2b"
                                    align="middle"
                                    className="acta"
                                    scrolling="no"
                                  />
                
                                  <iframe
                                    title="iframe-step3-7"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="650"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape1/etape1/frame7/index.html`}
                                    id="acta3"
                                    align="middle"
                                    className="acta"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-8"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="500"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape1/etape1/frame7/index.html`}
                                    id="acta3b"
                                    align="middle"
                                    className="acta"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-9"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="700"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape1/etape1/frame7/index.html`}
                                    id="acta4"
                                    align="middle"
                                    className="acta"
                                    scrolling="no"
                                  />
                
                                  <iframe
                                    title="iframe-step3-10"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="400"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape1/etape1/frame7/index.html`}
                                    id="acta4b"
                                    align="middle"
                                    className="acta"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-11"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="600"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape1/etape1/frame7/index.html`}
                                    id="acta5"
                                    align="middle"
                                    className="acta"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-12"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="500"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz5b.html`}
                                    id="acta5b"
                                    align="middle"
                                    className="acta"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-13"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="700"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz6.html`}
                                    id="oba1"
                                    align="middle"
                                    className="oba"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-14"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="700"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz6b.html`}
                                    id="oba1b"
                                    align="middle"
                                    className="oba"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-15"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="700"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz7.html`}
                                    id="oba2"
                                    align="middle"
                                    className="oba"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-16"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="500"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz7b.html`}
                                    id="oba2b"
                                    align="middle"
                                    className="oba"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-17"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="600"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz8.html`}
                                    id="mona1"
                                    align="middle"
                                    className="mona"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-18"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="400"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz8b.html`}
                                    id="mona1b"
                                    align="middle"
                                    className="mona"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-19"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="600"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz9.html`}
                                    id="mona2"
                                    align="middle"
                                    className="mona"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-20"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="500"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz9b.html`}
                                    id="mona2b"
                                    align="middle"
                                    className="mona"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-21"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="700"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz10.html`}
                                    id="diva1"
                                    align="middle"
                                    className="diva"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-22"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="350"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz10b.html`}
                                    id="diva1b"
                                    align="middle"
                                    className="diva"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-23"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="700"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz11.html`}
                                    id="diva2"
                                    align="middle"
                                    className="diva"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-24"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="300"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz11b.html`}
                                    id="diva2b"
                                    align="middle"
                                    className="diva"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-25"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="750"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz12.html`}
                                    id="diva3"
                                    align="middle"
                                    className="diva"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-26"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="500"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz12b.html`}
                                    id="diva3b"
                                    align="middle"
                                    className="diva"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-27"
                                    style={{
                                      display: 'none',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none'
                                    }}
                                    width="709"
                                    height="800"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz13.html`}
                                    id="diva4"
                                    align="middle"
                                    className="diva"
                                    scrolling="no"
                                  />
                                  <iframe
                                    title="iframe-step3-28"
                                    style={{
                                      display: 'block',
                                      margin: 'auto',
                                      marginBottom: '0px',
                                      border: 'none',
                                      visibility: 'hidden'
                                    }}
                                    width="709"
                                    height="500"
                                    src={`${
                                      process.env.REACT_APP_DAVIS_URL
                                    }APOCamundi/chapFolder/etape7/etape7/quiz13b.html`}
                                    id="diva4b"
                                    align="middle"
                                    className="diva"
                                    scrolling="no"
                                  />
                                </div>*/}
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step3.propTypes = {};

Step3.defaultProps = {};

export default Step3;
