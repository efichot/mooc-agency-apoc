import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import Fade from '../transitions/Fade';

class BlocText extends React.Component {
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
      scrollIntoView,
    } = this.props;

    return (
      <Fade classProps="bloc bloc-text" in={this.props.in} scrollIntoView={scrollIntoView} margins={this.props.margins}>
        {!noChapter && <BlocHeader type={iconType} duration={duration} name={chapter} />}
        <span className={`bloc__name${secondary}`}>{name}</span>
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={firstDescription} />
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

BlocText.propTypes = {
  in: PropTypes.bool,
  scrollIntoView: PropTypes.bool,
  noChapter: PropTypes.bool,
  iconType: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  name: PropTypes.string.isRequired,
  duration: PropTypes.number,
  firstDescription: PropTypes.object.isRequired,
  secondDescription: PropTypes.object,
  modulType: PropTypes.string.isRequired,
};

BlocText.defaultProps = {
  in: false,
  scrollIntoView: false,
  noChapter: false,
  duration: 0,
  secondary: '',
  secondDescription: undefined,
};

export default BlocText;
