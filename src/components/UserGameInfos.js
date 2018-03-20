import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { MyContext } from '../model/react-context/MyProvider';
import PropTypes from 'prop-types';

export default class UserGameInfos extends React.Component {

  render() {

    return(
      <div className={`${this.props.class}__user-game-infos user-game-infos`}>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <div className={`user-game-infos__progression ${this.props.class}__user-game-infos__progression`}>
                <span className='title'>Progression{this.props.big ? '' : ': '}</span>
                <span className='value'>{context.state.userInfos.progression * 100}%</span>
              </div>
              <div className={`user-game-infos__score ${this.props.class}__user-game-infos__score`}>
                <span className='title'>Score{this.props.big ? '' : ': '}</span>
                <div className={`user-game-infos__score--stars ${this.props.class}__user-game-infos__score--stars`}>
                  {[1,2,3,4,5].map((key, index) => {
                    return (
                      <div key={index} className={`star star-${index} ${context.state.userInfos.score <= index * 0.2 ? 'isEmpty' : 'isFull'}`}>
                        <FontAwesomeIcon icon={['fas','star']}/>
                      </div>
                    )
                  })}
                </div>
              </div>
              {!this.props.big 
                ? <div className={`${this.props.class}__user-game-infos__rank`}>
                    <span className='title'>Rang: </span>
                    <span className='value'>{context.state.userInfos.rank}e</span>
                  </div>
                : <div className={`${this.props.class}__user-game-infos__ranking`}>
                    <span className='title'>Classement</span>
                    <span className={`rank rank-1`}>1 - Amundidi</span>
                    <span className={`rank rank-2`}>2 - Florianrabasse</span>
                    <span className={`rank rank-3`}>3 - Zoran</span>
                    <span className={`rank rank-${context.state.userInfos.rank}`} style={{ color: 'blue' }}>{context.state.userInfos.rank} - {context.state.userInfos.name}</span>
                  </div>
              }
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

UserGameInfos.propTypes = {
  class: PropTypes.string.isRequired,
  big: PropTypes.bool.isRequired
};
