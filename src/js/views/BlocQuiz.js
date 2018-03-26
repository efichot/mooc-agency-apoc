import React from 'react';
import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import PopupBlueInnerHtml from './UI/PopupBlueInnerHtml';
import PropTypes from 'prop-types';
import ReactTimeout from 'react-timeout';

const popupVictoryMessage = `Bravo ! C'est la bonne réponse.`;
const popupDefeatMessage = `Ce n'est pas la bonne réponse. Réessayez !`;

class BlocQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonActive: null,
      currentQuestion: 1,
      victoryMessage: undefined,
      gameIsFinished: false,
      correctAnswer: null,
      help: false,
      questions: {},
      timeout: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
    this.showNextQuestion = this.showNextQuestion.bind(this);
    this.setTheCorrectAnswer = this.setTheCorrectAnswer.bind(this);
  }

  handleClick(answer) {
    if (this.state.victoryMessage === popupVictoryMessage) {
      return;
    }
    this.setState({ buttonActive: answer });
    this.setState({ victoryMessage: null });
    this.setState({ gameIsFinished: false });
  }

  handleValidate(e) {
    this.setState({ help: true });
    this.props.clearTimeout(this.state.timeout);
    if (this.state.buttonActive === this.state.correctAnswer) {
      this.setState({ victoryMessage: popupVictoryMessage });
      /*this.setState({ gameIsFinished: true });
      this.props.gameIsFinished(this.state.gameIsFinished);*/
      if (this.state.victoryMessage === popupVictoryMessage)
        this.showNextQuestion();
    } else {
      this.setState({ victoryMessage: popupDefeatMessage });
      const timeout = this.props.setTimeout(() => {
        this.setState({ victoryMessage: undefined });
      }, 2000);
      this.setState({ timeout });
    }
  }

  showNextQuestion() {
    if (this.state.currentQuestion < Object.keys(this.state.questions).length) {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
      this.setTheCorrectAnswer(
        this.state.questions[`question_${this.state.currentQuestion + 1}`]
      );
    }
    this.setState({ victoryMessage: undefined });
    this.setState({ buttonActive: null });
    this.setState({ help: false });
  }

  setTheCorrectAnswer(question) {
    let correctAnswer = null;
    question.answers.forEach((answer, index) => {
      if (correctAnswer !== null) {
        return;
      } else {
        if (answer.correctAnswer === true) {
          correctAnswer = index + 1;
        } else {
          return;
        }
      }
    });

    this.setState({ correctAnswer });
  }

  componentWillMount() {
    this.setState({ questions: this.props.context.questions });
    this.setTheCorrectAnswer(
      this.props.context.questions[`question_${this.state.currentQuestion}`]
    );
  }

  render() {
    const { noChapter, duration, chapter, name } = this.props.context;
    const { questions, currentQuestion } = this.state;
    const { question, answers, explication } = questions[
      `question_${currentQuestion}`
    ];

    return (
      <div className={`bloc bloc-quiz`}>
        {!noChapter && (
          <BlocHeader type="chrono" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{name}</span>
        <BlocDescription
          classes="bloc__first-description"
          description={question}
        />
        <div className="bloc-quiz__answers">
          {answers.map((answer, index) => {
            return (
              <ButtonPrimary
                key={index}
                id={`QCM_question_1_answer_${index}`}
                name={answer.content}
                classes={`button-quiz${
                  this.state.buttonActive === index + 1 ? ' active' : ''
                }${
                  this.state.victoryMessage === popupVictoryMessage
                    ? ' finished'
                    : ''
                }`}
                onclick={this.handleClick}
                answer={index + 1}
              />
            );
          })}
        </div>
        {this.state.victoryMessage && (
          <PopupBlue classes={`popup-blue__victory-message`}>
            <span>{this.state.victoryMessage}</span>
          </PopupBlue>
        )}
        <ButtonPrimary
          name={
            this.state.victoryMessage === popupVictoryMessage
              ? 'suivant'
              : 'valider'
          }
          onclick={this.handleValidate}
          classes={`bloc-quiz__validate`}
        />
        {this.state.help && (
          <PopupBlueInnerHtml
            classes={`popup-blue__explication`}
            description={explication}
          />
        )}
      </div>
    );
  }
}

BlocQuiz.propTypes = {
  context: PropTypes.object.isRequired,
  gameIsFinished: PropTypes.func
};

export default ReactTimeout(BlocQuiz);
