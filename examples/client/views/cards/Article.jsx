import React from 'react';
import { Card } from '@scripty/react-card';

export const Article = (props) => {
    const { title, html } = props.content;

    const onClick = () => {
        props.onChange(props._id, {
            content: {
                title: 'haha',
                html: 'huhu'
            }
        });
    }

    return (
        <Card title={title}>
            <div dangerouslySetInnerHTML={{__html: html}} />
            <button onClick={onClick}>Save</button>
        </Card>
    );
};
