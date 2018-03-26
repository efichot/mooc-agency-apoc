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
    this.props.onclick &&
      (this.props.answer
        ? this.props.onclick(this.props.answer)
        : this.props.onclick(e));
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={`button button-primary ${
          this.props.classes ? this.props.classes : ''
        }`}
        onClick={this.handleClick}
        style={{
          backgroundColor:
            this.props.color || 'var(--buttonPrimaryDefaultColor)'
        }}
      >
        {this.props.name}
        <br />
        {this.props.value && this.props.value}
      </div>
    );
  }
}

ButtonPrimary.propTypes = {
  name: PropTypes.string.isRequired,
  subname: PropTypes.string.isRequired,
  classes: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func,
  answer: PropTypes.number
};
