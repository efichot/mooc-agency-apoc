import React from 'react';
//import PropTypes from 'prop-types';

export default class Step4 extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <div>
        <iframe
          title="step4-iframe-1"
          style={{
            display: 'block',
            margin: 'auto',
            marginBottom: ' 0px',
            border: 'none',
            marginLeft: '0px'
          }}
          width="709"
          height="5000"
          src="/etape5/etape5/index.html"
          id="frame1"
          align="middle"
          scrolling="no"
        />
      </div>
    );
  }
}

Step4.propTypes = {};
