/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserMessageVO = {
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
    },
} as const;
