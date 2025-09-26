/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessagePQO = {
    properties: {
        id: {
            type: 'number',
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
        title: {
            type: 'string',
            description: `标题`,
            isNullable: true,
        },
        content: {
            type: 'string',
            description: `内容`,
            isNullable: true,
        },
        type: {
            type: 'string',
            description: `类型`,
            isNullable: true,
        },
        recordId: {
            type: 'number',
            description: `实体id`,
            isNullable: true,
            format: 'int64',
        },
        ftwobpmId: {
            type: 'string',
            description: `流程引擎里的id`,
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
