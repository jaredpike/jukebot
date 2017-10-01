import React, { Component } from 'react';
import XIcon from './vectors/XIcon';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';
import { findDOMNode } from 'react-dom';

const ItemTypes = {
    PLAYLISTITEM: 'playlist-item'
};

const itemSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        };
    },
};

const itemTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.moveItem(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    },
};

class PlaylistItem extends Component {
    render() {
        const { details, index, isDragging, connectDragSource, connectDropTarget } = this.props;
        const count = parseInt(index, 10) + 1;
        return connectDragSource(connectDropTarget(
            <li className="playlist__item" style={{ opacity: isDragging ? 0.5 : 1 }}>
                <div className="playlist__item-inner">
                    <div className="playlist__order">{count}</div>
                    <h3 className="playlist__title" onClick={() => this.props.playSong(details, index)}>{details.title}</h3>
                    <button className="playlist__icon" onClick={() => this.props.removeFromPlaylist(index)}>
                        <XIcon />
                    </button>
                </div>
            </li>
        ));
    }
}

export default flow(
    DragSource(ItemTypes.PLAYLISTITEM, itemSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    })),
    DropTarget(ItemTypes.PLAYLISTITEM, itemTarget, connect => ({
        connectDropTarget: connect.dropTarget(),
    }))
)(PlaylistItem);
