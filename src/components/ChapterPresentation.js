import React from 'react';
import ButtonPrimary from './UI/ButtonPrimary';
import ReactPlayer from 'react-player';

//import PropTypes from 'prop-types';

export default class ChapterPresentation extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = {};
  //}

  render() {

    return(
      <div className={`${this.props.classes}__chapter-presentation chapter-presentation`}>
        <div className="left-column">
          <span className="title">{this.props.name}</span>
          <p className="description">{this.props.description}</p>
          {this.props.button && <ButtonPrimary link={this.props.button.link} name={this.props.button.name} classes={this.props.button.classes} />}
        </div>
        <div className="right-column video-wrapper">
            <ReactPlayer 
            className='video'
              url={`${this.props.videoUrl}`} 
              width={220}
              height={'auto'} />
        </div>

      </div>
    )
  }
}

ChapterPresentation.propTypes = {

};
