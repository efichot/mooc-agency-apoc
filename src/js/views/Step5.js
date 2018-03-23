import React from 'react';
//import PropTypes from 'prop-types';
import BlocStepTopContent from '../modules/BlocStepTopContent';
import step5 from '../model/static/step5';

export default class Step5 extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <div>
        <BlocStepTopContent step={step5} />
        />
        <iframe
          title="iframe-step5-1"
          style={{
            display: 'block',
            margin: 'auto',
            marginBottom: '0px',
            border: 'none',
            marginLeft: '0px'
          }}
          width="709"
          height="881"
          src="http://51.254.222.200/arnaud_apoc/APOCamundi/chapFolder/etape1/etape1/frame1/index.html"
          id="frame1"
          align="middle"
          onmouseover="startfor1attr();"
        />
        <div
          class="gradientSpe"
          style={{
            marginLeft: '-10px',
            marginTop: '50px',
            marginBottom: '50px'
          }}
        />
        <iframe
          title="iframe-step5-2"
          style={{
            display: 'block',
            margin: 'auto',
            marginBottom: '0px',
            border: 'none',
            marginLeft: '0px'
          }}
          width="709"
          height="981"
          src="http://51.254.222.200/arnaud_apoc/APOCamundi/chapFolder/etape1/etape1/frame3/index.html"
          id="frame3"
          align="middle"
          onmouseover="startfor3attr();"
        />
        <div class="gradientSpe" style={{ marginLeft: '-10px' }} />
        <iframe
          title="iframe-step5-3"
          style={{
            display: 'block',
            margin: 'auto',
            marginBottom: '0px',
            border: 'none',
            marginLeft: '0px'
          }}
          src="http://51.254.222.200/arnaud_apoc/APOCamundi/chapFolder/etape1/etape1/frame5/index.html"
          id="frame5"
          align="middle"
          width="709"
          height="889"
          onmouseover="startfor5attr();"
        />
        <div
          class="gradientSpe"
          style={{
            marginLeft: '-10px',
            marginTop: '50px',
            marginBottom: '50px'
          }}
        />
        <iframe
          title="iframe-step5-4"
          style={{
            display: 'block',
            margin: 'auto',
            marginBottom: '0px',
            border: 'none',
            marginLeft: '0px',
            marginTop: '-52px'
          }}
          width="709"
          height="980"
          src="http://51.254.222.200/arnaud_apoc/APOCamundi/chapFolder/etape1/etape1/frame7/index.html"
          id="frame7"
          align="middle"
          onmouseover="startfor6attr();"
        />
        <br />
        <br />
        <br />
        <div
          id="quiz"
          class="valider"
          style={{
            backgroundColor: 'black',
            fontWeight: 'normal',
            borderRadius: ' 11px',
            boxShadow: '-5px 5px 5px 0 silver',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'inline-block',
            fontSize: '11px',
            marginLeft: '400px',
            marginTop: '40px',
            padding: '15px 10px',
            textDecoration: 'none',
            textShadow: '0 1px 0 #2f6627',
            textTransform: 'uppercase',
            width: '175px',
            textAlign: 'center',
            fontFamily: 'Helvetica Neue LT Std 55 Roman'
          }}
          onclick="parent.parent.quiz1();"
        >
          POURSUIVRE VERS<br />le quiz de fin d'étape
        </div>
      </div>
    );
  }
}

Step5.propTypes = {};
