import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from './BlocHeader';
import BlocSpacer from './BlocSpacer';
import BlocDescription from './BlocDescription';
import ButtonPrimary from '../views/UI/ButtonPrimary';
import Fade from '../transitions/Fade';

class BlocSimulatorsExternalLink extends React.Component {
  state = {
    durationInMinutes: 1
  };

  handleClick = e => {};

  render() {
    const {
      modulType,
      noChapter,
      name,
      duration,
      chapter,
      firstDescription,
      backgroundImage,
      secondDescription,
      button,
      link,
      height
    } = this.props;

    return (
      <Fade
        in={this.props.in}
        classProps={`bloc-simulator bloc`}
        margins={this.props.margins}
      >
        {!noChapter && (
          <BlocHeader type="horloge" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{name}</span>
        {firstDescription && (
          <BlocDescription
            modulType={modulType}
            classProps="bloc__first-description"
            description={firstDescription}
          />
        )}
        <BlocSpacer />
        <a
          className="bloc-simulator__link--picture bloc-simulator__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="bloc-simulator__background-img"
            style={{ height, backgroundImage: `url(${backgroundImage})` }}
          />
        </a>
        <BlocSpacer />
        <a
          className="bloc-simulator__link--button bloc-simulator__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonPrimary name={button} onClick={this.handleClick} />
        </a>
        <BlocSpacer />
        {secondDescription && (
          <BlocDescription
            modulType={modulType}
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

  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string,
  duration: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string.isRequired,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired })
    .isRequired,
  backgroundImage: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  secondDescription: PropTypes.shape({ __html: PropTypes.string.isRequired })
};

BlocSimulatorsExternalLink.defaultProps = {
  in: false,
  noChapter: false,
  chapter: '',
  duration: 0,
  height: 500,
  secondDescription: undefined
};

export default BlocSimulatorsExternalLink;
