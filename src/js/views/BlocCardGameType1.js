import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import CardContentType3 from './UI/CardContentType3';
import ButtonWithDoubleArrow from './UI/ButtonWithDoubleArrow';
import Fade from '../transitions/Fade';
import PopupBlue from './UI/PopupBlue';

import backCard from '../../assets/img/step5/card.png';

class BlocCardGameType1 extends React.Component {
  state = {
    column1card1: false,
    column1card2: false,
    column1card3: false,
    column2card1: false,
    column2card2: false,
    column2card3: false,
    column3card1: false,
    column3card2: false,
    column3card3: false,
    step: 'column1card1',
    column1: this.props.game.filter(cardSet => cardSet.type === 'Émetteurs'),
    column1SecondCards: this.props.game
      .filter(cardSet => cardSet.type === 'Émetteurs')
      .filter(
        (cardSet, index, array) =>
          index === 0 ||
          cardSet.secondCard.answerNumber !==
            array[index - 1].secondCard.answerNumber
      ),
    column2: this.props.game.filter(
      cardSet => cardSet.type === 'Investisseurs'
    ),
    column2SecondCards: this.props.game
      .filter(cardSet => cardSet.type === 'Investisseurs')
      .filter(
        (cardSet, index, array) =>
          index === 0 ||
          cardSet.secondCard.answerNumber !==
            array[index - 1].secondCard.answerNumber
      ),
    column3: this.props.game.filter(
      cardSet => cardSet.type === 'Intermédiaires'
    ),
    column3SecondCards: this.props.game
      .filter(cardSet => cardSet.type === 'Intermédiaires')
      .filter(
        (cardSet, index, array) =>
          index === 0 ||
          cardSet.secondCard.answerNumber !==
            array[index - 1].secondCard.answerNumber
      ),
    column1card2currentIndex: 0,
    column2card2currentIndex: 0,
    column3card2currentIndex: 0,
    victoryMessage: undefined
  };

  componentDidMount() {
    const { column1, column2, column3 } = this.state;
    this.setState({
      column1CardIndex: Math.round(Math.random() * (column1.length - 1)),
      column2CardIndex: Math.round(Math.random() * (column2.length - 1)),
      column3CardIndex: Math.round(Math.random() * (column3.length - 1))
    });
  }

  handleColumn1Card1Click = () => {
    if (this.state.step !== 'column1card1') {
      return;
    }
    if (this.state.column1card1) {
      return;
    }
    this.setState({ column1card1: true, step: 'column1card2' });
  };

  handleColumn2Card1Click = () => {
    if (this.state.step !== 'column2card1') {
      return;
    }
    if (this.state.column2card1) {
      return;
    }
    this.setState({ column2card1: true, step: 'column2card2' });
  };

  handleColumn3Card1Click = () => {
    console.log('this.state.step', this.state.step);
    if (this.state.step !== 'column3card1') {
      return;
    }
    if (this.state.column3card1) {
      return;
    }
    this.setState({ column3card1: true, step: 'column3card2' });
  };

  handleCard2Click = (plusorminus, column) => {
    const indexName = `${column}card2currentIndex`;
    const index = this.state[indexName];

    if (plusorminus === 'plus') {
      if (index === this.state[`${column}SecondCards`].length - 1) {
        return;
      }
      this.setState({ [indexName]: index + 1 });
    } else {
      if (index === 0) {
        return;
      }
      this.setState({ [indexName]: index - 1 });
    }
  };

  handleCard2ButtonClick = (indexForAnswer, column) => {
    const indexName = `${column}card2currentIndex`;
    const index = this.state[indexName];
    const correctAnswer = this.state[`${column}`][indexForAnswer].firstCard
      .answerNumber;
    const proposedAnswer = this.state[`${column}SecondCards`][index].secondCard
      .answerNumber;

    if (correctAnswer === proposedAnswer) {
      this.setState({ victoryMessage: 'Bravo ! Vous avez réussi' });
      column === 'column1' &&
        this.setState({ column1card3: true, step: 'column3card1' });
      column === 'column3' &&
        this.setState({ column3card3: true, step: 'column2card1' });
      column === 'column2' &&
        this.setState({ column2card3: true }) &&
        this.props.gameIsFinished();
    } else {
      this.setState({
        victoryMessage: "Ce n'est pas la bonne réponse. Réessayez !"
      });
    }
  };

  handleClosePopupBlue = () => {
    this.setState({ victoryMessage: undefined });
  };

