import React from 'react';
import UserGameInfos from '../components/UserGameInfos';
import ChapterPresentation from '../components/ChapterPresentation';
import { MyContext } from '../model/react-context/MyProvider';
//import PropTypes from 'prop-types';

export default class Introduction extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = {};
  //}

  render() {

    return(
      <div className={`introduction`}>
        <UserGameInfos class={`introduction`} big={true} />
        <MyContext.Consumer>
          {(context) => {
            return (
            <React.Fragment>            
              {Object.keys(context.state.stepNavigation)
                .filter(key => context.state.stepNavigation[`${key}`].visible)
                .filter(key => (context.state.stepNavigation[`${key}`].part === (this.props.showPart1 ? 1 : 2)) || (context.state.stepNavigation[`${key}`].part === 'all'))
                .map((key, i) => (
                    <ChapterPresentation 
                      key={i}
                      classes={`introduction`}
                      name={context.state.stepNavigation[`${key}`].name}
                      videoUrl={context.state.stepNavigation[`${key}`].videoUrl}
                      description={context.state.stepNavigation[`${key}`].description && context.state.stepNavigation[`${key}`].description}
                      button={context.state.stepNavigation[`${key}`].buttonName && {
                        link: `steps/${context.state.stepNavigation[`${key}`].stepLink}`,
                        name: `${context.state.stepNavigation[`${key}`].buttonName}`,
                        classes: ''
                      }}
                    />
              ))}
            </React.Fragment>
          )}}
        </MyContext.Consumer>
      </div>
    )
  }
}

Introduction.propTypes = {

};
