import React from 'react';
import PropTypes from 'prop-types';

import Fade from '../transitions/Fade';

import video from '../../assets/img/icons/view.png';
import horloge from '../../assets/img/icons/horloge.png';
import chrono from '../../assets/img/icons/chrono.png';

class BlocHeader extends React.Component {
  render() {
    const picType =
      this.props.type === 'video'
        ? video
        : this.props.type === 'horloge'
          ? horloge
          : this.props.type === 'chrono' ? chrono : '';
    const name = this.props.type === 'video' ? 'Vidéo' : this.props.name;

    return (
      <Fade in={this.props.in} classProps=" bloc-header">
        <div
          className="bloc-header__picture"
          style={{ backgroundImage: `url(${picType})` }}
        />
        <div className="bloc-header__infos">
          <span className="bloc-header__infos--name">{name}</span>
          <span className="bloc-header__infos--duration">
            Durée: {Math.ceil(this.props.duration)} min
          </span>
        </div>
      </Fade>
    );
  }
}

BlocHeader.propTypes = {
  in: PropTypes.bool,
  type: PropTypes.string.isRequired,
  duration: PropTypes.number,
  name: PropTypes.string
  /*modulType: PropTypes.string.isRequired,*/
};

BlocHeader.defaultProps = {
  in: true,
  name: ''
  // duration: 0,
};

export default BlocHeader;
