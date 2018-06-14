import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ButtonPrimary extends React.Component {
  state = {};

  handleClick = e => {
    !this.props.onClick
      ? !this.props.enableClick && e.preventDefault()
      : this.props.answer
        ? this.props.onClick(this.props.answer)
        : this.props.onClick(e);
  };

  render() {
    const {
      id,
      classProps,
      color,
      name,
      value,
      borderColor,
      fontColor
    } = this.props;

    return (
      <div
        id={id}
        className={`button button-primary ${classProps}`}
        onClick={this.handleClick}
        style={{
          backgroundColor: color,
          borderColor: borderColor,
          color: fontColor
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
  answer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  borderColor: PropTypes.string,
  fontColor: PropTypes.string,
  enableClick: PropTypes.bool
};

ButtonPrimary.defaultProps = {
  classProps: '',
  subname: '',
  color: 'var(--buttonPrimaryDefaultColor)',
  borderColor: '',
  fontColor: '',
  answer: undefined,
  value: undefined,
  onClick: undefined,
  enableClick: false
};

export default ButtonPrimary;
