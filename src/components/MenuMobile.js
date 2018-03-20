import React from 'react';
import HamburgerMenu from './UI/HamburgerMenu';
import ButtonCircle from './UI/ButtonCircle';
import menuTop from '../model/static/menuTop';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

//import PropTypes from 'prop-types';

export default class MenuMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {

    return(
      <div className="menu-mobile">
        <div className="menu-mobile__item active">
          <HamburgerMenu onClick={this.handleClick}/>
          <div className="menu-mobile__item--description">
            <span className={`menu-mobile__item--title menu-item-title`}></span>
            <span className={`menu-mobile__item--subtitle menu-item-subtitle`}>{this.state.isVisible ? 'fermer le menu' : 'accéder au menu'}</span>
          </div>
        </div>
        {Object.keys(menuTop).map((menu, i) => {return (
          <Link to="#" key={i} className={`menu-mobile__item menu-mobile__item-${i + 1} menu-item menu-item-${i + 1} ${this.state.isVisible ? 'active' : ''}`}>
            <ButtonCircle class={`menu-mobile__item--icon button-circle__${i + 1}`}>
              <FontAwesomeIcon icon={menuTop[`${menu}`].icon}/>
            </ButtonCircle>
            <div className="menu-mobile__item--description">
              <span className={`menu-mobile__item--title menu-item-title menu-item-${i + 1}-title`}>{menuTop[`${menu}`].title}</span>
              <span className={`menu-mobile__item--subtitle menu-item-subtitle menu-item-${i + 1}-subtitle`}>{menuTop[`${menu}`].subtitle}</span>
            </div>
          </Link>
        )})}
      </div>
    )
  }
}

MenuMobile.propTypes = {

};
