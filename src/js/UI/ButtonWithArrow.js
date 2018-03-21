import React from 'react';
import video from '../../assets/img/icons/button-arrow-right.svg';
import ButtonPrimary from '../UI/ButtonPrimary';
//import PropTypes from 'prop-types';

export default class ButtonWithArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.click(this.props.button.action);
  }

  render() {
    const { button } = this.props;

    return (
      <div className="bloc-sub-menu-1__group" onClick={this.handleClick}>
        <ButtonPrimary
          classes="bloc-sub-menu-1__button"
          name={button.name}
          color={button.color}
        />
        <div
          className="bloc-sub-menu-1__arrow"
          style={{ backgroundImage: `url(${video})` }}
        />
      </div>
    );
  }
}

ButtonWithArrow.propTypes = {};
