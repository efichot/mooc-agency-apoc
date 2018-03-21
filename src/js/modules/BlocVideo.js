import React from 'react';
import BlocHeader from './BlocHeader';
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
    this.props.firstDescription.__html = this.props.firstDescription.__html
      .replace(/\r\n/g, '<br />')
      .replace(/[\r\n]/g, '<br />');
    this.props.secondDescription.__html = this.props.secondDescription.__html
      .replace(/\r\n/g, '<br />')
      .replace(/[\r\n]/g, '<br />');

    return (
      <div className={`bloc-video bloc`}>
        <BlocHeader type="video" duration={this.state.durationInMinutes} />
        <span className="bloc__name">{this.props.name}</span>
        <span
          className="bloc__first-description"
          dangerouslySetInnerHTML={this.props.firstDescription}
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
        <span
          className="bloc__second-description"
          dangerouslySetInnerHTML={this.props.secondDescription}
        />
      </div>
    );
  }
}

BlocVideo.propTypes = {};
