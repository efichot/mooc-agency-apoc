import React from 'react';
import userInfos from '../dynamic/header/userInfos';
import stepNavigation from '../static/stepNavigation';
import menuTop from '../static/menuTop';
import step7 from '../static/step7';
//import PropTypes from 'prop-types';

const GlobalInfosContext = React.createContext('globalInfos');

class GlobalInfosProvider extends React.Component {
  state = {
    userInfos,
    stepNavigation,
    menuTop,
    step7
  };

  render() {
    return (
      <GlobalInfosContext.Provider
        value={{
          state: this.state,
          moveDragCard(dragStartOrEnd, dragPosition, card) {
            card.currentPosition.dragStartOrEnd = dragStartOrEnd;
            card.currentPosition.position = dragPosition;
          }
        }}
      >
        {this.props.children}
      </GlobalInfosContext.Provider>
    );
  }
}

// GlobalInfosProvider.propTypes = {

// };

export { GlobalInfosContext, GlobalInfosProvider };
