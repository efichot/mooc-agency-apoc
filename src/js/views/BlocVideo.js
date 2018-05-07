import React from 'react';
import PropTypes from 'prop-types';
import Player from '@vimeo/player';
// import Iframe from 'react-iframe';

import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
import Fade from '../transitions/Fade';

class BlocVideo extends React.Component {
  state = {
    durationInMinutes: 1
  };

  video = React.createRef();

  componentDidMount() {
    if (this.props.in) {
      const player = new Player(this.video.current);
      player
        .getDuration()
        .then(duration => {
          this.setState({ durationInMinutes: Math.ceil(duration / 60) });
        })
        .catch(error => {
          console.error('no duration for the video');
        });
    }
  }

  render() {
    const {
      noChapter,
      secondary,
      name,
      firstDescription,
      videoUrl,
      secondDescription
    } = this.props;

    return (
      <Fade classProps={`bloc-video bloc`} in={this.props.in}>
        {!noChapter && (
          <BlocHeader type="video" duration={this.state.durationInMinutes} />
        )}
        <span className={`bloc__name${secondary ? ' secondary' : ''}`}>
          {name}
        </span>
        {firstDescription && (
          <BlocDescription
            classProps="bloc__first-description"
            description={firstDescription}
          />
        )}
        <div className="bloc-video__video--container">
          <iframe
            ref={this.video}
            title={name}
            src={`${videoUrl}`}
            className="video bloc-video__video"
            position="relative"
            display="block"
            styles={{
              width: '100%',
              height: 'auto'
            }}
            allowFullScreen
            frameBorder="0"
          />
        </div>
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

BlocVideo.propTypes = {
  in: PropTypes.bool,
  noChapter: PropTypes.bool,
  secondary: PropTypes.bool,
  name: PropTypes.string,
  firstDescription: PropTypes.object,
  videoUrl: PropTypes.string.isRequired,
  secondDescription: PropTypes.object
};

BlocVideo.defaultProps = {
  in: false,
  name: '',
  noChapter: false,
  secondary: false,
  firstDescription: undefined,
  secondDescription: undefined
};

export default BlocVideo;
