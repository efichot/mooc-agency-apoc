import React from 'react';
//import PropTypes from 'prop-types';

export default class Step2 extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <div>
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
          src="/etape6/etape6/index.html"
          id="IndexFrame1"
          align="middle"
          scrolling="no"
        />
      </div>
    );
  }
}

Step2.propTypes = {};
