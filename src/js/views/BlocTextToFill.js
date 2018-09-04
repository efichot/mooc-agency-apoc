import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from './BlocHeader';
import BlocSpacer from './BlocSpacer';
import BlocDescription from './BlocDescription';
import TextToFill from './UI/TextToFill';
import Fade from '../transitions/Fade';

class BlocTextToFill extends React.Component {
  state = {
    showNextModule: 0,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.reset) {
      return {
        ...prevState,
        showNextModule: 0,
      };
    }
    return prevState;
  }

  handleTextFinished = bool => {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
    if (this.state.showNextModule >= 0) {
      this.props.gameIsFinished(bool);
    }
  };

  render = () => {
    const {
      modulType,
      noChapter,
      chapter,
      duration,
      iconType,
      title,
      title2,
      description,
      firstText,
      secondText,
    } = this.props;

    const { showNextModule } = this.state;

    return (
      <Fade in={this.props.in} classProps={`bloc bloc-text-to-fill`} margins={this.props.margins}>
        {!noChapter && <BlocHeader type={iconType} duration={duration} name={chapter} />}
        <span className="bloc__name">{title}</span>
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={description} />
        {firstText && (
          <React.Fragment>
            <BlocSpacer />
            <TextToFill
              in={this.props.in}
              textToFill={firstText}
              gameIsFinished={() => this.handleTextFinished(false)}
            />
          </React.Fragment>
        )}
        {secondText && (
          <React.Fragment>
            <BlocSpacer />
            <TextToFill
              in={showNextModule > 0}
              scrollIntoView={showNextModule > 0}
              title={title2}
              textToFill={secondText}
              gameIsFinished={this.handleTextFinished}
            />
          </React.Fragment>
        )}
      </Fade>
    );
  };
}

BlocTextToFill.propTypes = {
  in: PropTypes.bool,

  /********* DATA ********/

  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  duration: PropTypes.number,
  iconType: PropTypes.string,
  title: PropTypes.string.isRequired,
  title2: PropTypes.string,
  description: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  firstText: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        position: PropTypes.number.isRequired,
        toFill: PropTypes.bool.isRequired,
        content: PropTypes.shape({ __html: PropTypes.string.isRequired }),
      }),
      PropTypes.shape({
        position: PropTypes.number.isRequired,
        toFill: PropTypes.bool.isRequired,
        choices: PropTypes.arrayOf(PropTypes.string).isRequired,
        answer: PropTypes.string.isRequired,
      }),
    ]),
  ).isRequired,
  secondText: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        position: PropTypes.number.isRequired,
        toFill: PropTypes.bool.isRequired,
        content: PropTypes.shape({ __html: PropTypes.string.isRequired }),
      }),
      PropTypes.shape({
        position: PropTypes.number.isRequired,
        toFill: PropTypes.bool.isRequired,
        choices: PropTypes.arrayOf(PropTypes.string).isRequired,
        answer: PropTypes.string.isRequired,
      }),
    ]),
  ),
};

BlocTextToFill.defaultProps = {
  in: false,

  /********* DATA ********/

  noChapter: false,
  iconType: 'horloge',
  duration: 0,
  title2: undefined,
  secondText: undefined,
};

export default BlocTextToFill;
