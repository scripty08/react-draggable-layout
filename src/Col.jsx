import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'transparent')};
    margin: 5px;
    padding: 5px;
`;

export const Col = (props) => {
    const  { children, _id, index } = props;

    const getTasks = () => {
            return (
                <Draggable
                    draggableId={_id}
                    index={parseInt(index)}
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
            )
    }

    return getTasks();
}
