import React from 'react';
import PropTypes from 'prop-types';
// import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';

export default class DragCard extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    const { isDragging, color } = this.props;
    return (
      <div
        className={`drag-card`}
        style={{
          backgroundColor: !isDragging ? 'white' : color ? color : 'purple'
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

DragCard.propTypes = {
  isDragging: PropTypes.bool.isRequired,
  color: PropTypes.string,
  id: PropTypes.number
};
