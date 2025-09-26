/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $KnowledgeCatalogueTreeNode = {
    properties: {
        id: {
            type: 'number',
            format: 'int64',
        },
        name: {
            type: 'string',
            description: `名称`,
            isNullable: true,
        },
        parentId: {
            type: 'number',
            description: `父级id`,
            format: 'int64',
        },
        sort: {
            type: 'number',
            description: `排序号`,
            format: 'int32',
        },
        display: {
            type: 'boolean',
            description: `是否显示`,
        },
        count: {
            type: 'number',
            format: 'int32',
        },
        children: {
            type: 'array',
            contains: {
                type: 'KnowledgeCatalogueTreeNode',
            },
            isNullable: true,
        },
    },
} as const;
