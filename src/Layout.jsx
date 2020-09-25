import React from 'react';
import { layoutFactory, getStateAfterDragEnd } from './Helper';
import { DragDropContext } from 'react-beautiful-dnd';

export const Layout = (props) => {
    const { config, cards, components } = props;

    const onComponentChange = (_id, component) => {
        let card = cards.filter(card => card._id === _id);
        card[0].set({...component});
    }

    const onConfigChange = (newConfig) => {
        config.set({ ...newConfig });
    }

    const onDragEnd = result => {
        const newBoard = getStateAfterDragEnd({...result, config});
        onConfigChange(newBoard);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {layoutFactory({config, cards, components, onComponentChange})}
        </DragDropContext>
    )
}
