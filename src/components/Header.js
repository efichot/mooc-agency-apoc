import React from 'react';
import { Link } from 'react-router-dom';
import MenuTop from './MenuTop';
import { MyContext } from '../model/react-context/MyProvider';

//import PropTypes from 'prop-types';

export default class Header extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = {};
  //}

  render() {

    return(
      <div className="header">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <div className="header__top">
                <div className="header__logo bg-cover"></div>
                <div className="header__user">
                  <div className="header__user--avatar bg-cover"></div>
                  <div className="header__user--infos">
                    <div className="header__user--info formation"><span>{context.state.userInfos.formation}</span></div>
                    <div className="header__user--info name"><span>Bienvenue {context.state.userInfos.name}</span></div>
                    <div className="header__user--info deconnection">
                      <Link to="#">
                        <span>Se déconnecter</span>
                      </Link>
                    </div>
                    <div className="header__user--info cgu">
                      <Link to="#">
                        <span>CGU</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </MyContext.Consumer>

        <MenuTop />

      </div>
    )
  }
}

Header.propTypes = {

};
