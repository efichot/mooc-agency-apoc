import React from 'react';
import BlocDragAndDrop1 from '../modules/BlocDragAndDrop1';
import BlocDescription from '../modules/BlocDescription';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
//import PropTypes from 'prop-types';

export default class Step7Actions extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <div className={`step step7-actions`}>
        <GlobalInfosContext.Consumer>
          {context => {
            let step7ActionsDataGames = {};
            Object.keys(context.state.step7)
              .filter(key => {
                return (
                  context.state.step7[`${key}`]
                    .linkWithBlocSubMenu1ButtonPosition &&
                  context.state.step7[`${key}`]
                    .linkWithBlocSubMenu1ButtonPosition === 1
                );
              })
              .forEach(key => {
                step7ActionsDataGames[`${key}`] = context.state.step7[`${key}`];
              });

            console.log('step7ActionsDataGames:', step7ActionsDataGames);
            let step7Description;
            let step7DragAndDrop;
            Object.keys(step7ActionsDataGames).forEach(module => {
              if (
                step7ActionsDataGames[`${module}`].modulType ===
                'bloc-drag-and-drop-1'
              ) {
                step7DragAndDrop = step7ActionsDataGames[`${module}`];
              } else if (
                step7ActionsDataGames[`${module}`].modulType ===
                'bloc-description'
              ) {
                step7Description = step7ActionsDataGames[`${module}`];
              }
            });

            console.log('step7Description:', step7Description);
            return (
              <React.Fragment>
                <BlocDescription
                  description={step7Description.description}
                  padding
                />
                <BlocDragAndDrop1 context={step7DragAndDrop} />
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </div>
    );
  }
}

Step7Actions.propTypes = {};
