import React from 'react';
import userInfos from '../dynamic/header/userInfos';
import stepNavigation from '../static/stepNavigation';
import menuTop from '../static/menuTop';
import step1 from '../static/step1';
import step2 from '../static/step2';
import step3 from '../static/step3';
import step4 from '../static/step4';
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
    step1,
    step2,
    step3,
    step4,
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
