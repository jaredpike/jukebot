import React, { Component } from 'react';
import XIcon from './vectors/XIcon';
import { DragSource } from 'react-dnd';

const Types = {
    PLAYLISTITEM: 'playlist-item'
};

/**
 * Implements the drag source contract.
 */
const cardSource = {
    beginDrag(props) {
        // Return the data describing the dragged item
        const item = { id: props.id };
        return item;
    },
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging()
    };
}

class PlaylistItem extends Component {
    render() {
        const { details, index, isDragging, connectDragSource } = this.props;
        const count = parseInt(index, 10) + 1;
        return connectDragSource(
            <li className="playlist__item" style={{ opacity: isDragging ? 0.5 : 1 }}>
                <div className="playlist__item-inner">
                    <div className="playlist__order">{count}</div>
                    <h3 className="playlist__title" onClick={() => this.props.playSong(details, index)}>{details.title}</h3>
                    <button className="playlist__icon" onClick={() => this.props.removeFromPlaylist(index)}>
                        <XIcon />
                    </button>
                </div>
            </li>
        );
    }
}

export default DragSource(Types.PLAYLISTITEM, cardSource, collect)(PlaylistItem);