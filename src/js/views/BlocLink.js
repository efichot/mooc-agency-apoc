import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import Fade from '../transitions/Fade';

class BlocLink extends React.Component {
  state = {};

  handleClick = e => {
    this.props.onClick();
  };

  render() {
    const {
      modulType,
      noChapter,
      iconType,
      chapter,
      secondary,
      name,
      duration,
      firstDescription,
      secondDescription,
      linkName,
      link,
      buttonName
    } = this.props;

    return (
      <Fade classProps={`bloc-link bloc`} in={this.props.in}>
        {!noChapter && (
          <BlocHeader type={iconType} duration={duration} name={chapter} />
        )}
        {name && <span className={`bloc__name ${secondary}`}>{name}</span>}
        {firstDescription && (
          <BlocDescription
            modulType={modulType}
            classProps="bloc__second-description"
            description={firstDescription}
          />
        )}
        {secondDescription && (
          <BlocDescription
            modulType={modulType}
            classProps="bloc__second-description"
            description={secondDescription}
          />
        )}
        {linkName && link !== '#' ? (
          <div className="bloc-link__group-link">
            {linkName && (
              <span className="bloc-link__link-name">{linkName}</span>
            )}
            <a
              className="bloc-link__link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonPrimary name={buttonName} enableClick />
            </a>
          </div>
        ) : link !== '#' ? (
          <a
            className="bloc-link__link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonPrimary name={buttonName} enableClick />
          </a>
        ) : (
          <ButtonPrimary
            classProps="bloc-link__link"
            name={buttonName}
            onClick={this.handleClick}
          />
        )}
      </Fade>
    );
  }
}

BlocLink.propTypes = {
  in: PropTypes.bool,

  /******** DATAT **********/

  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  iconType: PropTypes.string,
  chapter: PropTypes.string,
  secondary: PropTypes.string,
  linkName: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.number,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  secondDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  buttonName: PropTypes.string
};

BlocLink.defaultProps = {
  in: false,
  noChapter: false,
  duration: 0,
  secondary: '',
  chapter: '',
  name: '',
  firstDescription: undefined,
  secondDescription: undefined,
  linkName: undefined,
  iconType: 'horloge',
  buttonName: 'Télécharger'
};

export default BlocLink;
