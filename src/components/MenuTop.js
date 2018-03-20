import React from 'react';
import menuTop from '../model/static/menuTop';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

//import PropTypes from 'prop-types';

export default class componentName extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = {};
  //}

  render() {

    return(
      <div className="menu-top">
        {Object.keys(menuTop).map((menu, i) => {
          if (i === 0) {
            return (
              <Link to="#" key={i} className={`menu-top__item menu-top__item-${i + 1} menu-item menu-item-${i + 1}`}>
                <FontAwesomeIcon icon={['fas','home']}/>
              </Link>
            )
          } else {
            return (
              <Link to="#" key={i} className={`menu-top__item menu-top__item-${i + 1} menu-item menu-item-${i + 1}`}>
                <span className={`menu-top__item--title menu-item-title menu-item-${i + 1}-title`}>{menuTop[`${menu}`].title}</span>
                <span className={`menu-top__item--subtitle menu-item-subtitle menu-item-${i + 1}-subtitle`}>{menuTop[`${menu}`].subtitle}</span>
              </Link>
            )
          }
        })}
      </div>
    )
  }
}

componentName.propTypes = {

};