  render() {
    const {
      modulType,
      // noChapter,
      chapter,
      title,
      duration,
      firstDescription,
      secondary,
      scrollIntoView
    } = this.props;

    const {
      step,
      column1card1,
      column1card3,
      column2card1,
      column2card3,
      column3card1,
      column3card3,
      column1,
      column2,
      column3,
      column1card2currentIndex,
      column2card2currentIndex,
      column3card2currentIndex,
      column1CardIndex,
      column2CardIndex,
      column3CardIndex,
      column1SecondCards,
      column2SecondCards,
      column3SecondCards,
      victoryMessage
    } = this.state;

    const column1CardSet = column1[column1CardIndex];
    const column2CardSet = column2[column2CardIndex];
    const column3CardSet = column3[column3CardIndex];

    return (
      <Fade
        classProps={`bloc-card-game-type-1`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}
      >
        <BlocHeader type="horloge" duration={duration} name={chapter} />
        {title && <span className={`bloc__name ${secondary}`}>{title}</span>}
        {firstDescription && (
          <BlocDescription
            modulType={modulType}
            classProps="bloc__second-description"
            description={firstDescription}
          />
        )}
        <div className="bloc-card-game-type-1__game game">
          {/*

            COLUMN 1

          */}
          {(step === 'column1card2' || step === 'column3card1') &&
            victoryMessage && (
              <PopupBlue
                classProps="popup-column1"
                onCloseClick={this.handleClosePopupBlue}
              >
                <span className="">{victoryMessage}</span>
              </PopupBlue>
            )}
          <div
            className="card column-1 row-1"
            style={{
              gridRow: 1,
              gridColumn: 1
            }}
            onClick={this.handleColumn1Card1Click}
          >
            {column1card1 ? (
              <CardContentType3
                cardTitle={column1CardSet.firstCard.title}
                cardSubTitle={column1CardSet.firstCard.subTitle}
                list={column1CardSet.firstCard.list}
              />
            ) : step === 'column1card1' ? (
              <CardContentType3 bigTitle="Tirez la carte" />
            ) : (
              <CardContentType3 image={backCard} />
            )}
          </div>
          <div
            className="card column-1 row-2"
            style={{
              gridRow: 2,
              gridColumn: 1
            }}
          >
            {column1card1 ? (
              <React.Fragment>
                {!column1card3 && (
                  <ButtonWithDoubleArrow
                    button={{ name: 'Valider' }}
                    attachedName="column1"
                    onClick={this.handleCard2Click}
                    answer={column1CardIndex}
                    onButtonClick={this.handleCard2ButtonClick}
                  />
                )}
                <CardContentType3
                  title1={
                    column1SecondCards[column1card2currentIndex].secondCard
                      .title1
                  }
                  title2={
                    column1SecondCards[column1card2currentIndex].secondCard
                      .title2
                  }
                  list1={
                    column1SecondCards[column1card2currentIndex].secondCard
                      .list1
                  }
                  list2={
                    column1SecondCards[column1card2currentIndex].secondCard
                      .list2
                  }
                />
              </React.Fragment>
            ) : (
              <CardContentType3 image={backCard} />
            )}
          </div>
          <div
            className="card column-1 row-3"
            style={{
              gridRow: 3,
              gridColumn: 1
            }}
          >
            {column1card3 ? (
              <React.Fragment>
                <CardContentType3
                  cardTitle={column1CardSet.firstCard.title}
                  cardSubTitle={column1CardSet.firstCard.subTitle}
                  title1={column1[column1card2currentIndex].secondCard.title1}
                  title2={column1[column1card2currentIndex].secondCard.title2}
                  list1={column1[column1card2currentIndex].secondCard.list1}
                  list2={column1[column1card2currentIndex].secondCard.list2}
                />
              </React.Fragment>
            ) : (
              <CardContentType3 image={backCard} />
            )}
          </div>
          {/*

            COLUMN 2

          */}
          {step === 'column2card2' &&
            victoryMessage && (
              <PopupBlue
                classProps="popup-column2"
                onCloseClick={this.handleClosePopupBlue}
              >
                <span className="">{victoryMessage}</span>
              </PopupBlue>
            )}
          <div
            className="card column-2 row-1"
            style={{
              gridRow: 1,
              gridColumn: 2
            }}
            onClick={this.handleColumn2Card1Click}
          >
            {column2card1 ? (
              <CardContentType3
                cardTitle={column2CardSet.firstCard.title}
                cardSubTitle={column2CardSet.firstCard.subTitle}
                list={column2CardSet.firstCard.list}
              />
            ) : step === 'column2card1' ? (
              <CardContentType3 bigTitle="Tirez la carte" />
            ) : (
              <CardContentType3 image={backCard} />
            )}
          </div>
          <div
            className="card column-2 row-2"
            style={{
              gridRow: 2,
              gridColumn: 2
            }}
          >
            {column2card1 ? (
              <React.Fragment>
                {!column2card3 && (
                  <ButtonWithDoubleArrow
                    button={{ name: 'Valider' }}
                    attachedName="column2"
                    onClick={this.handleCard2Click}
                    answer={column2CardIndex}
                    onButtonClick={this.handleCard2ButtonClick}
                  />
                )}
                <CardContentType3
                  title1={
                    column2SecondCards[column2card2currentIndex].secondCard
                      .title1
                  }
                  title2={
                    column2SecondCards[column2card2currentIndex].secondCard
                      .title2
                  }
                  list1={
                    column2SecondCards[column2card2currentIndex].secondCard
                      .list1
                  }
                  list2={
                    column2SecondCards[column2card2currentIndex].secondCard
                      .list2
                  }
                />
              </React.Fragment>
            ) : (
              <CardContentType3 image={backCard} />
            )}
          </div>
          <div
            className="card column-2 row-3"
            style={{
              gridRow: 3,
              gridColumn: 2
            }}
          >
            {column2card3 ? (
              <React.Fragment>
                <CardContentType3
                  cardTitle={column2CardSet.firstCard.title}
                  cardSubTitle={column2CardSet.firstCard.subTitle}
                  title1={column2[column2card2currentIndex].secondCard.title1}
                  title2={column2[column2card2currentIndex].secondCard.title2}
                  list1={column2[column2card2currentIndex].secondCard.list1}
                  list2={column2[column2card2currentIndex].secondCard.list2}
                />
              </React.Fragment>
            ) : (
              <CardContentType3 image={backCard} />
            )}
          </div>
          {/*

            COLUMN 3

          */}
          {(step === 'column3card2' || step === 'column2card1') &&
            victoryMessage && (
              <PopupBlue
                classProps="popup-column3"
                onCloseClick={this.handleClosePopupBlue}
              >
                <span className="">{victoryMessage}</span>
              </PopupBlue>
            )}
          <div
            className="card column-3 row-1"
            style={{
              gridRow: 1,
              gridColumn: 3
            }}
            onClick={this.handleColumn3Card1Click}
          >
            {column3card1 ? (
              <CardContentType3
                cardTitle={column3CardSet.firstCard.title}
                cardSubTitle={column3CardSet.firstCard.subTitle}
                list={column3CardSet.firstCard.list}
              />
            ) : step === 'column3card1' ? (
              <CardContentType3 bigTitle="Tirez la carte" />
            ) : (
              <CardContentType3 image={backCard} />
            )}
          </div>
          <div
            className="card column-3 row-2"
            style={{
              gridRow: 2,
              gridColumn: 3
            }}
          >
            {column3card1 ? (
              <React.Fragment>
                {!column3card3 && (
                  <ButtonWithDoubleArrow
                    button={{ name: 'Valider' }}
                    attachedName="column3"
                    onClick={this.handleCard2Click}
                    answer={column3CardIndex}
                    onButtonClick={this.handleCard2ButtonClick}
                  />
                )}
                <CardContentType3
                  title1={
                    column3SecondCards[column3card2currentIndex].secondCard
                      .title1
                  }
                  title2={
                    column3SecondCards[column3card2currentIndex].secondCard
                      .title2
                  }
                  list1={
                    column3SecondCards[column3card2currentIndex].secondCard
                      .list1
                  }
                  list2={
                    column3SecondCards[column3card2currentIndex].secondCard
                      .list2
                  }
                />
              </React.Fragment>
            ) : (
              <CardContentType3 image={backCard} />
            )}
          </div>
          <div
            className="card column-3 row-3"
            style={{
              gridRow: 3,
              gridColumn: 3
            }}
          >
            {column3card3 ? (
              <React.Fragment>
                <CardContentType3
                  cardTitle={column3CardSet.firstCard.title}
                  cardSubTitle={column3CardSet.firstCard.subTitle}
                  title1={column3[column3card2currentIndex].secondCard.title1}
                  title2={column3[column3card2currentIndex].secondCard.title2}
                  list1={column3[column3card2currentIndex].secondCard.list1}
                  list2={column3[column3card2currentIndex].secondCard.list2}
                />
              </React.Fragment>
            ) : (
              <CardContentType3 image={backCard} />
            )}
          </div>
        </div>
      </Fade>
    );
  }
}

BlocCardGameType1.propTypes = {
  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  secondary: PropTypes.string.isRequired,
  scrollIntoView: PropTypes.bool
};

BlocCardGameType1.defaultProps = {
  noChapter: false,
  scrollIntoView: false
};

export default BlocCardGameType1;
