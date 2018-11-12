import React from 'react';
/*import PropTypes from 'prop-types';*/
import { Link } from 'react-router-dom';

import { DataContext } from '../model/DataProvider';

class Header extends React.Component {
  state = {};

  render() {
    return (
      <div className="header">
        <DataContext.Consumer>
          {context => (
            <React.Fragment>
              <div className="header__top">
                <div className="header__logo bg-cover" />
                <div className="header__user">
                  <div className="header__user--avatar bg-cover" />
                  <div className="header__user--infos">
                    <div className="header__user--info formation">
                      <span>{context.state.userInfos.formation}</span>
                    </div>
                    <div className="header__user--info name">
                      <span>Bienvenue {context.state.userInfos.name}</span>
                    </div>
                    <div className="header__user--info deconnection">
                      <Link to="#" className="button-link">
                        <span>Se déconnecter</span>
                      </Link>
                    </div>
                    <div className="header__user--info cgu">
                      <Link to="#" className="button-link">
                        <span>CGU</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </DataContext.Consumer>
      </div>
    );
  }
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
