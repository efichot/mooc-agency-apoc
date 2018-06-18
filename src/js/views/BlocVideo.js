import React from 'react';
import PropTypes from 'prop-types';
import Player from '@vimeo/player';
// import Iframe from 'react-iframe';

import BlocHeader from './BlocHeader';
import BlocSpacer from './BlocSpacer';
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
      modulType,
      name,
      noChapter,
      secondary,
      firstDescription,
      videoUrl,
      secondDescription,
      scrollIntoView
    } = this.props;

    return (
      <Fade
        classProps={`bloc-video bloc`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}
      >
        {!noChapter && (
          <BlocHeader type="video" duration={this.state.durationInMinutes} />
        )}
        <span className={`bloc__name${secondary ? ' secondary' : ''}`}>
          {name}
        </span>
        {firstDescription && (
          <BlocDescription
            modulType={modulType}
            classProps="bloc__first-description"
            description={firstDescription}
          />
        )}
        <div className="bloc-video__video--container game">
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
          <React.Fragment>
            <BlocSpacer />
            <BlocDescription
              modulType={modulType}
              classProps="bloc__second-description"
              description={secondDescription}
            />
          </React.Fragment>
        )}
      </Fade>
    );
  }
}

BlocVideo.propTypes = {
  in: PropTypes.bool,
  scrollIntoView: PropTypes.bool,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,

  noChapter: PropTypes.bool,
  secondary: PropTypes.bool,
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  secondDescription: PropTypes.shape({ __html: PropTypes.string.isRequired })
};

BlocVideo.defaultProps = {
  in: false,

  /***************** DATA ******************/

  noChapter: false,
  secondary: false,
  firstDescription: undefined,
  secondDescription: undefined
};

export default BlocVideo;
