import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

//import PropTypes from 'prop-types';

export default class DropCard extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    return (
      <Droppable droppableId={this.props.id}>
        {(provided, snapshot) => (
          <div className={`drop-card`} ref={provided.innerRef}>
            {this.props.children}
          </div>
        )}
      </Droppable>
    );
  }
}

DropCard.propTypes = {};
