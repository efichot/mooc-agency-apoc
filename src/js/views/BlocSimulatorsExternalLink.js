import React from 'react';
import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import ButtonPrimary from '../views/UI/ButtonPrimary';
// import Iframe from 'react-iframe';
import PropTypes from 'prop-types';

export default class BlocSimulatorsExternalLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      durationInMinutes: 1
    };
  }

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
    } = this.props.context;

    return (
      <div className={`bloc-simulator bloc`}>
        {!noChapter && (
          <BlocHeader type="horloge" duration={duration} name={chapter} />
        )}
        <span className="bloc__name">{name}</span>
        {firstDescription && (
          <BlocDescription
            classes="bloc__first-description"
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
            classes="bloc__second-description"
            description={secondDescription}
          />
        )}
      </div>
    );
  }
}

BlocSimulatorsExternalLink.propTypes = {
  context: PropTypes.object
};
