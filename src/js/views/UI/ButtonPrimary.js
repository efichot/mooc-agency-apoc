import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ButtonPrimary extends React.Component {
  state = {};

  handleClick = e => {
    !this.props.onClick
      ? e.preventDefault()
      : this.props.answer
        ? this.props.onClick(this.props.answer)
        : this.props.onClick(e);
  };

  render() {
    const { id, classProps, color, name, value } = this.props;

    return (
      <div
        id={id}
        className={`button button-primary ${classProps}`}
        onClick={this.handleClick}
        style={{
          backgroundColor: color
        }}
      >
        {name}
        <br />
        {value !== undefined && value}
      </div>
    );
  }
}

ButtonPrimary.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string,
  subname: PropTypes.string,
  classProps: PropTypes.string,
  color: PropTypes.string,
  answer: PropTypes.number
};

ButtonPrimary.defaultProps = {
  classProps: '',
  subname: '',
  color: 'var(--buttonPrimaryDefaultColor)',
  answer: null,
  value: undefined,
  onClick: undefined
};

export default ButtonPrimary;
