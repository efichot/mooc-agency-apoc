import React from 'react';
import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import CardContentType1 from './UI/CardContentType1';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import PropTypes from 'prop-types';

export default class BlocQCMType1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // buttonActive: ,
      victoryMessage: undefined,
      gameIsFinished: false,
      correctAnswer: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
  }

  handleClick(answer) {
    console.log(answer);
    this.setState({ buttonActive: answer });
    this.setState({ victoryMessage: null });
    this.setState({ gameIsFinished: false });
  }

  handleValidate(e) {
    if (this.state.buttonActive === this.state.correctAnswer) {
      this.setState({ victoryMessage: `Bravo ! C'est la bonne réponse.` });
      this.setState({ gameIsFinished: true });
      this.props.gameIsFinished(this.state.gameIsFinished);
    } else {
      this.setState({
        victoryMessage: `Ce n'est pas la bonne réponse. Réessayez !`
      });
    }
  }

  componentDidMount() {
    this.props.context.answers.forEach((answer, index) => {
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
    } = this.props.context;

    return (
      <div className={`bloc bloc-QCM-type-1`}>
        {!noChapter && (
          <BlocHeader type="horloge" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{name}</span>
        <div className="bloc-QCM-type-1__cards">
          {cards.map(card => {
            return (
              <CardContentType1
                key={card.startPosition}
                content={card.content}
              />
            );
          })}
        </div>
        <BlocDescription
          classes="bloc__first-description"
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
                  classes={`button-QCM-type-1${
                    this.state.buttonActive === index + 1 ? ' active' : ''
                  }${this.state.gameIsFinished ? ' finished' : ''}`}
                  onclick={this.handleClick}
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
          onclick={this.handleValidate}
          classes={`bloc-QCM-type-1__validate`}
        />
      </div>
    );
  }
}

BlocQCMType1.propTypes = {
  context: PropTypes.object.isRequired,
  gameIsFinished: PropTypes.func
};
