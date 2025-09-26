/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserMessagePQO = {
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
        userId: {
            type: 'number',
            format: 'int64',
        },
        messageId: {
            type: 'number',
            format: 'int64',
        },
        isRead: {
            type: 'boolean',
            description: `是否已读`,
            isNullable: true,
        },
        isDelete: {
            type: 'boolean',
            description: `是否已删除`,
            isNullable: true,
        },
        readTime: {
            type: 'string',
            description: `读取时间`,
            isNullable: true,
            format: 'date-time',
        },
        deleteTime: {
            type: 'string',
            description: `删除时间`,
            isNullable: true,
            format: 'date-time',
        },
        type: {
            type: 'string',
            description: `类型`,
            isNullable: true,
        },
        title: {
            type: 'string',
            description: `标题`,
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
