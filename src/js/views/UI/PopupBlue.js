import React from 'react';
//import PropTypes from 'prop-types';

export default class PopupBlue extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <div
        className={`${this.props.classes ? this.props.classes : ''} popup-blue`}
        style={{ opacity: this.props.hideCard ? 0 : 1 }}
      >
        {this.props.children}
      </div>
    );
  }
}

PopupBlue.propTypes = {};
