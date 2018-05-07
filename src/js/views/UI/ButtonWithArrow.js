import React from 'react';
import button_arrow_right from '../../../assets/img/icons/button-arrow-right.svg';
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
  button: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

ButtonWithArrow.defaultProps = {};

export default ButtonWithArrow;
