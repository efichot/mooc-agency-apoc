import React from 'react';
/*import PropTypes from 'prop-types';*/
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import menuTop from '../model/static/menuTop';

class MenuTop extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="menu-top__padding-top" />
        <div className="menu-top">
          {Object.keys(menuTop).map((menu, i) => {
            if (i === 0) {
              return (
                <Link to="/" key={i} className={`menu-top__item menu-top__item-${i + 1} menu-item menu-item-${i + 1}`}>
                  <FontAwesomeIcon icon={['fas', 'home']} />
                </Link>
              );
            } else {
              return (
                <Link to="#" key={i} className={`menu-top__item menu-top__item-${i + 1} menu-item menu-item-${i + 1}`}>
                  <span className={`menu-top__item--title menu-item-title menu-item-${i + 1}-title`}>
                    {menuTop[`${menu}`].title}
                  </span>
                  <span className={`menu-top__item--subtitle menu-item-subtitle menu-item-${i + 1}-subtitle`}>
                    {menuTop[`${menu}`].subtitle}
                  </span>
                </Link>
              );
            }
          })}
        </div>
      </React.Fragment>
    );
  }
}

MenuTop.propTypes = {};

MenuTop.defaultProps = {};

export default MenuTop;
