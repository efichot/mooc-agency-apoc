import React from 'react';
import ButtonPrimary from './UI/ButtonPrimary';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
// import ReactPlayer from 'react-player';

//import PropTypes from 'prop-types';

export default class ChapterPresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={`${
          this.props.classes
        }__chapter-presentation chapter-presentation`}
      >
        <div className="left-column">
          <span className="title">{this.props.name}</span>
          <p className="description">{this.props.description}</p>
          {this.props.button && (
            <Link to={this.props.button.link}>
              <ButtonPrimary
                name={this.props.button.name}
                classes={this.props.button.classes}
              />
            </Link>
          )}
        </div>
        <div className="right-column video-wrapper">
          <Iframe
            title={this.props.name}
            url={`${this.props.videoUrl}`}
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
      </div>
    );
  }
}

ChapterPresentation.propTypes = {};
