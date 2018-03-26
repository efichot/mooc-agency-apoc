import React from 'react';
import video from '../../assets/img/icons/view.png';
import horloge from '../../assets/img/icons/horloge.png';
import chrono from '../../assets/img/icons/chrono.png';
import PropTypes from 'prop-types';

export default class BlocHeader extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    const picType =
      this.props.type === 'video'
        ? video
        : this.props.type === 'horloge'
          ? horloge
          : this.props.type === 'chrono' ? chrono : '';
    const name = this.props.type === 'video' ? 'Vidéo' : this.props.name;

    return (
      <div className=" bloc-header">
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
      </div>
    );
  }
}

BlocHeader.propTypes = {
  type: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  name: PropTypes.string
};
