import React from 'react';
import ButtonCircle from './ButtonCircle';
//import PropTypes from 'prop-types';

export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ active: !this.state.active });
    this.props.onclick();
  }

  render() {
    return (
      <ButtonCircle class="hamburger-menu-container" onclick={this.handleClick}>
        <div className={`hamburger-menu${this.state.active ? ' active' : ''}`}>
          <span className="span" />
          <span className="span" />
          <span className="span" />
          <span className="span" />
        </div>
      </ButtonCircle>
    );
  }
}

HamburgerMenu.propTypes = {};
