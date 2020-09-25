import { createStore } from '@scripty/react-store';

export default createStore({
    name: 'layoutConfigStore',
    model: {
        fields: [
            { name: 'assignment', type: 'string', default: '' },
            { name: 'tasks', type: 'object' },
            { name: 'columns', type: 'object', default: {
                    "header" : {
                        "logo": {
                            "id" : "logo",
                            "title" : "Logo",
                            "class": "col-12",
                            "taskIds" : []
                        },
                        "navigation": {
                            "id" : "navigation",
                            "title" : "Navigation",
                            "class": "col-12",
                            "taskIds" : []
                        },
                        "extra": {
                            "id" : "extra",
                            "title" : "Extra",
                            "class": "col-12",
                            "taskIds" : []
                        }
                    },
                    "top" : {
                        "id" : "top",
                        "title" : "Top",
                        "class": "col-3",
                        "taskIds" : []
                    },
                    "bottom" : {
                        "id" : "bottom",
                        "title" : "Bottom",
                        "class": "col-6",
                        "taskIds" : []
                    },
                    "footer" : {
                        "id" : "footer",
                        "title" : "Footer",
                        "class": "col-3",
                        "taskIds" : []
                    }
                }},
            { name: 'columnOrder', type: 'array', default:[
                    "header",
                    "top",
                    "bottom",
                    "footer"
                ]},
        ]
    },
    proxy: {
        rootProperty: 'entries',
        api: {
            read: {
                url: '/boards/read',
                method: 'get'
            },
            update: {
                url: '/boards/update',
                method: 'post'
            },
            destroy: {
                url: '/boards/destroy',
                method: 'post'
            }
        }
    }
});
