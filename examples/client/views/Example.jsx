import React, { useEffect } from 'react';
import { getCardIds } from '../../../src';
import { useStore } from '@scripty/react-store';
import { Article } from './cards/Article';
import { Layout } from '../../../src/Layout';

export const Example = () => {
    const { layoutConfigStore } = useStore('layoutConfigStore');
    const { cardsStore } = useStore('cardsStore');
    const layoutConfig = layoutConfigStore.getAt(0);
    const cards = cardsStore.data;
    const components = { Article };

    useEffect(() => {
        layoutConfigStore.proxy.read({ assignment: 'Test' });
    }, []);

    useEffect(() => {
        if (layoutConfig.assignment === 'Test') {
            cardsStore.proxy.find({ _ids: getCardIds(layoutConfig) });
        }
    }, [layoutConfig]);

    return (
        <Layout
            config={layoutConfig}
            cards={cards}
            components={components}
        />
    );
}
