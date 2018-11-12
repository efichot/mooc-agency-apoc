import React from 'react';
import button_arrow_right from '../../../assets/img/icons/button-arrow-right.png';
import ButtonPrimary from './ButtonPrimary';
import PropTypes from 'prop-types';

class ButtonWithArrow extends React.Component {
  state = {};

  render() {
    const { button, classOrigin, onClick, activate } = this.props;

    return (
      <div className={`${classOrigin}__group`}>
        <ButtonPrimary
          className={`${classOrigin}__button`}
          name={button.name}
          color={activate ? button.color : 'rgba(216,216,216,1.00)'}
          borderColor={button.borderColor}
          fontColor={button.fontColor}
          onClick={onClick}
          answer={button.action}
        />
        <div
          className={`${classOrigin}__arrow`}
          style={{ backgroundImage: `url(${button_arrow_right})`, visibility: activate ? 'visible' : 'hidden' }}
          onClick={() => onClick(button.action)}
        />
      </div>
    );
  }
}

ButtonWithArrow.propTypes = {
  classOrigin: PropTypes.string.isRequired,
  activate: PropTypes.bool,
  button: PropTypes.shape({
    position: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    fontColor: PropTypes.string,
    action: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

ButtonWithArrow.defaultProps = {
  activate: true,
};

export default ButtonWithArrow;
