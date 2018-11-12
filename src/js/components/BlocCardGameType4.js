import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import DragCard from './UI/DragCard';
import DropCardForGame from './UI/DropCardForGame';
import ButtonPrimary from './UI/ButtonPrimary';
import BlocSchemaType1 from './BlocSchemaType1';
import Fade from '../transitions/Fade';
import PopupBlue from './UI/PopupBlue';
import victoryMessages from '../model/static/popupBlueMessages';

class BlocCardGameType4 extends React.Component {
  state = {
    explanationMessage: undefined,
    victoryMessage: undefined,
    column1CurrentIndex: 0,
    column2CurrentIndex: 0,
    column3CurrentIndex: 0,
    column1IsFinished: false,
    column2IsFinished: false,
    column3IsFinished: false,
    exercise: true,
  };

  componentDidUpdate(prevProp, prevState) {
    const { column1IsFinished, column2IsFinished, column3IsFinished } = this.state;

    const {
      column1IsFinished: prevcolumn1IsFinished,
      column2IsFinished: prevcolumn2IsFinished,
      column3IsFinished: prevcolumn3IsFinished,
    } = prevState;

    if (
      column1IsFinished === true &&
      column2IsFinished === true &&
      column3IsFinished === true &&
      JSON.stringify({ column1IsFinished, column2IsFinished, column3IsFinished }) !==
        JSON.stringify({
          column1IsFinished: prevcolumn1IsFinished,
          column2IsFinished: prevcolumn2IsFinished,
          column3IsFinished: prevcolumn3IsFinished,
        })
    ) {
      this.setState({ victoryMessage: victoryMessages.isGoodAnswerDragAndDropStep5 });
      // this.props.gameIsFinished();
    }
  }

  handleDragCard = ({ dropType, dragType, answer, column }) => {
    // console.log({ dropType, dragType, answer, column });
    if (dropType === dragType) {
      if (this.state[`column${column}CurrentIndex`] === 2) {
        this.setState({
          [`column${column}CurrentIndex`]: undefined,
          [`column${column}IsFinished`]: true,
          explanationMessage: this.props.game[`column${column}`].types.filter(type => type.type === dropType)[0]
            .explanation,
        });
        return;
      }
      this.setState({
        [`column${column}CurrentIndex`]: this.state[`column${column}CurrentIndex`] + 1,
        explanationMessage: this.props.game[`column${column}`].types.filter(type => type.type === dropType)[0]
          .explanation,
      });
    }
  };

  render() {
    const {
      modulType,
      chapter,
      title,
      duration,
      firstDescription,
      secondary,
      scrollIntoView,
      game,
      schema,
    } = this.props;

    const {
      explanationMessage,
      victoryMessage,
      column1CurrentIndex,
      column2CurrentIndex,
      column3CurrentIndex,
      exercise,
    } = this.state;

    return (
      <Fade
        classProps="bloc-card-game-type-4 bloc"
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {exercise && (
          <React.Fragment>
            <BlocHeader type="horloge" duration={duration} name={chapter} />
            {title && <span className={`bloc__name ${secondary}`}>{title}</span>}
            {firstDescription && (
              <BlocDescription
                modulType={modulType}
                classProps="bloc__second-description"
                description={firstDescription}
              />
            )}
            <div className="bloc-card-game-type-4__game game">
              {Object.keys(game)
                .map(key => game[key])
                .map((column, ind) => {
                  let index;
                  switch (column.title) {
                    case 'Émetteurs':
                      index = column1CurrentIndex;
                      break;
                    case 'Intermédiaires':
                      index = column2CurrentIndex;
                      break;
                    case 'Investisseurs':
                      index = column3CurrentIndex;
                      break;
                    default:
                      index = 0;
                      break;
                  }
                  return (
                    <React.Fragment key={ind}>
                      {index !== undefined && (
                        <DragCard
                          type={modulType}
                          id={column.title}
                          endPosition={0}
                          classProps={`grid-row-start-${ind + 1}-gridgap grid-column-start-1-gridgap`}
                          styleProps={
                            {
                              // gridRow: ind + 1,
                              // gridColumn: 1,
                            }
                          }
                          content={{
                            isDraggable: true,
                            list: column.actors[index].list,
                            cardTitle: column.actors[index].title,
                            cardSubTitle: column.actors[index].subTitle,
                            help: column.actors[index].help,
                            type: column.actors[index].type,
                            column: ind + 1,
                          }}
                        />
                      )}
                      <div
                        className={`category grid-row-start-${ind + 1}-gridgap grid-column-start-2-gridgap`}
                        style={
                          {
                            // gridRow: ind + 1,
                            // gridColumn: 2,
                          }
                        }>
                        {column.title}
                      </div>
                      <div
                        className={`types grid-row-start-${ind + 1}-gridgap grid-column-start-3-gridgap`}
                        style={
                          {
                            // gridRow: ind + 1,
                            // gridColumn: 3,
                          }
                        }>
                        {column.types.map((type, i) => (
                          <DropCardForGame
                            key={type.type}
                            type={type.type}
                            startOrEnd="end"
                            onDragCard={this.handleDragCard}
                            classProps={`grid-row-start-${i + 1}-gridgap`}
                          />
                        ))}
                      </div>
                    </React.Fragment>
                  );
                })}
              {victoryMessage && (
                <div className="popup-victory-container">
                  <PopupBlue
                    classProps="popup-victory"
                    onCloseClick={() => {
                      this.state.victoryMessage === victoryMessages.isGoodAnswerDragAndDropStep5 &&
                        this.props.gameIsFinished(this.props.modulType);
                      this.setState({ victoryMessage: undefined });
                    }}>
                    <span className="">{victoryMessage}</span>
                  </PopupBlue>
                </div>
              )}
              {explanationMessage && (
                <div className="popup-explanation-container">
                  <PopupBlue
                    classProps="popup-explanation"
                    onCloseClick={() => this.setState({ explanationMessage: undefined })}>
                    <span className="card-title">{explanationMessage.title}</span>
                    <span className="card-subtitle">{explanationMessage.subTitle}</span>
                    <span className="card-description">{explanationMessage.description}</span>
                  </PopupBlue>
                </div>
              )}
            </div>
          </React.Fragment>
        )}
        {!exercise && <BlocSchemaType1 {...schema} />}
        <ButtonPrimary
          minWidth
          onClick={() => this.setState({ exercise: !exercise })}
          name={exercise ? 'Voir le schéma' : "Retourner à l'exercice"}
        />
      </Fade>
    );
  }
}

BlocCardGameType4.propTypes = {
  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  secondary: PropTypes.string,
  scrollIntoView: PropTypes.bool,
};

BlocCardGameType4.defaultProps = {
  noChapter: false,
  scrollIntoView: false,
  secondary: '',
};

export default BlocCardGameType4;
