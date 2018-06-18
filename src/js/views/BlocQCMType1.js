import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import CardContentType1 from './UI/CardContentType1';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import Fade from '../transitions/Fade';

class BlocQCMType1 extends React.Component {
  state = {
    victoryMessage: undefined,
    gameIsFinished: false,
    correctAnswer: 0
  };

  handleClick = answer => {
    this.setState({ buttonActive: answer });
    this.setState({ victoryMessage: null });
    this.setState({ gameIsFinished: false });
  };

  handleValidate = e => {
    if (this.state.buttonActive === this.state.correctAnswer) {
      this.setState({ victoryMessage: `Bravo ! C'est la bonne réponse.` });
      this.setState({ gameIsFinished: true });
      this.props.gameIsFinished(this.state.gameIsFinished);
    } else {
      this.setState({
        victoryMessage: `Ce n'est pas la bonne réponse. Réessayez !`
      });
    }
  };

  componentDidMount() {
    this.props.answers.forEach((answer, index) => {
      if (this.state.correctAnswer > 0) {
        return;
      } else if (answer.correctAnswer) {
        this.setState({ correctAnswer: index + 1 });
      } else {
        return;
      }
    });
  }

  render() {
    const {
      modulType,
      noChapter,
      duration,
      chapter,
      name,
      question,
      cards,
      answers,
      scrollIntoView
    } = this.props;

    return (
      <Fade
        classProps={`bloc bloc-QCM-type-1`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}
      >
        {!noChapter && (
          <BlocHeader type="horloge" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{name}</span>
        <div className="bloc-QCM-type-1__cards">
          {cards.map(card => {
            return (
              <CardContentType1 key={card.startPosition} {...card.content} />
            );
          })}
        </div>
        <BlocDescription
          modulType={modulType}
          classProps="bloc__first-description"
          description={question}
        />
        <div className="bloc-QCM-type-1__answer-and-popup game">
          <div className="bloc-QCM-type-1__answers">
            {answers.map((answer, index) => {
              return (
                <ButtonPrimary
                  key={index}
                  id={`QCM_question_1_answer_${index}`}
                  name={answer.content}
                  classProps={`button-QCM-type-1${
                    this.state.buttonActive === index + 1 ? ' active' : ''
                  }${this.state.gameIsFinished ? ' finished' : ''}`}
                  onClick={this.handleClick}
                  answer={index + 1}
                />
              );
            })}
          </div>
          {this.state.victoryMessage && (
            <PopupBlue>
              <span className="">{this.state.victoryMessage}</span>
            </PopupBlue>
          )}
        </div>
        <ButtonPrimary
          name="valider"
          onClick={this.handleValidate}
          classProps={`bloc-QCM-type-1__validate`}
        />
      </Fade>
    );
  }
}

BlocQCMType1.propTypes = {
  in: PropTypes.bool,
  gameIsFinished: PropTypes.func,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  duration: PropTypes.number,
  name: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      startPosition: PropTypes.number.isRequired,
      content: PropTypes.shape({
        bigBorder: PropTypes.bool.isRequired,
        cardTitle: PropTypes.string.isRequired,
        cardSubTitle: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        legend: PropTypes.arrayOf(
          PropTypes.shape({
            legendColor: PropTypes.string.isRequired,
            legendText: PropTypes.string.isRequired
          }).isRequired
        ).isRequired
      }).isRequired
    }).isRequired
  ).isRequired,
  question: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
  description: PropTypes.shape({ __html: PropTypes.string.isRequired })
};

BlocQCMType1.defaultProps = {
  in: false,
  noChapter: false,
  duration: 0,
  description: undefined
};

export default BlocQCMType1;
