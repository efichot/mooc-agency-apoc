import React from 'react';
import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
// import Iframe from 'react-iframe';
import PropTypes from 'prop-types';

export default class BlocText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      durationInMinutes: 1
    };
  }

  render() {
    const {
      noChapter,
      iconType,
      chapter,
      secondary,
      name,
      duration,
      firstDescription,
      secondDescription
    } = this.props.context;

    return (
      <div className={`bloc-video bloc`}>
        {!noChapter && (
          <BlocHeader type={iconType} duration={duration} name={chapter} />
        )}
        <span className={`bloc__name${secondary ? ' secondary' : ''}`}>
          {name}
        </span>
        <BlocDescription
          classes="bloc__first-description"
          description={firstDescription}
        />
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

BlocText.propTypes = {
  context: PropTypes.object
};
