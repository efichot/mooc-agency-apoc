import React from 'react';
import button_arrow_right from '../../../assets/img/icons/button-arrow-right.png';
import ButtonPrimary from './ButtonPrimary';
import PropTypes from 'prop-types';

class ButtonWithArrow extends React.Component {
  state = {};

  handleClick = () => {
    this.props.onClick(this.props.button.action);
  };

  render() {
    const { button } = this.props;

    return (
      <div className="bloc-sub-menu-1__group" onClick={this.handleClick}>
        <ButtonPrimary
          classProps="bloc-sub-menu-1__button"
          name={button.name}
          color={button.color}
          borderColor={button.borderColor}
          fontColor={button.fontColor}
        />
        <div
          className="bloc-sub-menu-1__arrow"
          style={{ backgroundImage: `url(${button_arrow_right})` }}
        />
      </div>
    );
  }
}

ButtonWithArrow.propTypes = {
  button: PropTypes.shape({
    position: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    fontColor: PropTypes.string,
    action: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

ButtonWithArrow.defaultProps = {};

export default ButtonWithArrow;
