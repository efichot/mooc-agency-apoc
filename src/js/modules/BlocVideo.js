import React from 'react';
import BlocHeader from './BlocHeader';
import BlocDescription from './BlocDescription';
// import Iframe from 'react-iframe';
import Player from '@vimeo/player';

export default class BlocVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      durationInMinutes: 1
    };
  }

  componentDidMount() {
    const player = new Player(this.video);
    player
      .getDuration()
      .then(duration => {
        this.setState({ durationInMinutes: Math.ceil(duration / 60) });
      })
      .catch(error => {
        console.error('no duration for the video');
      });
  }

  render() {
    return (
      <div className={`bloc-video bloc`}>
        <BlocHeader type="video" duration={this.state.durationInMinutes} />
        <span className="bloc__name">{this.props.name}</span>
        <BlocDescription
          classes="bloc__first-description"
          description={this.props.firstDescription}
        />
        <div className="bloc__video--container">
          <iframe
            ref={vid => {
              this.video = vid;
            }}
            title={this.props.name}
            src={`${this.props.videoUrl}`}
            className="video bloc__video"
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
        <BlocDescription
          classes="bloc__second-description"
          description={this.props.secondDescription}
        />
      </div>
    );
  }
}

BlocVideo.propTypes = {};
