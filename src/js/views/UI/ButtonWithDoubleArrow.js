import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import button_down_right from '../../../assets/img/icons/button-down-right.svg';
import button_up_left from '../../../assets/img/icons/button-up-left.svg';
//import PropTypes from 'prop-types';

export default class ButtonWithDoubleArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleArrowClick(e) {
    this.props.click(e.target.dataset.plusorminus, this.props.attachedName);
  }

  render() {
    const { button } = this.props;

    return (
      <div className="button-double-arrow">
        <ButtonPrimary
          classes="button-double-arrow__button"
          name={button.name}
          value={this.props.value}
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

ButtonWithDoubleArrow.propTypes = {};
