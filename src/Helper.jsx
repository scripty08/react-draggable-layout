import React from 'react';
import { Col } from './Col';
import { Row } from './Row';

export const getCardIds = (config) => {
    const columns = config.columns;
    let _ids = [];
    Object.keys(columns).forEach((key) => {
        if (typeof columns[key].taskIds !== 'undefined') {
            columns[key].taskIds.map((rec) => {
                _ids.push(rec);
            });
        } else {
            Object.keys(columns[key]).forEach((key2) => {
                columns[key][key2].taskIds.map((rec) => {
                    _ids.push(rec);
                });
            })
        }
    });
    return _ids;
};

const getRows = (config) => {
    return Object.keys(config.columns).map((column, key) => {

    });
};

export const layoutFactory = ({config, cards, components, onComponentChange}) => {
    return Object.keys(config.columns).map((column, key) => {

        if (typeof config.columns[column].taskIds !== 'undefined') {
            let cols = config.columns[column].taskIds.map((_id, idx) => {
                return cards.map((card) => {
                    if (card._id === _id) {
                        const Component = components[card.type];
                        return (

                                <Col _id={`${_id}`} index={idx}>
                                    <Component _id={_id} {...card} onChange={onComponentChange} />
                                </Col>
                            )
                    }
                });
            });

            return (
                <Row key={key} _id={column} display={'block'} direction={'vertical'}>
                    {cols}
                </Row>
            )
        } else {

        }


    });
}

export const getStateAfterDragEnd = (props) => {
    const { destination, source, draggableId, config } = props;
    if (!destination) {
        return;
    }

    if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return;
    }

    const start = config.columns[source.droppableId];
    const finish = config.columns[destination.droppableId];

    if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...start,
            taskIds: newTaskIds
        }

        return {
            ...config,
            columns: {
                ...config.columns,
                [newColumn.id]: newColumn
            }
        }
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
        ...start,
        taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
        ...finish,
        taskIds: finishTaskIds
    };

    return {
        ...config,
        columns: {
            ...config.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish
        }
    };
}
