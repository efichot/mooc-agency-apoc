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

  handleButtonClick = answer => {
    console.log('answer', answer);
    this.props.onButtonClick(answer, this.props.attachedName);
  };

  render() {
    const { noButton, button, value, answer } = this.props;

    return (
      <div className="button-double-arrow">
        {!noButton && (
          <ButtonPrimary
            classProps="button-double-arrow__button"
            name={button.name}
            value={value}
            color={button.color}
            onClick={this.handleButtonClick}
            answer={answer}
          />
        )}
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
  attachedName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  button: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  noButton: PropTypes.bool,
  answer: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
};

ButtonWithDoubleArrow.defaultProps = {
  noButton: false,
  answer: '',
  value: '',
  name: '',
};

export default ButtonWithDoubleArrow;
