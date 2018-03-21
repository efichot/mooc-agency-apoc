import React from 'react';
import BlocDragAndDrop1 from '../modules/BlocDragAndDrop1';
import BlocDescription from '../modules/BlocDescription';
import BlocEnSavoirPlusType1 from '../modules/BlocEnSavoirPlusType1';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
//import PropTypes from 'prop-types';

export default class Step7Obligations extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <div className={`step step7-obligations`}>
        <GlobalInfosContext.Consumer>
          {context => {
            let step7ActionsDataGames = {};
            Object.keys(context.state.step7)
              .filter(key => {
                return (
                  context.state.step7[`${key}`]
                    .linkWithBlocSubMenu1ButtonPosition &&
                  context.state.step7[`${key}`]
                    .linkWithBlocSubMenu1ButtonPosition === 2
                );
              })
              .forEach(key => {
                step7ActionsDataGames[`${key}`] = context.state.step7[`${key}`];
              });

            let step7Description;
            let step7DragAndDrop;
            let step7EnSavoirPlus;

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
              } else if (
                step7ActionsDataGames[`${module}`].modulType ===
                'bloc-en-savoir-plus-type-1'
              ) {
                step7EnSavoirPlus = step7ActionsDataGames[`${module}`];
              }
            });

            return (
              <React.Fragment>
                <BlocDescription
                  description={step7Description.description}
                  padding
                />
                <BlocEnSavoirPlusType1 context={step7EnSavoirPlus} />
                <BlocDragAndDrop1 context={step7DragAndDrop} />
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </div>
    );
  }
}

Step7Obligations.propTypes = {};
