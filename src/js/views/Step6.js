import React from 'react';
//import PropTypes from 'prop-types';
import BlocStepTopContent from '../modules/BlocStepTopContent';
import step6 from '../model/static/step6';

export default class Step6 extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <BlocStepTopContent context={step6} />
        <iframe
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
          src="/etape2/etape2/index.html"
          id="frame1index"
          align="middle"
          scrolling="no"
        />
      </div>
    );
  }
}

Step6.propTypes = {};
