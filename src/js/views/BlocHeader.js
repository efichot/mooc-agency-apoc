import React from 'react';
import PropTypes from 'prop-types';

import Fade from '../transitions/Fade';

import video from '../../assets/img/icons/view.png';
import horloge from '../../assets/img/icons/horloge.png';
import chrono from '../../assets/img/icons/chrono.png';

class BlocHeader extends React.Component {
  render() {
    const { duration, type, name: nameProp, margins } = this.props;

    const minutesAndSeconds = Math.ceil(duration * 100) / 100;
    const minutes = Math.floor(minutesAndSeconds);
    const seconds = Math.round((minutesAndSeconds - minutes) * 60);
    const durationToShow = seconds !== 0 ? `${minutes} min ${seconds} sec` : `${minutes} min`;

    const picType = type === 'video' ? video : type === 'horloge' ? horloge : type === 'chrono' ? chrono : '';
    const name = type === 'video' ? 'Vidéo' : nameProp;

    return (
      <Fade in={this.props.in} classProps=" bloc-header" margins={margins}>
        <div className="bloc-header__picture" style={{ backgroundImage: `url(${picType})` }} />
        <div className="bloc-header__infos">
          <span className="bloc-header__infos--name">{name}</span>
          <span className="bloc-header__infos--duration">Durée: {durationToShow}</span>
        </div>
      </Fade>
    );
  }
}

BlocHeader.propTypes = {
  in: PropTypes.bool,
  type: PropTypes.string.isRequired,
  duration: PropTypes.number,
  name: PropTypes.string,
  /*modulType: PropTypes.string.isRequired,*/
};

BlocHeader.defaultProps = {
  in: true,
  name: '',
  // duration: 0,
};

export default BlocHeader;
