import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from './BlocHeader';
import BlocSpacer from './BlocSpacer';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import Fade from '../transitions/Fade';

const BlocLink = ({
  buttonName,
  chapter,
  modulType,
  noChapter,
  iconType,
  secondary,
  name,
  duration,
  firstDescription,
  secondDescription,
  linkName,
  link,
  scrollIntoView,
  onClick,
  margins,
  spacer,
  spacerBottom,
  spacerTop,
  ...otherProps
}) => {
  let linkButton;

  if (link !== '#') {
    if (linkName) {
      linkButton = (
        <div className="bloc-link__group-link">
          {linkName && <span className="bloc-link__link-name">{linkName}</span>}
          <a className="bloc-link__link" href={link} target="_blank" rel="noopener noreferrer">
            <ButtonPrimary minWidth name={buttonName} enableClick />
          </a>
        </div>
      );
    } else {
      linkButton = (
        <a className="bloc-link__link" href={link} target="_blank" rel="noopener noreferrer">
          <ButtonPrimary minWidth name={buttonName} enableClick />
        </a>
      );
    }
  } else {
    linkButton = <ButtonPrimary minWidth classProps="bloc-link__link" name={buttonName} onClick={onClick} />;
  }

  return (
    <Fade classProps="bloc-link bloc" in={otherProps.in} scrollIntoView={scrollIntoView} margins={margins}>
      {!noChapter && <BlocHeader type={iconType} duration={duration} name={chapter} />}
      {name && <span className={`bloc__name ${secondary}`}>{name}</span>}
      {firstDescription && (
        <BlocDescription modulType={modulType} classProps="bloc__second-description" description={firstDescription} />
      )}
      {secondDescription && (
        <BlocDescription modulType={modulType} classProps="bloc__second-description" description={secondDescription} />
      )}
      <BlocSpacer height={spacer || spacerTop} />
      {linkButton}
      <BlocSpacer height={spacer || spacerBottom} />
    </Fade>
  );
};

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
  buttonName: PropTypes.string,
  spacer: PropTypes.number,
  spacerTop: PropTypes.number,
  spacerBottom: PropTypes.number,
};

BlocLink.defaultProps = {
  in: false,
  scrollIntoView: false,
  noChapter: false,
  duration: 0,
  secondary: '',
  chapter: '',
  name: '',
  firstDescription: undefined,
  secondDescription: undefined,
  linkName: undefined,
  iconType: 'horloge',
  buttonName: 'Télécharger',
  spacer: undefined,
  spacerTop: undefined,
  spacerBottom: undefined,
};

export default BlocLink;
