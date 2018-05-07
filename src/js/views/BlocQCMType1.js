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
    console.log(answer);
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
      noChapter,
      duration,
      chapter,
      name,
      question,
      cards,
      answers
    } = this.props;

    return (
      <Fade classProps={`bloc bloc-QCM-type-1`} in={this.props.in}>
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
          classProps="bloc__first-description"
          description={question}
        />
        <div className="bloc-QCM-type-1__answer-and-popup">
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
  noChapter: PropTypes.bool,
  duration: PropTypes.number,
  chapter: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  question: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired,
  gameIsFinished: PropTypes.func
};

BlocQCMType1.defaultProps = {
  in: false,
  noChapter: false,
  duration: 0
};

export default BlocQCMType1;
