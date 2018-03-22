import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ButtonPrimary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onclick && this.props.onclick();
  }

  render() {
    return (
      <div
        className={`button button-primary ${this.props.classes}`}
        onClick={this.handleClick}
        style={{
          backgroundColor:
            this.props.color || 'var(--buttonPrimaryDefaultColor)'
        }}
      >
        {this.props.name}
      </div>
    );
  }
}

ButtonPrimary.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func
};
