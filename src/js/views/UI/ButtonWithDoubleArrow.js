import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import button_down_right from '../../../assets/img/icons/button-down-right.png';
import button_up_left from '../../../assets/img/icons/button-up-left.png';
import PropTypes from 'prop-types';

class ButtonWithDoubleArrow extends React.Component {
  state = {};

  handleArrowClick = e => {
    this.props.onClick(e.target.dataset.plusorminus, this.props.attachedName);
  };

  render() {
    const { button, value } = this.props;

    return (
      <div className="button-double-arrow">
        <ButtonPrimary
          classProps="button-double-arrow__button"
          name={button.name}
          value={value}
          color={button.color}
        />
        <div className="button-double-arrow__arrows">
          <div
            data-plusorminus="plus"
            className="button-double-arrow__arrows--arrow-left-up"
            style={{ backgroundImage: `url(${button_up_left})` }}
            onClick={this.handleArrowClick}
          />
          <div
            data-plusorminus="minus"
            className="button-double-arrow__arrows--arrow-left-up"
            style={{ backgroundImage: `url(${button_down_right})` }}
            onClick={this.handleArrowClick}
          />
        </div>
      </div>
    );
  }
}

ButtonWithDoubleArrow.propTypes = {
  attachedName: PropTypes.string.isRequired,
  button: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

ButtonWithDoubleArrow.defaultProps = {};

export default ButtonWithDoubleArrow;
