import React from 'react';
import PropTypes from 'prop-types';

class ButtonPrimary extends React.Component {
  state = {};

  handleClick = e => {
    !this.props.onClick
      ? !this.props.enableClick && e.preventDefault()
      : this.props.answer ? this.props.onClick(this.props.answer) : this.props.onClick(e);
  };

  render() {
    const { id, classProps, color, name, value, borderColor, fontColor, styleProps, minWidth } = this.props;

    return (
      <div
        id={id}
        className={`button button-primary ${classProps} ${minWidth ? 'min-width' : ''}`}
        onClick={this.handleClick}
        style={{
          background: color,
          borderColor: borderColor,
          color: fontColor,
          ...styleProps,
        }}>
        {name.__html ? <span dangerouslySetInnerHTML={name} /> : <span>{name}</span>}
        {value !== undefined && <span>{value}</span>}
      </div>
    );
  }
}

ButtonPrimary.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.shape({ __html: PropTypes.string.isRequired })]),
  onClick: PropTypes.func,
  value: PropTypes.string,
  subname: PropTypes.string,
  classProps: PropTypes.string,
  color: PropTypes.string,
  answer: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  borderColor: PropTypes.string,
  fontColor: PropTypes.string,
  enableClick: PropTypes.bool,
  minWidth: PropTypes.bool,
  styleProps: PropTypes.object,
};

ButtonPrimary.defaultProps = {
  classProps: '',
  subname: '',
  color: process.env.REACT_APP_BUTTON_PRIMARY_DEFAULT_COLOR,
  borderColor: '',
  fontColor: '',
  answer: undefined,
  value: undefined,
  onClick: undefined,
  enableClick: false,
  styleProps: {},
  minWidth: false,
};

export default ButtonPrimary;
