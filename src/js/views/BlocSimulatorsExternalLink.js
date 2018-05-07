import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import ButtonPrimary from '../views/UI/ButtonPrimary';
import Fade from '../transitions/Fade';

class BlocSimulatorsExternalLink extends React.Component {
  state = {
    durationInMinutes: 1
  };

  render() {
    const {
      noChapter,
      name,
      duration,
      chapter,
      firstDescription,
      backgroundImage,
      secondDescription,
      button,
      link
    } = this.props;

    return (
      <Fade in={this.props.in} classProps={`bloc-simulator bloc`}>
        {!noChapter && (
          <BlocHeader type="horloge" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{name}</span>
        {firstDescription && (
          <BlocDescription
            classProps="bloc__first-description"
            description={firstDescription}
          />
        )}
        <a
          className="bloc-simulator__link--picture bloc-simulator__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="bloc-simulator__background-img"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </a>
        <a
          className="bloc-simulator__link--button bloc-simulator__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonPrimary name={button} />
        </a>
        {secondDescription && (
          <BlocDescription
            classProps="bloc__second-description"
            description={secondDescription}
          />
        )}
      </Fade>
    );
  }
}

BlocSimulatorsExternalLink.propTypes = {
  in: PropTypes.bool,
  noChapter: PropTypes.bool,
  name: PropTypes.string.isRequired,
  duration: PropTypes.number,
  chapter: PropTypes.string,
  firstDescription: PropTypes.object.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  secondDescription: PropTypes.object,
  button: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

BlocSimulatorsExternalLink.defaultProps = {
  in: false,
  noChapter: false,
  secondDescription: undefined,
  chapter: '',
  duration: 0
};

export default BlocSimulatorsExternalLink;
