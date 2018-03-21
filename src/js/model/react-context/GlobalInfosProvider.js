import React from 'react';
import userInfos from '../dynamic/header/userInfos';
import stepNavigation from '../static/stepNavigation';
import menuTop from '../static/menuTop';
import step7 from '../static/step7';
//import PropTypes from 'prop-types';

const keyGame = Object.keys(step7).filter(
  key =>
    step7[`${key}`].linkWithBlocSubMenu1ButtonPosition &&
    step7[`${key}`].linkWithBlocSubMenu1ButtonPosition === 1
);

const dataGame = step7[keyGame];

const GlobalInfosContext = React.createContext('globalInfos');

class GlobalInfosProvider extends React.Component {
  state = {
    userInfos,
    stepNavigation,
    menuTop,
    dataGame
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
