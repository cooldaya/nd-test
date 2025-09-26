/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UsergroupPQO = {
    properties: {
        id: {
            type: 'number',
            description: `Id`,
            format: 'int64',
        },
        createdPerson: {
            type: 'string',
            description: `创建人`,
            isNullable: true,
        },
        updatedPerson: {
            type: 'string',
            description: `更新人`,
            isNullable: true,
        },
        createdAt: {
            type: 'string',
            description: `创建时间`,
            isNullable: true,
            format: 'date-time',
        },
        updatedAt: {
            type: 'string',
            description: `更新时间`,
            isNullable: true,
            format: 'date-time',
        },
        name: {
            type: 'string',
            description: `名称`,
            isNullable: true,
        },
        remark: {
            type: 'string',
            description: `备注`,
            isNullable: true,
        },
        pageIndex: {
            type: 'number',
            description: `当前页码`,
            format: 'int32',
        },
        pageSize: {
            type: 'number',
            description: `页码容量`,
            format: 'int32',
            maximum: 100,
        },
        field: {
            type: 'string',
            description: `排序字段`,
            isNullable: true,
        },
        order: {
            type: 'string',
            description: `排序方向`,
            isNullable: true,
        },
    },
} as const;
