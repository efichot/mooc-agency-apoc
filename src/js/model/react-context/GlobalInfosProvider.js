import React from 'react';
import userInfos from '../dynamic/header/userInfos';
import stepNavigation from '../static/stepNavigation';
import menuTop from '../static/menuTop';
import step5 from '../static/step5';
import step6 from '../static/step6';
import step7 from '../static/step7';
import step8 from '../static/step8';
//import PropTypes from 'prop-types';

const GlobalInfosContext = React.createContext('globalInfos');

class GlobalInfosProvider extends React.Component {
  state = {
    userInfos,
    stepNavigation,
    menuTop,
    step5,
    step6,
    step7,
    step8
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
