import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ContainerFlex } from '@scripty/styles';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${props => (props.isDragging ? 'yellow' : props.color)};
    display: ${props => props.display};
    flex: ${props => (props.display === 'flex') ? '1 0 auto' : 'none'};
    min-height: 30px;
    padding: 5px;
`;

export const Row = (props) => {
    const  { _id, children, isDropDisabled = true, direction = 'horizontal', color = 'blue', display = 'flex'} = props;
    return (
        <Droppable isDropDisabled={false} droppableId={_id} direction={direction} type={'column'}>
            {(provided) => (
                <ContainerFlex
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    layout={'sized'}
                >
                    <Container color={color} display={display}>
                    {children}
                    {provided.placeholder}
                    </Container>
                </ContainerFlex>
            )}
        </Droppable>
    );
}
