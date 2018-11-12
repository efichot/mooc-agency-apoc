import React from 'react';
import PropTypes from 'prop-types';

import ButtonCircle from './ButtonCircle';

class HamburgerMenu extends React.Component {
  state = {
    active: false,
  };

  handleClick = e => {
    this.setState({ active: !this.state.active });
    this.props.onClick(e);
  };

  render() {
    return (
      <ButtonCircle classProps="hamburger-menu-container" onClick={this.handleClick}>
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

HamburgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

HamburgerMenu.defaultProps = {};

export default HamburgerMenu;
