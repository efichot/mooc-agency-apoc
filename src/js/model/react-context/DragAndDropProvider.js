import React from 'react';
import step7 from '../static/step7';

const DragAndDropContext = React.createContext('dragAndDropStep7_01');

const keyGame = Object.keys(step7).filter(
  key =>
    step7[`${key}`].linkWithBlocSubMenu1ButtonPosition &&
    step7[`${key}`].linkWithBlocSubMenu1ButtonPosition === 1
);

const dataGame = step7[keyGame];
// let dataGame;
console.log(dataGame);

class DragAndDropProvider extends React.Component {
  state = {
    step7
  };

  render() {
    return (
      <DragAndDropContext.Provider
        value={{
          state: this.state
          //functions
        }}
      >
        {this.props.children}
      </DragAndDropContext.Provider>
    );
  }
}

// DragAndDropProvider.propTypes = {

// };

export { DragAndDropContext, DragAndDropProvider };
