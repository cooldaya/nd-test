/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $KnowledgeCatalogueFO = {
    properties: {
        id: {
            type: 'number',
            description: `id`,
            format: 'int64',
        },
        createdPerson: {
            type: 'string',
            isNullable: true,
        },
        updatedPerson: {
            type: 'string',
            isNullable: true,
        },
        createdAt: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        updatedAt: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
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
            description: `目录对应文件数量`,
            format: 'int32',
        },
        type: {
            type: 'number',
            description: `类型(1:灌区灌溉 2:防汛抗旱)`,
            format: 'int32',
        },
    },
} as const;
