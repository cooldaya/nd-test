/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SqlSugarPagedList_DataDictionaryVO = {
    description: `分页泛型集合`,
    properties: {
        pageIndex: {
            type: 'number',
            description: `页码`,
            format: 'int32',
        },
        pageSize: {
            type: 'number',
            description: `页容量`,
            format: 'int32',
        },
        total: {
            type: 'number',
            description: `总条数`,
            format: 'int32',
        },
        totalPages: {
            type: 'number',
            description: `总页数`,
            format: 'int32',
        },
        items: {
            type: 'array',
            contains: {
                type: 'DataDictionaryVO',
            },
            isNullable: true,
        },
        hasPrevPage: {
            type: 'boolean',
            description: `是否有上一页`,
        },
        hasNextPage: {
            type: 'boolean',
            description: `是否有下一页`,
        },
    },
} as const;
