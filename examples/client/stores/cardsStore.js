import { createStore } from '@scripty/react-store';

export default createStore({
    name: 'cardsStore',
    model: {
        fields: [
            { name: 'type', type: 'string' },
            { name: 'content', type: 'object'}
        ]
    },
    proxy: {
        rootProperty: 'entries',
        api: {
            find: {
                url: '/cards/find',
                method: 'post'
            },
            read: {
                url: '/cards/read',
                method: 'get'
            },
            update: {
                url: '/cards/update',
                method: 'post'
            },
            destroy: {
                url: '/cards/destroy',
                method: 'post'
            }
        }
    }
});
