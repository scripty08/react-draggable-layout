import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'inherit')};
`;

export const Task = (props) => {
    const { _id, index, columnId, components, editing, children} = props;
    return (
        <Draggable
            draggableId={_id}
            index={index}
            isDragDisabled={false}
        >
            {(provided, snapshot) => (
                <Container
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    className={'task'}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {children}
                </Container>
            )}

        </Draggable>
    );
}
