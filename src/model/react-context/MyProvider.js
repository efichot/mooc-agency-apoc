import React from 'react';
import userInfos from '../dynamic/header/userInfos';
import stepNavigation from '../static/stepNavigation';
import menuTop from '../static/menuTop';
//import PropTypes from 'prop-types';

const MyContext = React.createContext();


class MyProvider extends React.Component {

  state = {
    userInfos,
    stepNavigation,
    menuTop
  }

  render() {

    return(
      <MyContext.Provider value={{
        state: this.state,
        //functions
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

// MyProvider.propTypes = {

// };


export { MyContext, MyProvider }
