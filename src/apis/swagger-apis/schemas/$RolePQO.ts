/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RolePQO = {
    description: `用户分页查询参数类`,
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
