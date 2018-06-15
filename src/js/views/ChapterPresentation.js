import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

import ButtonPrimary from './UI/ButtonPrimary';
import Fade from '../transitions/Fade';

const ChapterPresentation = ({
  in: inProps,
  classProps,
  name,
  description,
  button,
  videoUrl
}) => {
  return (
    <Fade
      in={inProps}
      classProps={`${classProps}__chapter-presentation chapter-presentation`}
    >
      <div className="left-column">
        <span className="title">{name}</span>
        <p className="description">{description}</p>
        {button && (
          <Link to={button.link}>
            <ButtonPrimary
              name={button.name}
              classProps={button.classes}
              enableClick
            />
          </Link>
        )}
      </div>
      <div className="right-column video-wrapper">
        <Iframe
          title={name}
          url={`${videoUrl}`}
          className="video"
          position="relative"
          display="block"
          frameborder="0"
          allowFullScreen
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      </div>
    </Fade>
  );
};

ChapterPresentation.propTypes = {
  in: PropTypes.bool,
  name: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  classProps: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object
};

ChapterPresentation.defaultProps = {
  in: false,
  classProps: '',
  description: '',
  button: undefined
};

export default ChapterPresentation;
