import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';

class UserGameInfos extends React.Component {
  state = {};

  render() {
    const { classProps, big } = this.props;

    return (
      <div className={`${classProps}__user-game-infos user-game-infos`}>
        <GlobalInfosContext.Consumer>
          {context => (
            <React.Fragment>
              <div
                className={`user-game-infos__progression ${classProps}__user-game-infos__progression`}
              >
                <span className="title">Progression{big ? '' : ': '}</span>
                <span className="value">
                  {context.state.userInfos.progression * 100}%
                </span>
              </div>
              <div
                className={`user-game-infos__score ${classProps}__user-game-infos__score`}
              >
                <span className="title">Score{big ? '' : ': '}</span>
                <div
                  className={`user-game-infos__score--stars ${classProps}__user-game-infos__score--stars`}
                >
                  {[1, 2, 3, 4, 5].map((key, index) => {
                    return (
                      <div
                        key={index}
                        className={`star star-${index} ${
                          context.state.userInfos.score <= index * 0.2
                            ? 'isEmpty'
                            : 'isFull'
                        }`}
                      >
                        <FontAwesomeIcon icon={['fas', 'star']} />
                      </div>
                    );
                  })}
                </div>
              </div>
              {!big ? (
                <div className={`${classProps}__user-game-infos__rank`}>
                  <span className="title">Rang: </span>
                  <span className="value">{context.state.userInfos.rank}e</span>
                </div>
              ) : (
                <div className={`${classProps}__user-game-infos__ranking`}>
                  <span className="title">Classement</span>
                  <span className={`rank rank-1`}>1 - Amundidi</span>
                  <span className={`rank rank-2`}>2 - Florianrabasse</span>
                  <span className={`rank rank-3`}>3 - Zoran</span>
                  <span
                    className={`rank rank-${context.state.userInfos.rank}`}
                    style={{ color: 'blue' }}
                  >
                    {context.state.userInfos.rank} -{' '}
                    {context.state.userInfos.name}
                  </span>
                </div>
              )}
            </React.Fragment>
          )}
        </GlobalInfosContext.Consumer>
      </div>
    );
  }
}

UserGameInfos.propTypes = {
  classProps: PropTypes.string.isRequired,
  big: PropTypes.bool
};

UserGameInfos.defaultProps = {
  big: false
};

export default UserGameInfos;
